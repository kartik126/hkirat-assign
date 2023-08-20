import Cookies from "js-cookie";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function Header() {
  const user = Cookies.get("user");
  return (
    <div>
      <header className=" shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-row items-center">
          <div
            className="flex items-center justify-around right-10 bg-[#5EC4A0] text-white px-5 p-2 rounded-full "
            style={{ position: "absolute" }}
          >
            <AccountCircleIcon className="mr-2"/>
            <p className="text-sm font-semibold">{user}</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
