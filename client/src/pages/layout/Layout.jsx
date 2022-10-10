import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Aside from "./aside";
import MusicPlayer from "./musicPlayer";

const Layout = () => {
  const navigate = useNavigate();
  const isLoggedIn = false;

  useEffect(() => {
    !isLoggedIn && navigate("/login");
  }, []);

  return (
    <div>
      <Aside />
      <Outlet />
      <MusicPlayer />
    </div>
  );
};

export default Layout;
