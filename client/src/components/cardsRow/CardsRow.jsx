import React from "react";
import { Link } from "react-router-dom";
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
      <h2 className="text-2xl text-white px-5 md:mb-5 mb-2">My Library</h2>
      <div className="grid md:grid-cols-5 grid-cols-3 gap-5 md:gap-6 md:px-5 md:mb-20 overflow-x-auto p-5">
        {fivePlaylist.map((playlist) => (
          <Link to={`playlist`} state={playlist}>
            <PlaylistCard
              playListImage={playlist.playListImage}
              description={playlist.description}
              name={playlist.name}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default CardsRow;
