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
import { useEffect } from "react";
import { useState } from "react";

const Playlist = () => {
  const { id } = useParams();

  const [playlistData, setPlaylistData] = useState();

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

  console.log(playlist.songList);
  return (
    <DashboardSection>
      <PlayListHeader playlist={playlist} />
      <ReproduceSearchPlaylist
        songsList={AllSongsFromPlaylist}
        listName={playlist.name}
      />
      <SongsListContainer songs={AllSongsFromPlaylist} playlist={playlist} />
    </DashboardSection>
  );
};

export default Playlist;
