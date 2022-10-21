import React from "react";
import Dropdown from "components/dropdown/Dropdown";

const DashboardSection = ({ children }) => {
  return (
    // <section className=" h-screen w-full bg-gradient-to-b from-purpleDark to-black mobile:h-full mobile:w-full overflow-y-auto p-8">
    <section className=" h-screen w-full bg-gradient-to-b from-purpleDark to-black mobile:h-full mobile:w-full overflow-y-auto p-8">
      <Dropdown />
      <div>{children}</div>
    </section>
  );
};

export default DashboardSection;
