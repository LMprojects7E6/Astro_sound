import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getSongsByGenre } from "api/songs";

import DashboardSection from "components/dashboardSection";
import SongsListContainer from "components/songsListContainer/SongsListContainer";
import Loader from "components/loader/Loader";
import ReproduceSearchPlaylist from "components/reproduceSearchPlaylist";

const Genre = () => {
  const navigate = useNavigate();
  const { genre } = useParams();

  const { isLoading, isError, data, error } = useQuery([`genre-${genre}`], () =>
    getSongsByGenre(genre)
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    navigate("/error");
  }

  return (
    <DashboardSection>
      <div className="flex w-full items-center align-middle">
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
};

export default Genre;
