import React from "react";
import { getAllPlaylists } from "api/playlists";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import LibraryCard from "components/playlistCard/libraryCard";

const PlaylistCardsRow = () => {
  const {
    data: allPlaylists,
    isLoading: isLoadingAllPlaylist,
    isError: isAllPlaylistError,
    error: allPlaylistError,
  } = useQuery(["allPlaylist"], getAllPlaylists);

  if (isLoadingAllPlaylist) {
    return <p>Loading...</p>;
  } else if (isAllPlaylistError) {
    toast.error(allPlaylistError);
  } else {
    return (
      <>
        {allPlaylists?.length === 0 && <h1>Your library is empty.</h1>}

        <div className="grid md:grid-cols-4 grid-cols-3 gap-5 md:gap-6  overflow-x-auto ">
          {allPlaylists.map((playlist) => (
            <Link to={"/playlist"} state={playlist} key={playlist._id}>
              <LibraryCard
                key={playlist._id}
                playListImage={playlist.playListImage}
                description={playlist.description}
                name={playlist.name}
              />
            </Link>
          ))}
        </div>
      </>
    );
  }
};

export default PlaylistCardsRow;