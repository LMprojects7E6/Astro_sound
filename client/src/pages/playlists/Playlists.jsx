import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllSongsFromPlaylist } from "api/songs";
import DashboardSection from "components/dashboardSection";
import SongsListContainer from "components/songsListContainer/SongsListContainer";
import Loader from "components/loader/Loader";
import { getPlaylistsByID } from "api/playlists";
import ReproduceSearchPlaylist from "components/reproduceSearchPlaylist";
import PlayListHeader from "components/playListHeader";
import Error from "components/error";

const Playlist = () => {
  const { id } = useParams();

  const {
    isLoading: playlistIsLoading,
    isError: playlistIsError,
    data: playlist,
  } = useQuery([`playlistBy-${id}`], () => getPlaylistsByID(id));

  const {
    isLoading,
    isError,
    error,
    data: AllSongsFromPlaylist,
  } = useQuery([`list-${id}`], () => getAllSongsFromPlaylist(id));

  if (isLoading || playlistIsLoading) {
    return <Loader />;
  }

  if (isError || playlistIsError) {
    <DashboardSection>
      <Error />
    </DashboardSection>;
  }

  return (
    <DashboardSection>
      <PlayListHeader playlist={playlist} />
      {playlist.songList.length > 0 ? (
        <>
          <ReproduceSearchPlaylist
            songsList={AllSongsFromPlaylist}
            listName={playlist.name}
          />
          <SongsListContainer
            songs={AllSongsFromPlaylist}
            playlist={playlist}
          />{" "}
        </>
      ) : (
        <div className="text-white">
          <h2 className="md:text-2xl text-xl mb-8">You don't have any song</h2>
          <Link className="dark-button" to={"/search"}>
            Add some songs
          </Link>
        </div>
      )}
    </DashboardSection>
  );
};

export default Playlist;
