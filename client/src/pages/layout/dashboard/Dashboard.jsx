import FormAdmin from "pages/admin/formAdmin";
import React from "react";



const Dashboard = ({ page }) => {
  console.log(page);
  return <>{chooseDashboard[page]}</>;
};

const chooseDashboard = {
  home:<FormAdmin />
};


export default Dashboard;
