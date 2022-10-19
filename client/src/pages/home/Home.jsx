import DashboardSection from "components/dashboardSection";
import Slider from "components/slider";
import CardsRow from "components/cardsRow";
import { getThreeSongs } from "api/songs";
import { getFivePlaylists } from "api/playlists";
import { useQuery } from "@tanstack/react-query";
import Dropdown from "components/dropdown";
import toast from "react-hot-toast";
import FavoriteSongContainer from "components/favoriteSongContainer/FavoriteSongContainer";

const Home = () => {
  const {
    data: threeSongs,
    isLoading: isLoadingSong,
    isError: isSongError,
    error: songError,
  } = useQuery(["threeSongs"], getThreeSongs);

  //Get fivePlaylist
  const {
    data: fivePlaylist,
    isLoading: isLoadingPlaylist,
    isError: isPlaylistError,
    error: playlistError,
  } = useQuery(["fivePlaylist"], getFivePlaylists);

  if (isLoadingSong || isLoadingPlaylist) {
    return <p>Loading...</p>;
  } else if (isSongError || isPlaylistError) {
    toast.error(songError || playlistError);
  } else {
    return (
      <DashboardSection>
        <Dropdown />
        <Slider threeSongs={threeSongs} />
        <CardsRow fivePlaylist={fivePlaylist} />
        <FavoriteSongContainer />
      </DashboardSection>
    );
  }
};

export default Home;
