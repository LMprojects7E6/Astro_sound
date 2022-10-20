import React from "react";

import PlaylistCard from "components/playlistCard/PlaylistCard";

const CardsRow = ({ fivePlaylist }) => {
  return (
    <section className="md:my-10 my-5">
      <h2 className="text-2xl m-2 text-white font-bold mb-5 mx-2">
        My Library
      </h2>
      <div className="grid md:grid-cols-5 grid-cols-3 gap-5 md:gap-6  overflow-x-auto p-5">
        {fivePlaylist.map((playlist) => (
          <PlaylistCard
            playListImage={playlist.playListImage}
            description={playlist.description}
            name={playlist.name}
            key={playlist._id}
          />
        ))}
      </div>
    </section>
  );
};

export default CardsRow;
