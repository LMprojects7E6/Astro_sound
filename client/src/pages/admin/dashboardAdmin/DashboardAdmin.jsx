import React from "react";
import FormAdmin from "../formAdmin";

const DashboardAdmin = ({ page }) => {
  return <>{chooseDashboard[page]}</>;
};

const chooseDashboard = {
  home: <FormAdmin />,
  search: "<Search />",
  statistics: "<Statistics/>",
  profile: "<Profile />",
};

export default DashboardAdmin;
