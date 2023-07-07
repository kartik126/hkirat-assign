import React from "react";
import useCourses from "./customHooks/useCourses";
import Card from "./Card";

function ShowCourses() {
  // const [courses, setCourses] = React.useState([]);

  const courses = useCourses();

  // Add code to fetch courses from the server
  // and set it in the courses state variable.
  return (
    <div>
      <h1 className="pl-20 text-[2rem] text-[#474141] font-semibold py-5">
        Current Courses List
      </h1>
      <div className="d-flex justify-around" style={{display:"flex",justifyContent:"space-around"}}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
