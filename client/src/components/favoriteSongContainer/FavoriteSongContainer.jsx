import Button from "components/button";
import React from "react";
import Icon from "components/icons/Icons";

const FavoriteSongContainer = () => {
  return (
    <section className="flex flex-col  p-5 m-2">
      <h4 className="text-xl m-2 text-white font-bold flex">
        Liked songs
        <span className="ml-2">
          <Icon name={"heart"} size={24} color={"white"} />
        </span>
      </h4>
      <div
        className="mainButtonBg rounded-xl p-2"
        onClick={() => console.log("aaaaaa")}
      >
        <div className="flex flex-row  m-5 space-around md:flex-col items-center    md:rounded-xl  max-w-full md:w-60 md:max-h-72  md:m-20">
          <p className="text-white min-h-min">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          </p>
        </div>
        <div className="  flex justify-between m-5 ">
          <h5 className=" md:text-xl w-max tracking-tight dark:text-white">
            15 liked Songs
          </h5>
          <div className=" rounded-full border-2 border-white md:hidden pl-0.5 pt-0.5 w-8 h-8  ">
            <Icon name={"play"} size={24} color={"white"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavoriteSongContainer;
