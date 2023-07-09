import React from "react";
import illust from "../../public/1.png";



function Mainbanner() {
  return (
    <div className="m-5 rounded-xl h-[90vh] bg-[#11906D] text-white relative">
      <header className="h-[80px] flex items-center">
        <button className="absolute right-40 px-5">Signin</button>
        <div className="shadow-md px-7 py-2 rounded-lg bg-[#F7F7F7] font-semibold text-black absolute right-10">
          <button>Signup</button>
        </div>
      </header>
      <div className="flex flex-row px-20 pt-10">
        <div className="flex flex-col w-1/2">
          <h1
            className="text-gray-300 tracking-wider text-lg"
            style={{ letterSpacing: "5px" }}
          >
            ENHANCE YOUR CARRER
          </h1>
          <h1 className=" text-[75px] font-semibold leading-none">
            Boost your skillset with our online courses
          </h1>
          <p className="text-gray-300 pt-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pharetra, lectus pellentesque mollis ultrices, arcu augue eleifend
            ligula, non congue odio tellus luctus ligula.
          </p>
        </div>
        <div className="flex justify-center w-1/2">
          <img className="w-[350px]" src={illust} />
        </div>
      </div>
    </div>
  );
}

export default Mainbanner;
