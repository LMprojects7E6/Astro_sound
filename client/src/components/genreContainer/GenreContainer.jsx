import React from "react";

import { useQuery } from "@tanstack/react-query";
import { getSongsByGenre } from "api/songs";
import Loader from "components/loader/Loader";

import { DotSpinner } from "@uiball/loaders";

const GenreContainer = ({ genre }) => {
  const { isLoading, isError, data, error } = useQuery(
    [`genre-${genre.genre}`],
    () => getSongsByGenre(genre.genre)
  );

  if (isLoading) {
    return (
      <div className={`bg-${genre.color} rounded-xl  md:max-w-xs m-5`}>
        <div className="p-10">
          <DotSpinner size={100} speed={0.9} color="purple" />
          <p className="text-2xl mt-5">LOADING...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-${genre.color} rounded-xl  md:max-w-xs m-2 md:m-5 cursor-pointer`}
      onClick={() => console.log(`reproduce all songs ${genre.genre}`)}
    >
      <h4 className="md:text-xl m-2 text-white font-bold flex">
        {genre.genre.toUpperCase()}
      </h4>
      <div className="flex flex-row  m-5 space-around md:flex-col items-center    md:rounded-xl  w-28 h-14 md:w-60 md:max-h-72  md:m-20"></div>
    </div>
  );
};

export default GenreContainer;
