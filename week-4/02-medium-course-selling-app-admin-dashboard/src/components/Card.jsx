import Cookies from "js-cookie";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, imageUrl, courseId, price }) => {
  const queryParams = {
    title: title,
    description: description,
    price: price,
    imageUrl: imageUrl,
  };

  const deleteCourse = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (confirmDelete) {
      fetch(`http://localhost:3000/admin/courses/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            alert("Data deleted successfully");
          } else {
            response.json().then((data) => {
              console.error("Error deleting data:", data.error);
              alert("Error deleting data");
            });
          }
        })
        .catch((error) => {
          console.error("Network error:", error);
        });
    }
  };

  return (
    <div className="card shadow-lg text-[#474141]">
      <img
        src={`http://localhost:3000/${imageUrl}`}
        alt="Card"
        className="card-image rounded-t-md"
        style={{ height: "190px" }}
      />
      <div className="card-content p-2">
        <div className="flex justify-between">
          <h2 className="card-title text-lg font-bold">{title || "title"}</h2>
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
          <button className="mx-2 bg-[#5EC4A0] hover:bg-green-500 cursor-pointer text-sm text-white px-3 py-2 rounded-md">
            Edit Course
          </button>
        </Link>
        <button
          onClick={() => deleteCourse(courseId)}
          className="bg-[#FEEFF2] hover:bg-red-500 cursor-pointer text-sm text-red-600 hover:text-white  px-3 py-2 rounded-md "
        >
          Delete Course
        </button>
      </div>
    </div>
  );
};

export default Card;
