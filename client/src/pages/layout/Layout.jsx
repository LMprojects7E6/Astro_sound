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
  const { user, verifyTokenExpiration, signOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const { isLoading, data } = useQuery(["getSession"], getSession);
  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    } else {
      const verifyToken = async () => {
        try {
          await verifyTokenExpiration();
        } catch (error) {
          await signOut();
          navigate("/login");
          console.log("Token expired, SIGN OUT!!");
        }
      };
      verifyToken();
    }
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (data.role === "admin") {
    return <Admin />;
  }

  if (data.role === "user") {
    return (
      <section className="flex md:flex-col md:justify-between h-screen">
        <div className="flex md:flex-row h-screen w-screen flex-col-reverse">
          <Aside />
          <Outlet context={data} />
        </div>
        <MusicPlayer />
      </section>
    );
  }
};

export default Layout;
