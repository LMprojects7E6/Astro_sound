import React from "react";

const DashboardSection = ({ children, imgUrl }) => {
  return (
    <section className="min-w-screen bg-gradient-to-b from-purpleDark to-black">
      <div>{children}</div>
      <div>{children}</div>
    </section>
  );
};

export default DashboardSection;
