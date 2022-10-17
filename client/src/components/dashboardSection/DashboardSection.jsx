import React from "react";

const DashboardSection = ({ children, imgUrl }) => {
  return (
    <section className="  container min-w-screen pt-5 bg-gradient-to-b from-purpleDark to-black">
      <div>{children}</div>
    </section>
  );
};

export default DashboardSection;
