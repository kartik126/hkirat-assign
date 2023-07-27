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
    // <div>
    //   <h2>Signup</h2>
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
    //   <button onClick={useSignup}>Register</button> or
    // </div>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Sign Up</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-gray-800 font-semibold mb-1">Username</label>
          <input type="text" id="username" name="username" className="w-full px-4 py-2 rounded border focus:outline-none focus:border-indigo-500" />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-800 font-semibold mb-1">Email</label>
          <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded border focus:outline-none focus:border-indigo-500" />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-800 font-semibold mb-1">Password</label>
          <input type="password" id="password" name="password" className="w-full px-4 py-2 rounded border focus:outline-none focus:border-indigo-500" />
        </div>
        <div>
          <button type="submit" className="w-full py-2 px-4 rounded bg-green-400 text-white font-semibold hover:bg-green-500 focus:outline-none focus:bg-green-500">
            Sign Up
          </button>
        </div>
        <div>
          <p className="text-center text-gray-600 font-semibold">Already have an account?</p>
          <button type="button" className="w-full py-2 px-4 rounded border border-gray-300 text-gray-800 font-semibold hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
            Log In
          </button>
        </div>
      </form>
    </div>
  </div>
  );
}

export default Signup;
