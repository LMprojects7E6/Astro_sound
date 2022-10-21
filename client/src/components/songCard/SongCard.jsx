import React from "react";

import Button from "components/button";
import Icon from "components/icons";

const SongCard = ({ album, artist, songFile, songImage, title }) => {
  // const {
  //   isLoading: isLoadingLikedSongs,
  //   isError: isErrorLikedSongs,
  //   data: likedSongs,
  //   error: likedSongsError,
  // } = useQuery(["liked-songs"], getLikedPlaylists);

  return (
    <div className="flex flex-row md:m-5 md:border-none border-2 border-black space-around md:flex-col items-center bg-purple3 md:bg-grey5 md:rounded-xl max-w-full md:w-60 md:max-h-72  md:m-20">
      <div
        className=" z-0 m-2 w-16 h-16 md:w-36  md:h-36 bg-cover bg-no-repeat bg-center  md:rounded-full "
        style={{ backgroundImage: `url(${songImage})` }}
      >
        <div className=" flex-none z-50 hidden md:block border-2 pl-1.5 pt-1.5 w-10 h-10 mt-24 ml-24   overflow-auto rounded-full bg-purple2 align-center ">
          <Button
            icon={"play"}
            iconSize={24}
            onClick={() => console.log("play")}
          />
        </div>
      </div>
      <div className=" grow flex flex-col justify-between  ">
        <h5 className=" md:text-xl w-max font-bold tracking-tight dark:text-white">
          {title}
        </h5>
        <p className=" text-white">{artist}</p>
      </div>
      <div className=" flex-none flex  mb-2 pr-5 max-w-full lg:ml-40 md:ml-28">
        <Button
          icon={"heart"}
          iconSize={24}
          iconColor={"white"}
          onClick={() => {
            console.log("add to favorites");
          }}
        />
        <span className="ml-2">
          <Icon name={"dotsHorizontal"} size={24} color={"#fff"} />
        </span>
      </div>
    </div>
  );
};

export default SongCard;
