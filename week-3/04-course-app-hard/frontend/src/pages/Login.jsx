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
        Accept: "*/*",
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
        alert(data.message);
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
    // <div>
    //   <h2>Login</h2>
    //   <div>
    //     <label>Enter Username</label>
    //     <input
    //       placeholder="Enter username"
    //       value={name}
    //       onChange={(e) => setname(e.target.value)}
    //     ></input>
    //     <label>Enter Password</label>
    //     <input
    //       placeholder="Enter Password"
    //       type="password"
    //       value={password}
    //       onChange={(e) => setpassword(e.target.value)}
    //     ></input>
    //   </div>
    //   <button onClick={useLogin}>Login</button> or
    //   <Link to="/signup">
    //     <p>Signup</p>
    //   </Link>
    // </div>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Login</h2>
          <div>
            <label
              htmlFor="username"
              className="block text-gray-800 font-semibold mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-2 rounded border focus:outline-none focus:border-indigo-500"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-800 font-semibold mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 rounded border focus:outline-none focus:border-indigo-500"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div className="my-4">
            <button
              type="submit"
              className="w-full py-2 px-4 rounded bg-green-400 text-white font-semibold hover:bg-green-500 focus:outline-none focus:bg-green-500"
              onClick={useLogin}
            >
              Log In
            </button>
          </div>
          <div>
            <p className="text-center text-gray-600 font-semibold">
              Not registered yet?
            </p>
            <Link to="/signup">
            <button
              type="button"
              className="w-full py-2 px-4 rounded border border-gray-300 text-gray-800 font-semibold hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            >
              Sign Up
            </button>
            </Link>
          </div>
      
      </div>
    </div>
  );
}

export default Login;
