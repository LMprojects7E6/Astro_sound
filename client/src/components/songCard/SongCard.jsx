import React from "react";

import photo from "assets/login.jpg";
import Button from "components/button";

const songCard = ({ song, songName, artistName, imgUrl }) => {
  console.log(song, songName, artistName, imgUrl);
  return (
    <div className="flex flex-row  m-5 space-around md:flex-col items-center  bg-purple3 md:bg-grey5 md:rounded-xl  max-w-full md:w-60 md:max-h-72  md:m-20">
      <div
        className=" z-0 m-2 w-16 h-16 md:w-36  md:h-36 bg-cover bg-no-repeat bg-center  md:rounded-full "
        style={{ backgroundImage: `url(${photo})` }}
      >
        <div className=" flex-none z-50 hidden md:block  pl-1.5 pt-1 w-10 h-10 mt-24 ml-24   overflow-auto rounded-full bg-purple2 flex align-center ">
          <Button
            icon={"play"}
            iconSize={30}
            onClick={() => console.log("play")}
          />
        </div>
      </div>
      <div className=" grow flex flex-col justify-between  ">
        <h5 className=" md:text-2xl w-max font-bold tracking-tight dark:text-white">
          Song name
        </h5>
        <p className=" text-white">Artist name</p>
      </div>
      <div className=" flex-none flex  mb-2 pr-5 max-w-full">
        <Button icon={"heartFilled"} iconSize={30} color={"red"} />
        <span>...</span>
      </div>
    </div>
  );
};

export default songCard;
