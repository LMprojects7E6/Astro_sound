// import Search from "pages/search";
import React from "react";
import FormAdmin from "../formAdmin";
import Statistics from "../statistics";
import Search from "pages/search";
import Profile from "pages/profile";

const DashboardAdmin = ({ page }) => {
  return <>{chooseDashboard[page]}</>;
};

const chooseDashboard = {
  home: <FormAdmin />,
  search: <Search />,
  statistics: <Statistics />,
  profile: <Profile />,
};

export default DashboardAdmin;
