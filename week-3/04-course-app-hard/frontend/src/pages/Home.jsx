import Cookies from "js-cookie";
import React from "react";
import Card from "../components/Card";
import useCourses from "../customHooks/useCourses";
import { Link } from "react-router-dom";

function Home() {
  const getCourses = useCourses();

  const [user, setuser] = React.useState("");

  React.useEffect(() => {
    getCourses;
    console.log("home page", getCourses);
    const user = Cookies.get("user");
    setuser(user);
  }, []);

  return (
    <div>
      <div>
        <p>Welcome {user}</p>
        <Link to="/mycourses">
          <button>My Courses</button>
        </Link>
      </div>
      <div>
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
      </div>
    </div>
  );
}

export default Home;
