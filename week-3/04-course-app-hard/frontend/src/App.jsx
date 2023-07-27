import { useEffect, useState } from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyCourses from "./pages/MyCourses";
import Cookies from "js-cookie";
import Purchased from "./pages/Purchased";

function App() {

  useEffect(() => {
    const token = Cookies.get("token");
    console.log("token",token);
  
  }, [])
  
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/mycourses" element={<MyCourses/>}></Route>
          <Route exact path="/purchased" element={<Purchased/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
