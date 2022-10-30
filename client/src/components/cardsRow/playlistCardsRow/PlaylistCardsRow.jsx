import React from "react";
import { getAllPlaylists } from "api/playlists";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import PlaylistCard from "components/playlistCard";
import { Link } from "react-router-dom";

const PlaylistCardsRow = () => {
  const {
    data: allPlaylists,
    isLoading: isLoadingAllPlaylist,
    isError: isAllPlaylistError,
    error: allPlaylistError,
  } = useQuery(["playlists"], getAllPlaylists);

  if (isLoadingAllPlaylist) {
    return <p>Loading...</p>;
  } else if (isAllPlaylistError) {
    return <p>error...</p>;
  } else {
    return (
      <>
        {allPlaylists?.length === 0 && <h1>Your library is empty.</h1>}
        <div className="flex flex-col md:grid md:grid-cols-4 gap-5  md:gap-6  md:overflow-x-auto ">
          {allPlaylists.map((playlist) => (
            <PlaylistCard key={playlist.name} playlist={playlist} />
          ))}
        </div>
      </>
    );
  }
};

export default PlaylistCardsRow;
