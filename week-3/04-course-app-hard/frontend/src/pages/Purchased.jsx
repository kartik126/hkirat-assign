import React from "react";
import { Link } from "react-router-dom";
import paperplane from "../../public/paper-plane.png";
import thought from "../../public/thought.png";
import usePurchased from "../customHooks/usePurchased";
import Card from "../components/Card";
import useCourses from "../customHooks/useCourses";

function Purchased() {
  const purchased = usePurchased();
  const courses = useCourses();

  console.log("Purchased", purchased);

  return (
    <div>
      <div className="m-5 rounded-xl h-[10vh] bg-[#11906D] text-white relative">
        <header className="h-[80px] flex items-center">
          <Link to="/">
            <button className="absolute right-60 top-7 px-5">Home</button>
          </Link>
          <Link to="/login">
            <button className="absolute right-40 top-7 px-5">Signin</button>
          </Link>
          <div className="shadow-md px-7 py-2 rounded-lg bg-[#F7F7F7] font-semibold text-black absolute right-10">
            <Link to="/signup">
              <button>Signup</button>
            </Link>
          </div>
        </header>
      </div>
      <div>
        {/* <img src={paperplane} className="w-10 absolute left-80 top-5" />
          <img src={thought} className="w-[50px] absolute right-80" /> */}
        <h1 className="px-5 pt-5 text-left font-semibold text-[30px] leading-none">
          Your Purchased Courses List
        </h1>

        <div className="flex flex-row pt-5">
          <div className="w-[70%] px-5 border-r">
            <div className="grid grid-cols-3 gap-4">
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
          </div>
          <div className="w-[30%] px-5">
            <p className="text-center font-bold">Courses you may like</p>
            {courses.slice(3,6).map((key) => {
              return (
                <div className="p-2 my-2 col-span-1 border bg-white rounded-lg flex flex-row w-fit h-fit">
                  <img
                    className="w-[150px] rounded-t-lg"
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
    </div>
  );
}

export default Purchased;
