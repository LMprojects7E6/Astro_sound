import DashboardSection from "components/dashboardSection";
import CardsTable from "components/cardsTable"
import Slider from "components/slider";
import { getThreeSongs } from "api/songs";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "context/AuthProvider";

const Home = () => {
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
      </DashboardSection>
    );
  }
};

export default Home;
