import DashboardSection from "components/dashboardSection";
import Slider from "components/slider";
import { getThreeSongs } from "api/songs";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const Home = () => {
  const {
    data: threeSongs,
    isLoading,
    isError,
    error,
  } = useQuery(["threeSongs"], getThreeSongs);

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
