import React from "react";
import { Link } from "react-router-dom";
import PlaylistCard from "components/playlistCard/PlaylistCard";
import { getFivePlaylists } from "api/playlists";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const CardsRow = () => {
  //Get fivePlaylist
  const {
    data: fivePlaylist,
    isLoading: isLoadingPlaylist,
    isError: isPlaylistError,
    error: playlistError,
  } = useQuery(["fivePlaylist"], getFivePlaylists);

  if (isLoadingPlaylist) {
    return <p>Loading...</p>;
  } else if (isPlaylistError) {
    toast.error(playlistError);
  } else {
    return (
      <section className="md:my-10 my-5">
        <h2 className="text-2xl m-2 text-white font-bold mb-5 mx-2">
          My Library
        </h2>
        <div className="grid md:grid-cols-5 grid-cols-3 gap-5 md:gap-6  overflow-x-auto p-5">
          {fivePlaylist.map((playlist) => (
            <Link to={"/playlist"} state={playlist}>
              <PlaylistCard
                key={playlist._id}
                playListImage={playlist.playListImage}
                description={playlist.description}
                name={playlist.name}
              />
            </Link>
          ))}
        </div>
      </section>
    );
  }
};

export default CardsRow;
