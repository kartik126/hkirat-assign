import React from "react";
import paperplane from "../../public/paper-plane.png";
import thought from "../../public/thought.png";
import progress from "../../public/progress.png";
import types from '../../public/types.png';
import log from "../../public/log-in.png";
import interactive from "../../public/interactive.png";

function CardComponent({ title,image}) {
  return (
    <div className="w-1/2 bg-[#fff] rounded-xl h-fit p-7 m-2">
      <div className="flex items-center justify-center bg-orange-500 w-[60px] h-[60px] rounded-lg mb-7 text-white">
        <img src={image} height={35} width={35}/>
      </div>
      <h1 className="text-[25px] font-bold leading-none">{title}</h1>
      <p className="text-[#939393] pt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a leo
        sit amet nisi pellentesque semper. Aliquam pulvinar nisl vitae elit
        pulvinar, ac mattis metus laoreet.
      </p>
    </div>
  );
}

function Whychooseus() {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center relative">
        <img src={paperplane} className="w-20 absolute left-60 top-10" />
        <img src={thought} className="w-[60px] absolute right-80" />
        <h1 className="font-semibold text-[#11906D] text-lg text-center">
          WHY CHOOSE US
        </h1>
        <h1 className="pt-5 w-1/2 text-center font-semibold text-[50px] leading-none">
          Dive into online courses on diverse subject
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-row pt-7 justify-between w-[90%]">
          <CardComponent title="Progress Tracking and Information" image={progress} />
          <CardComponent title="Diverse Course Selection"image={types} />
          <CardComponent title="Accessibility and Convenience" image={log}/>
          <CardComponent title="Interactive Learning Experience" image={interactive}/>
        </div>
      </div>
    </div>
  );
}

export default Whychooseus;
