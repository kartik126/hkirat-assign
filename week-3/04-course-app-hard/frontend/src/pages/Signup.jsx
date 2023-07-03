import React from "react";

function Signup() {
  const [name, setname] = React.useState("");
  const [password, setpassword] = React.useState("");

  const useSignup = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        username: name,
        password: password,
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
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Signup</h2>
      <div>
        <label>Enter Username</label>
        <input
          placeholder="Enter username"
          value={name}
          onChange={(e) => setname(e.target.value)}
        ></input>
        <label>Enter Password</label>
        <input
          placeholder="Enter Password"
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        ></input>
      </div>
      <button onClick={useSignup}>Register</button> or
    </div>
  );
}

export default Signup;
