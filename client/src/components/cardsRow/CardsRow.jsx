import React from "react";

import { useQuery } from "@tanstack/react-query";
import { getFivePlaylists } from "api/playlists";
import PlaylistCard from "components/playlistCard/PlaylistCard";
import Loader from "components/loader/Loader";
import { useNavigate } from "react-router-dom";

const CardsRow = ({ fivePlaylist }) => {
  const navigate = useNavigate();
  const {
    isLoading,
    isError,
    data: playlist,
  } = useQuery(["five-playlist"], getFivePlaylists);
  if (isError) {
    navigate("/login");
  }
  return (
    <section className="md:my-10 my-5">
      <h2 className="text-xl m-2 text-white font-bold mb-5 mx-2">My Library</h2>
      <div className="grid md:grid-cols-5 grid-cols-3 gap-5 md:gap-6  overflow-x-auto p-5">
        {fivePlaylist.map((playlist) => (
          <PlaylistCard
            playListImage={playlist.playListImage}
            description={playlist.description}
            name={playlist.name}
          />
        ))}
      </div>
    </section>
  );
};

export default CardsRow;
