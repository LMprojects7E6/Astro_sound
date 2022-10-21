import DashboardSection from "components/dashboardSection";
<<<<<<< HEAD
import CardsTable from "components/cardsTable"
import Slider from "components/slider";
=======
import CardsRow from "components/cardsRow";
>>>>>>> ba89769ec8acbfb1f30ad36fb140fcb307bc8818
import { getThreeSongs } from "api/songs";
import { getFivePlaylists, getLikedPlaylists } from "api/playlists";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import FavoriteSongContainer from "components/favoriteSongContainer/FavoriteSongContainer";
import Carrousel from "components/carrousel";

const Home = () => {
<<<<<<< HEAD
  const { user } = useContext(AuthContext);
  const { isLoading, data: threeSongs } = useQuery(["threeSongs"], () =>getThreeSongs(user));

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <DashboardSection>
        <Slider threeSongs={threeSongs} />
        <p>My Library</p>
        <CardsTable />
=======
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
        <Carrousel threeSongs={threeSongs}></Carrousel>
        <CardsRow fivePlaylist={fivePlaylist} />
        <FavoriteSongContainer likedSongs={likedSongs} />
>>>>>>> ba89769ec8acbfb1f30ad36fb140fcb307bc8818
      </DashboardSection>
    );
  }
};

export default Home;
