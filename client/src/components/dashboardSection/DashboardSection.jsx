import React from "react";

const DashboardSection = ({ children }) => {
  return (
    <section className=" h-screen w-full  bg-gradient-to-b from-purpleDark to-black overflow-y-auto">
      <div className="flex flex-col-reverse md:flex-col-reverse h-full">{children}</div>
    </section>
  );
};

export default DashboardSection;
