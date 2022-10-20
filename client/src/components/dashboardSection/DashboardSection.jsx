import React from "react";

const DashboardSection = ({ children }) => {
  return (
    <section className="w-full bg-gradient-to-b from-purpleDark to-black overflow-y-auto">
      <div>{children}</div>
    </section>
  );
};

export default DashboardSection;
