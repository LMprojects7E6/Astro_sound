import Button from "components/button/Button";
import React from "react";

const Slide = ({ artist, title, songImage, description }) => {
  return (
    <div className="text-white h-full flex">
      <div className="slider__content py-8 pl-16 flex flex-col justify-between h-full flex-1">
        <div className="slider__text">
          <h2 className="text-3xl font-semibold mb-1">{title}</h2>
          <h3 className="text-xl font-normal mb-8">{artist}</h3>
          <p className=" font-light"> {description}</p>
        </div>
        <div className="slider__button ">
          <Button
            type={"button"}
            text={"Play"}
            radius={"rounded-md"}
            // onClick={onLogout}
            background={"bg-black"}
          />
        </div>
      </div>
      <div className="slider__image flex flex-1 items-end">
        <img src={songImage} alt="" className="" />
      </div>
    </div>
  );
};

export default Slide;
