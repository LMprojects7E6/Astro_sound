import { useQuery } from "@tanstack/react-query";
import { getSession } from "api/session";
import Dropdown from "components/dropdown";

import MusicPlayer from "pages/layout/musicPlayer";
import { useState } from "react";

import AsideAdmin from "./asideAdmin";
import DashboardAdmin from "./dashboardAdmin";

const Admin = () => {
  const [page, setPage] = useState("home");
  const data = useQuery(["getSession"], getSession);

  return (
    <>
      <section className="w-full bg-gradient-to-b from-purpleDark to-black overflow-y-auto">
        <div className="flex flex-col-reverse h-screen md:flex-row-reverse">
          <Dropdown admin={true} data={data} />
          <DashboardAdmin page={page} />
          <AsideAdmin page={page} setPage={setPage} />
          {/* <MusicPlayer /> */}
        </div>
      </section>
    </>
  );
};
export default Admin;
