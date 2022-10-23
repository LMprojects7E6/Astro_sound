import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllSongsFromPlaylist } from "api/songs";
import toast from "react-hot-toast";

const Playlist = (data) => {
  //Get all songs from a playlist
  const {
    data: allSongsFromPlaylist,
    isLoading,
    isError,
    error,
  } = useQuery(["allSongsFromPlaylist"], getAllSongsFromPlaylist);

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (isError) {
    toast.error(error);
  } else {
    return (
      <div>
        <div>Playlist</div>
        <p></p>
      </div>
    );
  }
};

export default Playlist;
