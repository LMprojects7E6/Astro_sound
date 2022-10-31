import { useNavigate } from "react-router-dom";

import Loader from "components/loader/Loader";
import PlaylistCard from "components/playlistCard";

import { getAllPlaylists } from "api/playlists";
import { useQuery } from "@tanstack/react-query";

const PlaylistCardsRow = () => {
  const navigate = useNavigate();
  const {
    data: allPlaylists,
    isLoading: isLoadingAllPlaylist,
    isError: isAllPlaylistError,
    error: allPlaylistError,
  } = useQuery(["playlists"], getAllPlaylists);

  if (isLoadingAllPlaylist) {
    return <Loader />;
  }

  if (isAllPlaylistError) {
    navigate("/error");
  }

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
};

export default PlaylistCardsRow;
