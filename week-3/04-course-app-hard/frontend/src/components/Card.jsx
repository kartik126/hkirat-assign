import Cookies from "js-cookie";
import React from "react";

const Card = ({ title, description, imageUrl, courseId }) => {
  const purchaseCourse = (id) => {
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
        console.log(data);
        if (data.Token) {
          alert(data.message);
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="col-span-1 border bg-white rounded-lg flex flex-col w-[300px] h-fit cursor-pointer">
      <img
        className="w-[300px] rounded-t-lg"
        src={`http://localhost:3000/${imageUrl}`}
      />
      <div className="pt-2 px-2">
        <h1 className="font-bold">{title}</h1>
        <p className="paragraph text-[12px] text-gray-500">{description}</p>
        <div className="flex pt-5 justify-between items-center">
          {/* <p className="text-[#11906D] font-bold ">Rs. {price}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
