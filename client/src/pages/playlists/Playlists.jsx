import React from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { getAllSongsFromPlaylist } from "api/songs";

import DashboardSection from "components/dashboardSection";
import SongsListContainer from "components/songsListContainer/SongsListContainer";
import Button from "components/button";
import SearchBarModal from "components/searchBarModal";
import SearchResults from "pages/search/searchResults/SearchResults";

const Playlist = () => {
  const location = useLocation();
  const playlist = location.state;
  console.log(playlist);

  const {
    isLoading,
    isError,
    error,
    data: AllSongsFromPlaylist,
  } = useQuery(["AllSongsFromPlaylist"], () =>
    getAllSongsFromPlaylist(playlist._id)
  );

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (isError) {
    toast.error(error);
  } else {
    return (
      <DashboardSection>
        <div className="flex w-full items-center align-middle">
          <img
            src={playlist.playListImage}
            alt=""
            className="hidden md:flex w-60 h-60 m-5 rounded-md"
          />

          <div className="flex flex-col justify-center">
            <h4 className="mt-0 mb-1 uppercase text-xl text-gray-500 tracking-widest hidden md:flex ">
              Playlist
            </h4>
            <h1 className="md:mt-0 mt-10 mb-2 text-white text-2xl md:text-8xl">
              {playlist.name}
            </h1>
            <h3 className="mt-2 mb-2 text-white uppercase hidden md:flex">
              {playlist.description}
            </h3>
          </div>
        </div>
        <div className="hidden md:flex items-center mt-10 justify-between w-full">
          <div className="  border-2 border-white pl-3 pt-3 w-20 h-20      rounded-full bg-purple2 align-center ">
            <Button
              icon={"play"}
              iconSize={48}
              onClick={() => console.log("play")}
            />
          </div>
          <SearchBarModal modalTitle={"Search"}>
            <SearchResults songs={AllSongsFromPlaylist} />
          </SearchBarModal>
        </div>

        <SongsListContainer songs={AllSongsFromPlaylist} />
      </DashboardSection>
    );
  }
};

export default Playlist;
