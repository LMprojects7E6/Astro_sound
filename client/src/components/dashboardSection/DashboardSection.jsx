import React from "react";
import Dropdown from "components/dropdown/Dropdown";
import { useQuery } from "@tanstack/react-query";
import { getSession } from "api/session";

const DashboardSection = ({ children }) => {
  const data = useQuery(["getSession"], getSession);
  return (
    <section className=" h-screen w-full bg-gradient-to-b from-purpleDark to-black mobile:h-full mobile:w-full md:overflow-y-auto p-8 pb-60 ">
      <Dropdown data={data} />
      {children}
    </section>
  );
};

export default DashboardSection;
