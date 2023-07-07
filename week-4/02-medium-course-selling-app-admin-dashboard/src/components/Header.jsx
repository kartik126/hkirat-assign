import Cookies from "js-cookie";
import React from "react";

function Header() {
  const user = Cookies.get("user");
  return (
    <div>
      <header className=" shadow" >
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-row items-center">

          <div
            className="right-10 bg-[#5EC4A0] text-white p-2 px-10 rounded-full "
            style={{ position: "absolute" }}
          >
          
            <p className="text-sm font-semibold">{user}</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
