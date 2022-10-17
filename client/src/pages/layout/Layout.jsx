import { useQuery } from "@tanstack/react-query";
import { getSession } from "api/session";
<<<<<<< HEAD
import { useContext, useEffect } from "react";
import { AuthContext } from "context/AuthProvider";
=======
>>>>>>> admin-upload
import { Outlet, useNavigate } from "react-router-dom";
import Loader from "components/loader/Loader";

import Aside from "./aside";
import MusicPlayer from "./musicPlayer";
import Admin from "pages/admin/Admin";
import Logout from "components/button/Logout";

const Layout = () => {
<<<<<<< HEAD
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const { isLoading, isError, data } = useQuery(["getSession"], () =>
    getSession(user)
  );

=======
  // const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { isLoading, isError, data } = useQuery(["getSession"], getSession);
>>>>>>> admin-upload
  if (isLoading) {
    return <Loader></Loader>;
  } else if (isError) {
    navigate("/login", { replace: true });
  } else if (data === "admin") {
    return <Admin></Admin>;
  } else if (data === "user") {
    return (
      <div className="h-100">
        <div className="flex flex-row">
          <Aside />
          {/*//TODO get component and add to menu  */}
          <Logout></Logout>
          <Outlet />
        </div>
        <MusicPlayer />
      </div>
    );
  }
};

export default Layout;
