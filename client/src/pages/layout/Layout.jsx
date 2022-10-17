import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Aside from "./aside";
import MusicPlayer from "./musicPlayer";

const Layout = () => {
  const navigate = useNavigate();
  const isLoggedIn = true;

  useEffect(() => {
    !isLoggedIn && navigate("/login");
  }, []);

  return (
    <section className="flex flex-col justify-between min-w-screen min-h-screen">
      <div className="flex flex-row grow">
        <Aside />
        <Outlet />
      </div>
      <MusicPlayer />
    </section>
  );
};

export default Layout;
