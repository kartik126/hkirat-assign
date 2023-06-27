const express = require("express");
const app = express();

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];
let PURCHASED_COURSES = [];

// Admin routes
app.post("/admin/signup", (req, res) => {
  // logic to sign up admin
  const userData = {
    username: req.body.username,
    password: req.body.password,
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
  const { username, password } = req.headers;

  if (ADMINS.find((e) => e.username === username && e.password === password)) {
    return res.status(201).json({ message: "Logged in successfully" });
  } else {
    return res.json({ message: "Username or Password is Incorrect" });
  }
});

app.post("/admin/courses", (req, res) => {
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

app.put("/admin/courses/:courseId", (req, res) => {
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

app.get("/admin/courses", (req, res) => {
  // logic to get all courses
  return res.status(201).json({ COURSES });
});

// User routes

// Middleware to authenticate user
const authenticateUser = (req, res, next) => {
  const { username, password } = req.headers;

  // Check if the provided username and password are correct
  const valid = USERS.find(
    (e) => e.username === username && e.password === password
  );

  if (valid) {
    // Authentication successful
    next();
  } else {
    // Authentication failed
    res.status(401).json({ message: "Unauthorized" });
  }
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

app.post("/users/login", authenticateUser, (req, res) => {
  // logic to log in user
  const { username, password } = req.headers;

  if (USERS.find((e) => e.username === username && e.password === password)) {
    return res.status(201).json({ message: "Logged in successfully" });
  } else {
    return res.json({ message: "Username or Password is Incorrect" });
  }
});

app.get("/users/courses", authenticateUser, (req, res) => {
  // logic to list all courses
  return res.status(201).json({ Courses: COURSES });
});

app.post("/users/courses/:courseId", authenticateUser, (req, res) => {
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

app.get("/users/purchasedCourses", authenticateUser, (req, res) => {
  // logic to view purchased courses
  return res.status(201).json({ Courses: PURCHASED_COURSES });
});
// for all other routes, return 404
app.use((req, res, next) => {
  res.status(404).send();
});
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
