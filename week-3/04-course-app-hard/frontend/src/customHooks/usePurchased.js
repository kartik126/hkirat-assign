import Cookies from "js-cookie";
import React from "react";

function usePurchased() {
  const [purchased, setpurchased] = React.useState([]);

  React.useEffect(() => {
    const token = Cookies.get("token");
    fetch("http://localhost:3000/users/purchasedCourses", {
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
        // console.log("data",data);
        setpurchased(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return purchased;
}

export default usePurchased;
