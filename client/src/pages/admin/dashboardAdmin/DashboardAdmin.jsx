// import Search from "pages/search";
import React from "react";
import FormAdmin from "../formAdmin";
import Statistics from "../statistics";

const DashboardAdmin = ({ page }) => {
  return <>{chooseDashboard[page]}</>;
};

const chooseDashboard = {
  home: <FormAdmin />,
  search: "<Search />",
  statistics: <Statistics />,
  profile: "<Profile />",
};

export default DashboardAdmin;
