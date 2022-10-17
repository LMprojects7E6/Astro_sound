import React from "react";

import photo from "assets/login.jpg";
import Button from "components/button";

const songCard = ({ song, songName, artistName, imgUrl }) => {
  return (
    <div className="flex md:flex-col items-center bg-grey3 rounded-xl  flex-row md:max-w-min max-h-96  m-20">
      <div
        className=" z-0 m-5 w-36  h-36 bg-cover bg-no-repeat bg-center  md:rounded-full "
        style={{ backgroundImage: `url(${photo})` }}
      >
        <div className="z-50  hidden md:block  pl-1.5 pt-1 w-10 h-10 mt-24 ml-24   overflow-auto rounded-full bg-purple2 flex align-center ">
          <Button
            icon={"play"}
            iconSize={30}
            onClick={() => console.log("play")}
          />
        </div>
      </div>
      <div className="flex flex-col justify-between py-5 ">
        <h5 className=" md:text-2xl w-max font-bold tracking-tight dark:text-white">
          Song name
        </h5>
        <p className=" text-white">Artist name</p>
      </div>
      <div className="flex mb-2">
        <Button
          icon={"heartFilled"}
          iconSize={30}
          color={"red"}
          onClick={() => console.log("play")}
        />
        <span>...</span>
      </div>
    </div>
  );
};

export default songCard;
