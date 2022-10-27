
import { useMutation } from "@tanstack/react-query";
import { postSong } from "api/songs";
import DashboardSection from "components/dashboardSection";
import Dropdown from "components/dropdown";
import Icons from "components/icons";
import Loader from "components/loader/Loader";
import { AuthContext } from "context/AuthProvider";
import MusicPlayer from "pages/layout/musicPlayer";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import AsideAdmin from "./asideAdmin";
import DashboardAdmin from "./dashboardAdmin";
import FormAdmin from "./formAdmin";
// import Dashboard from "./dashboard/Dashboard"


const Admin = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { mutate, isLoading } = useMutation(postSong, {
    onSuccess: (res) => {
      console.log(res);
      toast.success(res);
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  return (
    <>
      {isLoading && (
        <div className="bg-opacity-loader absolute flex justify-center md:w-screen md:h-screen text-white">
          <Loader />
        </div>
      )}
      <DashboardAdmin>
      <div className="flex flex-col-reverse h-screen">
        <Dropdown admin={true}/>
        <AsideAdmin />
        {/* <Dashboard /> */}
        <FormAdmin mutate={mutate}/>
        <MusicPlayer />
      </div>
      </DashboardAdmin>
    </>
  );
};
export default Admin;
