import React from "react";

const PlayListHeader = ({ playlist }) => {
  return (
    <div className="flex w-full items-center align-middle">
      <img
        src={playlist.playListImage}
        alt=""
        className="hidden md:flex w-60 h-60 m-5 rounded-md"
      />
      <div className="flex flex-col justify-center">
        <h4 className="mt-0 mb-1 uppercase text-xl text-gray-500 tracking-widest hidden md:flex ">
          Playlist
        </h4>
        <h1 className="md:mt-0 mt-10 mb-2 text-white text-2xl md:text-8xl">
          {playlist.name}
        </h1>
        <h3 className="mt-2 mb-2 text-white uppercase hidden md:flex">
          {playlist.description}
        </h3>
      </div>
    </div>
  );
};

export default PlayListHeader;
