import React from "react";

import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getGenresCount } from "api/phpSongs";
import EstatisticsCard from "components/estatisticsCard";

const Statistics = () => {
  // const {
  //   data: data,
  //   isLoading: isLoadingGenre,
  //   isError: isGenresError,
  //   error: GenresError,
  // } = useQuery(["genres"], getGenres);

  const { data, isLoading, isError, error } = useQuery(
    ["genresCount"],
    getGenresCount
  );

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (isError) {
    toast.error(error);
  } else {
    return (
      <div id="wrapper" className="max-w-xl px-4 py-4 mx-auto">
        <div className="sm:grid sm:h-32 sm:grid-flow-row sm:gap-4 sm:grid-cols-3">
          {data.genresCount.length > 0 ? (
            data.genresCount.map((e) => {
              let percentage = (e.songs/data.genresCount.length).toFixed(1);
              return <EstatisticsCard key={e.genre} genre={e.genre} songsNumber={e.songs} percentage={percentage}/>;
            })
          ) : (
            <h2 className="md:text-2xl text-xl mb-8 text-white">
              You don't have any genres
            </h2>
          )}
        </div>
      </div>
    );
  }
};

export default Statistics;
