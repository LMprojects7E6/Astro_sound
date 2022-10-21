import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllSongsFromPlaylist } from "api/songs";
import toast from "react-hot-toast";
import DashboardSection from "components/dashboardSection";
import LikedSongs from "pages/likedSongs/LikedSongs";

const Library = () => {
  //Get AllSongsFromPlaylist
  // const {
  //   data: allSongsFromPlaylist,
  //   isLoading: isLoadingAllSongsFromPlaylist,
  //   isError: isAllSongsFromPlaylistError,
  //   error: AllSongsFromPlaylistError,
  // } = useQuery(["allSongsFromPlaylist"], getAllSongsFromPlaylist);

  // if (isLoadingAllSongsFromPlaylist) {
  //   return <p>Loading...</p>;
  // } else if (isAllSongsFromPlaylistError) {
  //   toast.error(AllSongsFromPlaylistError);
  // } else {
    return (
      <DashboardSection>
        <div className="text-gray-300 min-h-screen p-10 text-white w-full">
          {/* <!-- header --> */}
          <div className="flex">
            <img className="mr-6" src={require("../../assets/likedsong.png")} />
            <div className="flex flex-col justify-center">
              {/* <!-- content --> */}
              <h4 className="mt-0 mb-2 uppercase text-gray-500 tracking-widest text-xs">
                Playlist
              </h4>
              <h1 className="mt-0 mb-2 text-white text-8xl">Liked Songs</h1>
            </div>
          </div>
        </div>
      </DashboardSection>
    );
  // }
};

export default Library;
