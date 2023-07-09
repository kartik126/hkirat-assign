import React from "react";
import useLogin from "../customHooks/useLogin";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setname] = React.useState("");
  const [password, setpassword] = React.useState("");

  const navigate = useNavigate();

  const useLogin = () => {
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept":'*/*',
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
        alert(data.message)
        if (data.Token) {
          navigate("/");
        } else {
          alert(data.message);
        }
        Cookies.set("token", data.Token);
        Cookies.set("user", data.user);

      })
      .catch((error) => {
        console.error(error);
      });
    const token = Cookies.get("token");
    console.log("cookie", token);
  };

  return (
    <div>
      <h2>Login</h2>
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
      <button onClick={useLogin}>Login</button> or
      <Link to="/signup">
        <p>Signup</p>
      </Link>
    </div>
  );
}

export default Login;
