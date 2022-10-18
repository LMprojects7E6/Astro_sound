import React from "react";
import SongCard from "components/songCard"

const cardsRow = ({ fivePlaylist }) => {
  console.log("cardsRows", fivePlaylist);
  return (
    <div className="flex flex-row">
      {fivePlaylist.map((playlist) => (
        <SongCard
					song="test"
          songName={playlist.name}
          artistName="test"
          imgUrl="test"
        />
      ))}
    </div>
  );
};

export default cardsRow;
