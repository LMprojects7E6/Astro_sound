import DashboardSection from "components/dashboardSection";
import Slider from "components/slider";
import { getThreeSongs } from "api/songs";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "context/AuthProvider";
import FavoriteSongContainer from "components/favoriteSongContainer/FavoriteSongContainer";
import SongCard from "components/songCard";

const Home = () => {
  const { user } = useContext(AuthContext);
  const { data: threeSongs } = useQuery(["threeSongs"], () =>
    getThreeSongs(user)
  );

  return (
    <DashboardSection>
      <Slider threeSongs={threeSongs} />
    </DashboardSection>
  );
};

export default Home;
