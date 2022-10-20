import DashboardSection from "components/dashboardSection";
import Slider from "components/slider";
import CardsRow from "components/cardsRow";
import { getThreeSongs } from "api/songs";
import { getFivePlaylists, getLikedPlaylists } from "api/playlists";
import { useQuery } from "@tanstack/react-query";
import Dropdown from "components/dropdown";
import toast from "react-hot-toast";
import FavoriteSongContainer from "components/favoriteSongContainer/FavoriteSongContainer";
import Carrousel from "components/carrousel";

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

  const {
    isLoading: isLoadingLikedSongs,
    isError: isErrorLikedSongs,
    data: likedSongs,
    error: likedSongsError,
  } = useQuery(["liked-songs"], getLikedPlaylists);

  if (isLoadingSong || isLoadingPlaylist || isLoadingLikedSongs) {
    return <p>Loading...</p>;
  } else if (isSongError || isPlaylistError || isErrorLikedSongs) {
    toast.error(songError || playlistError || likedSongsError);
  } else {
    return (
      <DashboardSection>
        <Dropdown />
        <Carrousel threeSongs={threeSongs}></Carrousel>
        {/* <Slider threeSongs={threeSongs} /> */}
        <CardsRow fivePlaylist={fivePlaylist} />
        <FavoriteSongContainer likedSongs={likedSongs} />
      </DashboardSection>
    );
  }
};

export default Home;
