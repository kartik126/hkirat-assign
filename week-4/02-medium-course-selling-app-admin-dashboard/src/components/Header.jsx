import React from "react";

function Header() {
  return (
    <div>
      <header className=" shadow" style={{background:'rgb(59 130 246)'}}>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-row items-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-100">
            Dashboard
          </h1>
          <a className="pl-20 cursor-pointer text-gray-100">Courses</a>
          <a className="px-10 cursor-pointer text-gray-100" href="/createcourse">
            Create course
          </a>
          <a className="cursor-pointer text-gray-100">Update course</a>

          <div
            className="right-10 bg-gray-200 p-2 px-10 rounded-full "
            style={{ position: "absolute" }}
          >
            <p>Hi! Kartik</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
