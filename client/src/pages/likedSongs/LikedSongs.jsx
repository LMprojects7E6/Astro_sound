import React from "react";
import DashboardSection from "components/dashboardSection";
import ReproduceSearchPlaylist from "components/reproduceSearchPlaylist";
import SongsListContainer from "components/songsListContainer/SongsListContainer";
import { getLikedPlaylists } from "api/playlists";
import { useQuery } from "@tanstack/react-query";
import Loader from "components/loader/Loader";
import { Link } from "react-router-dom";

const LikedSongs = () => {
  const { isLoading, isError, data, error } = useQuery(
    ["liked-songs"],
    getLikedPlaylists
  );
  console.log(data);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <DashboardSection>
      <div className="flex w-full items-center align-middle">
        <img className="mr-6" src={require("../../assets/likedsong.png")} />
        <div className="flex flex-col justify-center">
          <h2 className="md:mt-0 mt-10 mb-2 text-white text-2xl md:text-8xl">
            Liked Songs
          </h2>
        </div>
      </div>
      {data.length > 0 ? (
        <>
          <ReproduceSearchPlaylist songsList={data} listName={"Liked Songs"} />
          <SongsListContainer songs={data} />
        </>
      ) : (
        <Link to={"/search"}>
          <div className="w-full text-center mt-20 cursor-pointer">
            <h4 className="md:mt-0 mt-10 mb-2 text-white text-2xl md:text-2xl">
              Your list is empty find and listen to the latests songs...
            </h4>
          </div>
        </Link>
      )}
    </DashboardSection>
  );
};

export default LikedSongs;
