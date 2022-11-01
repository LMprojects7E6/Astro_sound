import React from "react";
import FormAdmin from "../formAdmin";
// import Statistics from "../statistics";
// import Search from "pages/search";

const DashboardAdmin = ({ page }) => {
  return <>{chooseDashboard[page]}</>;
};

const chooseDashboard = {
  home: <FormAdmin />,
  // search: <Search />,
  // statistics: <Statistics/>,
};

export default DashboardAdmin;
