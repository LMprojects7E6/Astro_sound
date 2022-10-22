import { useMutation } from "@tanstack/react-query";
import { postSong } from "api/songs";
import DashboardSection from "components/dashboardSection";
import Dropdown from "components/dropdown";
// import Icons from "components/icons";
import Loader from "components/loader/Loader";
import { AuthContext } from "context/AuthProvider";
import MusicPlayer from "pages/layout/musicPlayer";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import AsideAdmin from "./asideAdmin";
import FormAdmin from "./formAdmin";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    mutate(data);
  };

  // if (isLoading) {
  //   return <Loader></Loader>;
  // }
  return (
    <>
      {isLoading && (
        <div className="bg-opacity-loader absolute flex justify-center md:w-screen md:h-screen text-white">
          <Loader />
        </div>
      )}
      <DashboardSection>
        <div className="flex flex-col-reverse h-screen">
          <Dropdown admin={true} />
          <AsideAdmin />
          <FormAdmin handleSubmit={handleSubmit} />
          <MusicPlayer />
        </div>
      </DashboardSection>
    </>
  );
};
export default Admin;
