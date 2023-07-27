import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import useCourses from "../customHooks/useCourses";
import { Link } from "react-router-dom";
import Mainbanner from "../components/Mainbanner";
import Whychooseus from "../components/Whychooseus";
import BestCourses from "../components/BestCourses";
import Footer from "../components/Footer";

function Home() {

  const getCourses = useCourses();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setuser] = useState("");

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    getCourses;
    console.log("home page", getCourses);
    const user = Cookies.get("user");
    setuser(user);
  }, []);

  return (
    <div className="bg-[#F8F8F8]">
      <Mainbanner/>
      <Whychooseus/>
      <BestCourses/>
      {/* <div>
        <p>Welcome {user}</p>
        <Link to="/mycourses">
          <button>My Courses</button>
        </Link>
      </div> */}
      {/* <div>
        <h1 className="text-blue-300">Courses List</h1>
        <div className="grid gap-4 grid-cols-3 grid-rows-3">
          {getCourses.map((course) => {
            return (
              <div key={course._id}>
                <Card
                  title={course.title}
                  description={course.description}
                  imageUrl={course.imageLink}
                  courseId={course._id}
                />
              </div>
            );
          })}
        </div>
      </div> */}
      <Footer/>
    </div>
  );
}

export default Home;
