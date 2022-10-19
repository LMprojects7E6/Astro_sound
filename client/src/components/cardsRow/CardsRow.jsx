import React from "react";

import { useQuery } from "@tanstack/react-query";
import { getFivePlaylists } from "api/playlists";
import PlaylistCard from "components/playlistCard/PlaylistCard";

const CardsRow = ({ fivePlaylist }) => {
  const {
    isLoading,
    isError,
    data: playlist,
  } = useQuery(["five-playlist"], getFivePlaylists);
  return (
    <>
      <h2 className="text-2xl text-white md:px-5 md:mb-5">My Library</h2>
      <div className="grid md:grid-cols-5 md:gap-6 md:px-5 md:mb-20">
        {fivePlaylist.map((playlist) => (
          <PlaylistCard
            playListImage={playlist.playListImage}
            description={playlist.description}
            name={playlist.name}
          />
        ))}
      </div>
    </>
  );
};

export default CardsRow;
