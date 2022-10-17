import React from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import SongCard from "components/songCard";
import { getFivePlaylists } from "api/playlists";

const cardsTable = () => {
  const {
    isLoading,
    isError,
    data: fivePlaylists,
    error,
  } = useQuery(["fivePlaylists"], getFivePlaylists(user));
  if (isLoading) {
    return <p>Loading...</p>;
  } else if (isError) {
    toast.error(error);
  } else {
    return (
      <div className="flex">
        <SongCard></SongCard>
      </div>
    );
  }
};

export default cardsTable;
