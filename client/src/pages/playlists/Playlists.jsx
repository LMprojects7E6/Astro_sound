import React from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllSongsFromPlaylist } from "api/songs";
import { getPlaylistsByID } from "api/playlists";
import toast from "react-hot-toast";

const Playlist = () => {
  const { playlist } = useLocation();
  console.log(playlist);
  const playlistID = playlist.id;

  //Get all songs from a playlist
  const {
    data: allSongsFromPlaylist,
    isLoading,
    isError,
    error,
  } = useQuery( ["allSongsFromPlaylist", playlistID], getAllSongsFromPlaylist(playlistID) );

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (isError) {
    toast.error(error);
  } else {
    console.log("getPlaylistsByID: ", getPlaylistsByID);
    console.log("allSongsFromPlaylist: ", allSongsFromPlaylist);
    return (
      <div className="bg-black text-gray-300 min-h-screen p-10 text-white w-full">
        {/* <!-- header --> */}
        <div className="flex">
          <img className="mr-6" src={require("../../assets/likedsong.png")} />
          <div className="flex flex-col justify-center">
            {/* <!-- content --> */}
            <h4 className="mt-0 mb-2 uppercase text-gray-500 tracking-widest text-xs">
              Playlist
            </h4>
            <h1 className="mt-0 mb-2 text-white text-8xl">${playlist.name}</h1>
          </div>
        </div>

        {/* <!-- action buttons --> */}
        <div className="mt-6 flex justify-between">
          <div className="flex">
            <button className="mr-2 bg-green-500 text-green-100 block py-2 px-8 rounded-full">
              Play
            </button>
          </div>
          <div className="text-gray-600 text-sm tracking-widest text-right">
            <h5 className="mb-1">Followers</h5>
            <p>5,055</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Playlist;
