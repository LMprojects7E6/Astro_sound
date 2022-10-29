import Button from "components/button/Button";
import React from "react";

const Slide = ({ title, slideImage }) => {
  return (
    <div className="w-full flex rounded-lg flex-auto ">
      <img src={slideImage} alt="" className="h-50" />
    </div>
  );
};

export default Slide;
