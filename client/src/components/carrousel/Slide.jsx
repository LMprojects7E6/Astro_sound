import React from "react";
import Logo from "components/logo";

const Slide = ({ title, slideImage }) => {
  return (
    <div className="w-full flex rounded-lg flex-auto relative">
      <div className=" flex  absolute bottom-1/2 left-1/4 bg-purpleDark p-2 rounded-md">
        <p className="text-white text-center  text-sm md:text-xl xl:text-5xl">
          {title}
        </p>
      </div>
      <img src={slideImage} alt="" className="min-h-full " />
    </div>
  );
};

export default Slide;
