import Cookies from "js-cookie";
import React from "react";

const Card = ({ title, description, imageUrl, courseId }) => {
  // const purchaseCourse = (id) => {
  //   const token = Cookies.get("token");
  //   fetch(`http://localhost:3000/users/courses/${id}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       if (data.Token) {
  //         alert(data.message);
  //       } else {
  //         alert(data.message);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  return (
    <div className="card">
      {/* <img src={imageUrl || 'title'} alt="Card" className="card-image" /> */}
      <div className="card-content">
        <h2 className="card-title">{title || 'title' }</h2>
        <p className="card-description">{description}</p>
      </div>
      <button onClick={() => purchaseCourse(courseId)}>Purchase</button>
    </div>
  );
};

export default Card;
