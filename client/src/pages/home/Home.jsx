import DashboardSection from "components/dashboardSection";
import Slider from "components/slider";
import { getThreeSongs } from "api/songs";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { data: threeSongs } = useQuery(["threeSongs"], getThreeSongs);

  return (
    <DashboardSection>
      <Slider threeSongs={threeSongs} />
    </DashboardSection>
  );
};

export default Home;
