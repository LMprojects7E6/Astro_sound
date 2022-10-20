import React from "react";

const LikedSong = ({ title, artist }) => {
  return (
    <>
      <div className="flex my-1">
        <p className="text-xl font-semibold">
          {artist} - <span className="lowercase mx-2 font-normal">{title}</span>
        </p>
      </div>
    </>
  );
};

export default LikedSong;
