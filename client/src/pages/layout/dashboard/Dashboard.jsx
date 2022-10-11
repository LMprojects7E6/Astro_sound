import React from "react";

import Home from "pages/home";
import Search from "pages/search";
import Library from "pages/library";
import Profile from "pages/profile";

const Dashboard = ({ page }) => {
  return <>{chooseDashboard[page]}</>;
};

const chooseDashboard = {
  home: <Home />,
  search: <Search />,
  library: <Library />,
  profile: <Profile />,
};
export default Dashboard;
