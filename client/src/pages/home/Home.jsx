import DashboardSection from "components/dashboardSection";
import CardsRow from "components/cardsRow";
import HeaderLiked from "../../components/headerLiked"
import FavoriteSongContainer from "components/favoriteSongContainer/FavoriteSongContainer";
import Carrousel from "components/carrousel";

const Home = () => {
  return (
    <DashboardSection>
      <Carrousel />
      <CardsRow />
      <HeaderLiked />
      <FavoriteSongContainer />
    </DashboardSection>
  );
};

export default Home;
