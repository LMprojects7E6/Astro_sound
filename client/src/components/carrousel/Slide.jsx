import Button from "components/button/Button";
import React from "react";

const Slide = ({ title, slideImage }) => {
  return (
    <div className=" text-white flex bg-cover ">
      <div className="flex rounded-lg flex-auto ">
        <img src={slideImage} alt="" className="" />
      </div>
    </div>
  );
};

export default Slide;
