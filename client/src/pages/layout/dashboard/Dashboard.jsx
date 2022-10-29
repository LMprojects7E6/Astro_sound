import FormAdmin from "pages/admin/formAdmin";
import React from "react";

const Dashboard = ({ page }) => {
  return <>{chooseDashboard[page]}</>;
};

const chooseDashboard = {
  home: <FormAdmin />,
};

export default Dashboard;
