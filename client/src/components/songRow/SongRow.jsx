import React from "react";

const SongRow = ({songFile, title, artist, album, genre}) => {
  console.log(songFile, title, artist, album, genre);
  return (
    <div className="flex border-b border-gray-800 hover:bg-gray-800">
      <div className="p-3 w-8 flex-shrink-0">▶️</div>
      <div className="p-3 w-8 flex-shrink-0">❤️</div>
      <div className="p-3 w-full">{title}</div>
      <div className="p-3 w-full">{album}</div>
      <div className="p-3 w-full">{artist}</div>
      <div className="p-3 w-12 flex-shrink-0 text-right">5:35</div>
    </div>
  );
};

export default SongRow;