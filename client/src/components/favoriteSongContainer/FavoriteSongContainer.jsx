import React from "react";
import Icon from "components/icons/Icons";
import image from "assets/threeSongs/quevedo.png";
import LikedSong from "./LikedSong";
const FavoriteSongContainer = ({ likedSongs }) => {
  return (
    <>
      <h2 className="text-2xl m-2 text-white font-bold  mb-8 flex">
        Liked Songs{" "}
        <span className="mx-3">
          <Icon name={"heart"} size={24} color={"white"} />
        </span>
      </h2>
      <section className="w-full mainButtonBg flex text-white rounded-lg mb-20 ">
        <div className="md:p-5 p-3 w-full flex flex-col justify-around ml-5">
          <div className="overflow-y-auto h-52">
            {/* <h2 className="text-xl font-bold mb-5 md:flex hidden">
              Songs that come from your heart❤️:
            </h2> */}
            {likedSongs.map((song) => {
              return (
                <LikedSong
                  key={song._id}
                  artist={song.artist}
                  title={song.title}
                />
              );
            })}
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
    </>
  );
};

export default FavoriteSongContainer;
