import { useQuery } from "@tanstack/react-query";
import { getSession } from "api/session";
import { Outlet, useNavigate } from "react-router-dom";
import Loader from "components/loader/Loader";
import Aside from "./aside";
import MusicPlayer from "./musicPlayer";
import Admin from "pages/admin/Admin";
import { useContext, useEffect } from "react";
import { AuthContext } from "context/AuthProvider";

const Layout = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { isLoading, data } = useQuery(["getSession"], getSession);

  console.log(data);

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    }
  }, []);

  if (isLoading) {
    return <Loader></Loader>;
  } else if (data.role === "admin") {
    return <Admin></Admin>;
  } else if (data.role === "user") {
    return (
      <section className="flex md:flex-col md:justify-between h-screen">
        <div className="flex md:flex-row h-screen w-screen flex-col-reverse">
          <Aside />
          <Outlet />
        </div>
        <MusicPlayer />
      </section>
    );
  }
};

export default Layout;
