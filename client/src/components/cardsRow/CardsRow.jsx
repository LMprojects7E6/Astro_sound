import React from "react";
import SongCard from "components/songCard"

const cardsRow = ({ fivePlaylist }) => {
  console.log("cardsRows", fivePlaylist);
  return (
    <div className="flex flex-row">
      {fivePlaylist.map((song) => (
        <SongCard
					song="test"
          songName={song.name}
          artistName="test"
          imgUrl="test"
        />
      ))}
    </div>
  );
};

export default cardsRow;
