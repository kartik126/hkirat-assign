import React, { useEffect } from "react";
import useCourses from "./customHooks/useCourses";
import Card from "./Card";

function ShowCourses() {
  // const [courses, setCourses] = React.useState([]);

  const courses = useCourses();

  return (
    <div className="bg-[#F4F4F6]">
      <h1 className="pl-6 text-[1.4rem] text-[#474141] py-5">
        Current Courses List
      </h1>
      <div
        className="d-flex justify-around"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((c) => (
            <Card
              title={c.title}
              description={c.description}
              imageUrl={c.imageLink}
              price={c.price}
              courseId={c._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShowCourses;
