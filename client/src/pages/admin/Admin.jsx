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
import { Outlet } from "react-router-dom";
import AsideAdmin from "./asideAdmin";

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

  const styleInput = "bg-grey rounded-md ";
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
        <Dropdown admin={true}/>
        <AsideAdmin />
        <div className="md:w-full md:h-screen h-full flex justify-center items-center text-white flex-col">
          <div className="">
            <h1 className="md:text-8xl text-5xl font-bold border-none"> Upload Songs</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row p-10 w-full">
              <div className="flex flex-col mr-6">
                <label className="mb-3 mt-1">Title :</label>
                <input type="text" name="title" className={styleInput} maxlength="100"/>
                <label className="mb-3 mt-1">Artist :</label>
                <input type="text" name="artist" className={styleInput} maxlength="100"/>
                <label className="mb-3 mt-1">Album :</label>
                <input type="text" name="album" className={styleInput} maxlength="100"/>
                <label className="mb-3 mt-1">Genre:</label>
                <input type="text" name="genre" className={styleInput} maxlength="30"/>
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Song Image:</label>
                {/* <input type="file" name="songImage" /> */}
                <div className="flex justify-center items-center w-full">
                  <label
                    for="dropzone-file"
                    className="flex flex-col justify-center items-center w-full  bg-grey rounded-lg border-2 border-gray-300 cursor-pointer hover:bg-grey4 "
                  >
                    <div className="flex flex-col justify-center items-center pt-5 pb-6 mx-2">
                      <Icons name={"Pencil"} size={52} color={"white"} />
                      <p className="mb-1 mx-2 text-xs md:text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span>{" "}
                        <p className="hidden md:flex">or drag and drop</p>
                      </p>
                      <p className="hidden md:flex text-xs text-gray-500">
                        PNG or JPG (MAX. 800x 400px)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" accept="image/jpeg, image/png" />
                  </label>
                </div>
                <label className="mb-3 pt-1">Song :</label>
                <input
                  className="block w-full text-sm text-gray-900 bg-grey rounded-lg  cursor-pointer focus:outline-none"
                  aria-describedby="file_input_help"
                  id="file_input"
                  type="file"
                  accept="audio/mp3 audio/mp4"
                />
              </div>
            </div>
            <div className="flex justify-between m-3 mb-5">
              <button className="mr-20 bg-purpleDark rounded-lg text-white w-full">
                CANCEL
              </button>
              <button className=" bg-purpleDark rounded-lg text-white w-full">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
        <MusicPlayer />
      </DashboardSection>
    </>
  );
};
export default Admin;
