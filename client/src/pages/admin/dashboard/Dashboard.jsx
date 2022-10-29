import Search from "pages/search";
import Admin from "..";
import Estatistics from "../statistics";

const Dashboard = ({ page }) => {
  return <>{chooseDashboard[page]}</>;
};

const chooseDashboard = {
  home: <Admin />,
  search: <Search />,
  estaticts: <Estatistics/>,
};
export default Dashboard;