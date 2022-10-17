import DashboardSection from "components/dashboardSection";
import Slider from "components/slider";
import { getThreeSongs } from "api/songs";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "context/AuthProvider";
import toast from "react-hot-toast";

const Home = () => {
  const { user } = useContext(AuthContext);

  const {
    isLoading,
    isError,
    error,
    data: threeSongs,
  } = useQuery(["threeSongs"], () => getThreeSongs(user));

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (isError) {
    toast.error(error);
  } else {
    return (
      <DashboardSection>
        <Slider threeSongs={threeSongs} />
      </DashboardSection>
    );
  }
};

export default Home;
