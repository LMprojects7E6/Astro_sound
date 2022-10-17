import DashboardSection from "components/dashboardSection";
import Slider from "components/slider";
import { getThreeSongs } from "api/songs";
import { useQuery } from "@tanstack/react-query";
import Dropdown from "components/dropdown";

const Home = () => {
  const { data: threeSongs } = useQuery(["threeSongs"], getThreeSongs);

  return (
    <DashboardSection>
      <Dropdown />
      <Slider threeSongs={threeSongs} />
    </DashboardSection>
  );
};

export default Home;
