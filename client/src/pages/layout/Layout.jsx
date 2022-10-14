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
    <div className="h-100">
      <div className="flex flex-row">
      <Aside />
      <Outlet />
      </div>
      <MusicPlayer />
    </div>
  );
};

export default Layout;
