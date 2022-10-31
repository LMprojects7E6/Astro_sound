import Button from "components/button/Button";
import React from "react";

const Slide = ({ text, slideImage }) => {
  return (
    <div className="w-full flex rounded-lg flex-auto h-full  md:shrink-0 bg-cover" style={{backgroundImage: `url(${slideImage})`}}>
      <div>{text}</div>
      {/* <img src={slideImage} alt="" className="h-50" /> */}
    </div>
  );
};

export default Slide;
