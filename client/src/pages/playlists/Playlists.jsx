import { useParams } from "react-router-dom";
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
  } = useQuery(["playlistById"], () => getPlaylistsByID(id));

  const {
    isLoading,
    isError,
    error,
    data: AllSongsFromPlaylist,
  } = useQuery([`list-${id}`], () => getAllSongsFromPlaylist(id));

  if (isLoading || playlistIsLoading) {
    return <Loader />;
  } else if (isError) {
    <DashboardSection>
      <Error />
    </DashboardSection>;
  } else {
    return (
      <DashboardSection>
        <PlayListHeader playlist={playlist} />
        <ReproduceSearchPlaylist
          songsList={AllSongsFromPlaylist}
          listName={playlist.name}
        />
        <SongsListContainer songs={AllSongsFromPlaylist} />
      </DashboardSection>
    );
  }
};

export default Playlist;
