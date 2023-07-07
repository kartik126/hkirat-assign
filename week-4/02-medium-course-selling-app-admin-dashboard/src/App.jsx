import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Landing from "./components/Landing";
import CreateCourse from "./components/CreateCourse";
import Register from "./components/Register";
import ShowCourses from "./components/ShowCourses";
import Header from "./components/Header";
import UpdateCourse from "./components/UpdateCourse";
import Sidebar from "./components/Sidebar";
// This file shows how you can do routing in React.
// Try going to /login, /register, /about, /courses on the website and see how the html changes
// based on the route.
// You can also try going to /random and see what happens (a route that doesnt exist)
function App() {
  return (
    <>


      <div  style={{ display: "flex" }}>
        <div style={{ flex: "0 0 18%" }}>
          <Sidebar />
        </div>
        <div style={{ flex: "1" }}>
      <Header />
          <Router>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/createcourse" element={<CreateCourse />} />
              <Route path="/courses" element={<ShowCourses />} />
              <Route path="/updatecourse/:id" element={<UpdateCourse />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
