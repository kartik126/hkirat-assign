import React from "react";
import useCourses from "../customHooks/useCourses";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BestCourses() {
  const courses = useCourses();
  console.log(courses);

  const enroll = (id) => {
    const token = Cookies.get("token");
    fetch(`http://localhost:3000/users/courses/${id}`, {
      method: "POST",
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
        toast.success(data.message);
      })
      .catch((error) => {
        toast.error("An error occurred. Please try again later.");
      });
  };
  return (
    <>
      <ToastContainer position="top-center" autoClose={5000} />
      <div className="py-5">
        <div className="flex flex-col items-center relative">
          <h1 className="font-semibold text-[#11906D] text-lg text-center">
            OUR BEST COURSE
          </h1>
          <h1 className="pt-5 text-center font-semibold text-[50px] leading-none">
            Discover a most popular Online Course
          </h1>
        </div>
        <div className="flex justify-center items-center pt-7">
          <input
            className="px-5 w-1/4 py-3 rounded-lg shadow-md"
            placeholder="Search for more courses"
          ></input>
          <button className="bg-[#C0E861] text-sm font-semibold px-5 mx-4 py-3 rounded-lg shadow-sm">
            See More
          </button>
        </div>
        <div className="flex justify-center py-10">
          <div className="grid grid-cols-4 gap-4">
            {courses.map((key) => {
              return (
                <div className="col-span-1 border bg-white rounded-lg flex flex-col w-[300px] h-[350px]">
                  <img
                    className="w-[300px] rounded-t-lg"
                    src={`http://localhost:3000/${key.imageLink}`}
                  />
                  <div className="pt-2 px-2">
                    <h1 className="font-bold">{key.title}</h1>
                    <p className="paragraph text-[12px] text-gray-500">
                      {key.description}
                    </p>
                    <div className="flex pt-5 justify-between items-center">
                      <p className="text-[#11906D] font-bold ">
                        Rs. {key.price}
                      </p>
                      <button
                        className="bg-[#C0E861] font-semibold px-4 py-1 rounded-md"
                        onClick={() => enroll(key._id)}
                      >
                        Enroll
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default BestCourses;
