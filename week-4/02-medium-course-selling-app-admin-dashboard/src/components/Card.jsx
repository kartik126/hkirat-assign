import Cookies from "js-cookie";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, imageUrl, courseId, price }) => {
  const queryParams = {
    title: title,
    description: description,
    price: price,
  };

  return (
    <div className=" card shadow-lg text-[#474141]">
      <img
        src={`http://localhost:3000/${imageUrl}`}
        alt="Card"
        className="card-image rounded-t-md"
        style={{ height: "220px" }}
      />
      <div className="card-content p-2">
        <div className="flex justify-between">
          <h2 className="card-title text-xl font-bold">{title || "title"}</h2>
          <h2 className="card-title text-md font-semibold">Rs.{price}</h2>
        </div>
        <p className="card-description text-xs pt-2">{description}</p>
      </div>
      <div className="flex justify-end p-5">
        <Link
          to={{
            pathname: `/updatecourse/${courseId}`,
            search: new URLSearchParams(queryParams).toString(),
          }}
        >
          <button className="mx-2 bg-[#3B82F6] cursor-pointer text-sm text-white px-3 py-2 rounded-md">
            Edit Course
          </button>
        </Link>
        <button className="bg-red-500 cursor-pointer text-sm text-white px-3 py-2 rounded-md">
          Delete Course
        </button>
      </div>
    </div>
  );
};

export default Card;
