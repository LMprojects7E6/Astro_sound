import React from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { getAllSongsFromPlaylist } from "api/songs";
import SongRow from "components/songRow";

import DashboardSection from "components/dashboardSection";

const Playlist = () => {
  const location = useLocation();
  const playlist = location.state;

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
        <div className="text-gray-300 min-h-screen p-10 text-white w-full">
          {/* <!-- header --> */}
          <div className="flex">
            <img className="mr-6" src={require("../../assets/likedsong.png")} alt=''/>
            {/* <img className="mr-6" src={require(playlist.playListImage)} /> */}
            <div className="flex flex-col justify-center">
              {/* <!-- content --> */}
              <h4 className="mt-0 mb-2 uppercase text-gray-500 tracking-widest text-xs">
                Playlist
              </h4>
              <h1 className="mt-0 mb-2 text-white text-8xl">{playlist.name}</h1>
              <h3 className="mt-0 mb-2 text-white">{playlist.description}</h3>
            </div>
          </div>

          {/* <!-- action buttons --> */}
          <div className="mt-6 flex justify-between">
            <div className="mt-10 w-full">
              {/* <!-- song list header --> */}
              <div className="flex text-gray-600">
                <div className="p-2 w-8 flex-shrink-0"></div>
                <div className="p-2 w-8 flex-shrink-0"></div>
                <div className="p-2 w-full">Title</div>
                <div className="p-2 w-full">Album</div>
                <div className="p-2 w-full">Artist</div>
                <div className="p-2 w-12 flex-shrink-0 text-right">⏱</div>
              </div>
              {AllSongsFromPlaylist.map((song) => (
                <SongRow
                  key={song._id}
                  songFile={song.songFile}
                  title={song.title}
                  artist={song.artist}
                  album={song.album}
                  genre={song.genre}
                />
              ))}
            </div>
          </div>
        </div>
      </DashboardSection>
    );
  }
};

export default Playlist;
