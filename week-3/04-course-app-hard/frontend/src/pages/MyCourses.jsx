import React from "react";
import usePurchased from "../customHooks/usePurchased";
import Card from "../components/Card";

function MyCourses() {
  const purchased = usePurchased();

  console.log("purchased", purchased);

  return (
    <div>
      <h1>Purchased courses</h1>
      {purchased?.purchasedCourses?.map((course) => {
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
  );
}

export default MyCourses;
