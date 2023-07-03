const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const Admin = require("./models/Admin");
const Courses = require("./models/Courses");
const User = require("./models/User");
const mongoose = require("mongoose");
var cors = require("cors");
const SECRET_KEY = "mysecretkey";

app.use(express.json());
app.use(cors());

// Admin routes

const validateAdmin = (req, res, next) => {
  const token =
    req.headers["authorization"] && req.headers["authorization"].split(" ")[1];
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: "Token is not provided" });
  }

  jwt.verify(token, SECRET_KEY, (err, decode) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(403).json({ message: "Token expired" });
      }
      return res.status(403).json({ message: "Invalid token" });
    }

    req.user = decode;
    next();
  });
};

app.post("/admin/signup", async (req, res) => {
  // logic to sign up admin
  const userData = {
    username: req.headers.username,
    password: req.headers.password,
  };

  if (!userData.username) {
    return res.json({ message: "Enter username and password" });
  }

  const findAdmin = await Admin.find({ username: userData.username });

  if (findAdmin.length > 0) {
    res.status(500).json({ message: "Username already existed" });
  } else {
    const createAdmin = await Admin.create(userData);
    res.status(200).json({
      message: "Admin created successfully",
      createAdmin,
    });
  }
});

app.post("/admin/login", async (req, res) => {
  // logic to log in admin
  const userData = {
    username: req.headers.username,
    password: req.headers.password,
  };

  if (!userData.username || !userData.password) {
    return res.json({ message: "Enter username and password" });
  }

  const token = jwt.sign(userData, SECRET_KEY, { expiresIn: "1h" });

  const findAdmin = await Admin.find({
    username: userData.username,
    password: userData.password,
  });

  if (findAdmin.length > 0) {
    return res.status(201).json({
      message: "Logged in successfully",
      Token: token,
    });
  } else {
    return res.json({ message: "Username or Password is Incorrect" });
  }
});

app.post("/admin/courses", validateAdmin, async (req, res) => {
  // logic to create a course
  let courseId = Math.floor(Math.random() * 100);

  const course = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    imageLink: req.body.imageLink,
    published: req.body.published,
  };

  const createCourse = await Courses.create(course);

  return res.status(201).json({
    message: "Course created successfully",
    createCourse,
  });
});

app.put("/admin/courses/:courseId", validateAdmin, async (req, res) => {
  // logic to edit a course

  const courseId = req.params.courseId.toString();

  const course = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    imageLink: req.body.imageLink,
    published: req.body.published,
  };

  const updateCourse = await Courses.findByIdAndUpdate(courseId, course);

  if (!updateCourse) {
    return res
      .status(404)
      .json({ message: `Cannot find the course with id ${courseId}` });
  } else {
    const updatedCourse = await Courses.findById(courseId);
    return res
      .status(201)
      .json({ message: "Course updated successfully", updatedCourse });
  }
});

app.get("/admin/courses", validateAdmin, async (req, res) => {
  // logic to get all courses
  try {
    const getCourses = await Courses.find({});

    return res.status(201).json(getCourses);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

// User routes
const validateUser = (req, res, next) => {
  const token =
    req.headers["authorization"] && req.headers["authorization"]?.split(" ")[1];
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: "Token is not provided" });
  }

  jwt.verify(token, SECRET_KEY, (err, decode) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(403).json({ message: "Token expired" });
      }
      return res.status(403).json({ message: "Invalid token" });
    }

    req.user = decode;
    next();
  });
};

app.post("/users/signup", async (req, res) => {
  // logic to sign up user
  const userData = {
    username: req.headers.username,
    password: req.headers.password,
  };

  if (!userData.username) {
    return res.json({ message: "Enter username and password" });
  }
  const findUser = await User.find({
    username: userData.username,
  });

  if (findUser.length > 0) {
    res.status(409).json({ message: "Username already exists" });
  } else {
    const createUser = await User.create(userData);
    res.status(200).json({
      message: "User created successfully",
      createUser,
    });
  }
});

app.post("/users/login", async (req, res) => {
  // logic to log in user
  const userData = {
    username: req.headers.username,
    password: req.headers.password,
  };

  const token = jwt.sign(userData, SECRET_KEY);

  const findUser = await User.find({
    username: userData.username,
    password: userData.password,
  });

  if (findUser.length > 0) {
    return res.status(201).json({
      message: "Logged in successfully",
      Token: token,
      user: userData.username,
    });
  } else {
    return res.json({ message: "Username or Password is Incorrect" });
  }
});

app.get("/users/courses", validateUser, async (req, res) => {
  // logic to list all courses
  try {
    const getCourses = await Courses.find({});

    return res.status(201).json(getCourses);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

app.post("/users/courses/:courseId", validateUser, async (req, res) => {
  // logic to purchase a course
  const courseId = req.params.courseId;

  const user = await User.findOne({ username: req.user.username });

  console.log(user);

  const findCourse = await Courses.findById(courseId);

  if (findCourse) {
    if (user) {
      user.purchasedCourses.push(findCourse);
      await user.save();
      res.json({ message: "Course purchased successfully" });
    } else {
      res.status(401).json({ message: "User not found" });
    }
  } else {
    res.status(404).json({ message: "Course not found" });
  }
});

app.get("/users/purchasedCourses", validateUser, async (req, res) => {
  // logic to view purchased courses
  const user = await User.findOne({ username: req.user.username }).populate(
    "purchasedCourses"
  );

  if (user) {
    res.json({ purchasedCourses: user.purchasedCourses });
  } else {
    res.json({ message: "User not found" });
  }
});
// for all other routes, return 404
app.use((req, res, next) => {
  res.status(404).send();
});

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb+srv://admin:lavi9921@kartiktest.jqnuke5.mongodb.net/")
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("Server is listening on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
