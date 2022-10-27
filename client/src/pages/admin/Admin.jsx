import Dropdown from "components/dropdown";

import MusicPlayer from "pages/layout/musicPlayer";
import { useState } from "react";

import AsideAdmin from "./asideAdmin";
import DashboardAdmin from "./dashboardAdmin";

const Admin = () => {
  const [page, setPage] = useState("home");

  return (
    <>
      <section className="w-full bg-gradient-to-b from-purpleDark to-black overflow-y-auto">
        <div className="flex flex-col-reverse h-screen md:flex-row">
          <Dropdown admin={true} />
          <AsideAdmin page={page} setPage={setPage} />
          <DashboardAdmin page={page} />
          <MusicPlayer />
        </div>
      </section>
    </>
  );
};
export default Admin;
