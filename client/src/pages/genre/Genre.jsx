import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { getAllSongsFromPlaylist, getSongsByGenre } from "api/songs";

import DashboardSection from "components/dashboardSection";
import SongsListContainer from "components/songsListContainer/SongsListContainer";
import Button from "components/button";
import SearchBarModal from "components/searchBarModal";
import SearchResults from "components/searchResults";
import Loader from "components/loader/Loader";
import ReproduceSearchPlaylist from "components/reproduceSearchPlaylist";

const Genre = () => {
  const { genre } = useParams();

  const { isLoading, isError, data, error } = useQuery([`genre-${genre}`], () =>
    getSongsByGenre(genre)
  );

  if (isLoading) {
    return <Loader />;
  } else if (isError) {
    toast.error(error);
  } else {
    return (
      <DashboardSection>
        <div className="flex w-full items-center align-middle">
          {/* <img
            src={playlist.playListImage}
            alt=""
            className="hidden md:flex w-60 h-60 m-5 rounded-md"
          /> */}

          <div className="flex flex-col justify-center">
            <h4 className="mt-0 mb-1 uppercase text-xl text-gray-500 tracking-widest hidden md:flex ">
              Genre
            </h4>
            <h1 className="md:mt-0 uppercase mt-10 mb-2 text-white text-2xl md:text-8xl">
              {genre}
            </h1>
          </div>
        </div>
        <ReproduceSearchPlaylist songsList={data} listName={genre} />

        <SongsListContainer songs={data} />
      </DashboardSection>
    );
  }
};

export default Genre;
