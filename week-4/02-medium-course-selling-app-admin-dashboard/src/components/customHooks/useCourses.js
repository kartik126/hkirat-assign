import React from "react";
import Cookies from "js-cookie";

function useCourses() {
  const [courses, setCourses] = React.useState([]);

  React.useEffect(() => {
    console.log("course api");
    const token = Cookies.get("token");
    fetch("http://localhost:3000/admin/courses", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setCourses(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return courses;
}

export default useCourses;