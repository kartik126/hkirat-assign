const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

const mongoose = require("mongoose");

const SECRET_KEY = "mysecretkey";

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];
let PURCHASED_COURSES = [];

// Admin routes

const validateAdmin = (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];
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

app.post("/admin/signup", (req, res) => {
  // logic to sign up admin
  const userData = {
    username: req.headers.username,
    password: req.headers.password,
  };
  if (!userData.username) {
    return res.json({ message: "Enter username and password" });
  }
  if (ADMINS.find((e) => e.username === userData.username)) {
    return res.json("Admin already exist");
  } else {
    ADMINS.push(userData);
    return res.status(201).json({ message: "Admin created successfully" });
  }
});

app.post("/admin/login", (req, res) => {
  // logic to log in admin
  const userData = {
    username: req.headers.username,
    password: req.headers.password,
  };

  const token = jwt.sign(userData, SECRET_KEY, { expiresIn: "1h" });

  if (
    ADMINS.find(
      (e) =>
        e.username === userData.username && e.password === userData.password
    )
  ) {
    return res
      .status(201)
      .json({ message: "Logged in successfully", token: token });
  } else {
    return res.json({ message: "Username or Password is Incorrect" });
  }
});

app.post("/admin/courses", validateAdmin, (req, res) => {
  // logic to create a course
  let courseId = Math.floor(Math.random() * 100);
  const { username, password } = req.headers;
  const { title, description, price, imageLink, published } = req.body;

  COURSES.push({
    title: title,
    description: description,
    price: price,
    imageLink: imageLink,
    published: published,
    courseId: courseId,
  });

  return res
    .status(201)
    .json({ message: "Course created successfully", courseId: courseId });
});

app.put("/admin/courses/:courseId", validateAdmin, (req, res) => {
  // logic to edit a course
  const courseId = parseInt(req.params.courseId);
  const { title, description, price, imageLink, published } = req.body;

  const courseIndex = COURSES.findIndex((e) => e.courseId === courseId);
  if (courseIndex === -1) {
    return res.status(404).send();
  } else {
    (COURSES[courseIndex].title = title),
      (COURSES[courseIndex].description = description),
      (COURSES[courseIndex].price = price),
      (COURSES[courseIndex].imageLink = imageLink),
      (COURSES[courseIndex].published = published),
      res.status(201).json({ message: "Updated", courses: COURSES });
  }
});

app.get("/admin/courses", validateAdmin, (req, res) => {
  // logic to get all courses
  return res.status(201).json({ COURSES });
});

// User routes
const validateUser = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
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

app.post("/users/signup", (req, res) => {
  // logic to sign up user
  const userData = {
    username: req.body.username,
    password: req.body.password,
  };
  if (!userData.username) {
    return res.json({ message: "Enter username and password" });
  }
  if (USERS.find((e) => e.username === userData.username)) {
    return res.json({ message: "User already exist" });
  } else {
    USERS.push(userData);
    return res.status(201).json({ message: "User created successfully" });
  }
});

app.post("/users/login", (req, res) => {
  // logic to log in user
  const userData = {
    username: req.headers.username,
    password: req.headers.password,
  };

  const token = jwt.sign(userData, SECRET_KEY, { expiresIn: "1h" });

  if (
    USERS.find(
      (e) =>
        e.username === userData.username && e.password === userData.password
    )
  ) {
    return res
      .status(201)
      .json({ message: "Logged in successfully", Token: token });
  } else {
    return res.json({ message: "Username or Password is Incorrect" });
  }
});

app.get("/users/courses", validateUser, (req, res) => {
  // logic to list all courses
  return res.status(201).json({ Courses: COURSES });
});

app.post("/users/courses/:courseId", validateUser, (req, res) => {
  // logic to purchase a course
  const courseId = parseInt(req.params.courseId);

  // Find the course with the provided courseId
  const courseIndex = COURSES.findIndex((e) => e.courseId === courseId);

  if (courseIndex === -1) {
    res.status(404).json({ message: "Course not found" });
  } else {
    // Purchase logic goes here
    const selectedCourse = COURSES[courseIndex];
    PURCHASED_COURSES.push(selectedCourse);
    res.json({
      message: "Course purchased successfully",
      course: PURCHASED_COURSES,
    });
  }
});

app.get("/users/purchasedCourses", validateUser, (req, res) => {
  // logic to view purchased courses
  return res.status(201).json({ Courses: PURCHASED_COURSES });
});
// for all other routes, return 404
app.use((req, res, next) => {
  res.status(404).send();
});


mongoose.set('strictQuery',false)
mongoose
  .connect(
    "mongodb+srv://admin:lavi9921@kartiktest.jqnuke5.mongodb.net/"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("Server is listening on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
