import { useQuery } from "@tanstack/react-query";
import { getSession } from "api/session";
import { Outlet, useNavigate } from "react-router-dom";
import Loader from "components/loader/Loader";
import Aside from "./aside";
import MusicPlayer from "./musicPlayer";
import Admin from "pages/admin/Admin";

const Layout = () => {
  const navigate = useNavigate();
  const { isLoading, isError, data } = useQuery(["getSession"], getSession);
  if (isLoading) {
    return <Loader></Loader>;
  } else if (isError) {
    navigate("/login", { replace: true });
  } else if (data === "admin") {
    return <Admin></Admin>;
  } else if (data === "user") {
    return (
      <section className="flex flex-col justify-between min-w-screen min-h-screen">
        <div className="flex flex-row grow">
          <Aside />
          <Outlet />
        </div>
        <MusicPlayer />
      </section>
    );
  }
};

export default Layout;
