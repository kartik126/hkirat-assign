import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

/// File is incomplete. You need to add input boxes to take input for users to login.
function Login() {

  const navigate = useNavigate();
  const [username, setusername] = React.useState("");
  const [password, setpassword] = React.useState("");

  const useLogin = () => {
    fetch("http://localhost:3000/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        username: username,
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
        if (data.Token) {
          navigate("/dashboard");
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-1/3 bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>

    
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-semibold mb-2"
            >
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setusername(e.target.value)}
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <button
            onClick={()=>useLogin()}
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded focus:outline-none"
            >
              Login
            </button>
            <a href="#" className="text-blue-500 font-semibold">
              Sign up
            </a>
          </div>
        
      </div>
    </div>
  );
}

export default Login;
