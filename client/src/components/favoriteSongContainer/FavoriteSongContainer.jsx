import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Icon from "components/icons/Icons";
import image from "assets/threeSongs/quevedo.png";
import LikedSong from "./LikedSong";
import { getLikedPlaylists } from "api/playlists";
import { useQuery } from "@tanstack/react-query";
import Loader from "components/loader/Loader";

const FavoriteSongContainer = () => {
  const navigate = useNavigate();
  const {
    isLoading: isLoadingLikedSongs,
    isError: isErrorLikedSongs,
    data: likedSongs,
    error: likedSongsError,
  } = useQuery(["liked-songs"], getLikedPlaylists);

  if (isLoadingLikedSongs) {
    return <Loader />;
  } else if (isErrorLikedSongs) {
    navigate("/error");
  } else {
    return (
      <Link to={("/likedSongs")}>
        <section className="w-full mainButtonBg flex text-white rounded-lg mb-20 ">
          <div className="md:p-5 p-3 w-full flex flex-col justify-around ml-5">
            <div className="overflow-y-auto h-52">
              {likedSongs.length > 0 ? (
                likedSongs.map((song) => {
                  return (
                    <LikedSong
                      key={song._id}
                      artist={song.artist}
                      title={song.title}
                    />
                  );
                })
              ) : (
                <div>
                  <h2 className="md:text-2xl text-xl mb-8">
                    You don't have any liked songs
                  </h2>
                  <Link className="dark-button" to={"search"}>
                    Search some songs
                  </Link>
                </div>
              )}
            </div>
            <div className="flex md:justify-start justify-between items-center">
              <div className="flex flex-col ">
                <p className="font-normal text-2xl">
                  {likedSongs.length} Liked songs
                </p>
              </div>
              <div className="md:ml-5 cursor-pointer rounded-full border-2 border-white  pl-0.5 pt-0.5 w-8 h-8  flex ">
                <Icon name={"play"} size={24} color={"white"} />
              </div>
            </div>
          </div>
          <div className="hidden md:flex">
            <img src={image} alt="" />
          </div>
        </section>
      </Link>
    );
  }
};

export default FavoriteSongContainer;
