import React, { useContext } from "react";

import Button from "components/button";
import Icon from "components/icons";
import AddRemoveLikedSongs from "components/addRemoveLikedSongs";
import SettingsDropDown from "components/settingsDropDown";
import Modal from "components/modal";
import AddToPlaylist from "components/playlistModals/addToPlaylist";
import { MusicPlayerContext } from "context/MusicPlayerProvider";
import DeleteFromPlaylist from "components/playlistModals/deleteFromPlaylist";

const SongCard = ({ song, playlist }) => {
  console.log(playlist);
  const { setMusicPlayer } = useContext(MusicPlayerContext);
  const handleClick = () => {
    setMusicPlayer([song]);
  };
  return (
    <div className=" relative flex flex-row md:m-5 md:border-none border-2 border-black space-around md:flex-col items-center bg-purple3 md:bg-grey5 md:rounded-xl max-w-full md:w-60 md:max-h-72  ">
      <div
        className=" z-0 m-2 w-16 h-16 md:w-36  md:h-36 bg-cover bg-no-repeat bg-center  md:rounded-full "
        style={{ backgroundImage: `url(${song.songImage})` }}
        onClick={handleClick}
      >
        <div className=" flex-none z-50 hidden md:block border-2 pl-1.5 pt-1.5 w-10 h-10 mt-24 ml-24   overflow-auto rounded-full bg-purple2 align-center ">
          <Button icon={"play"} iconSize={24} onClick={handleClick} />
        </div>
      </div>
      <div
        className=" grow flex flex-col justify-between md:my-10  "
        onClick={handleClick}
      >
        <h5 className=" md:text-xl w-max font-bold tracking-tight text-white">
          {song.title}
        </h5>
        <p className=" text-white">{song.artist}</p>
      </div>
      <div className=" flex  mb-2 pr-5 max-w-full lg:ml-40 md:ml-28">
        <span className="absolute right-16 bottom-2">
          <AddRemoveLikedSongs song={song} />
        </span>
        <span className="ml-10">
          {playlist ? (
            <SettingsDropDown key={song.title} song={song}>
              <Modal
                background={"bg-grey5"}
                modalTitle={"Add to playlist"}
                text={"Add to playlist"}
              >
                <AddToPlaylist song={song} />
              </Modal>
              <Modal
                background={"bg-grey5"}
                modalTitle={"Remove from playlist"}
                text={"Remove"}
              >
                <DeleteFromPlaylist song={song} playlist={playlist} />
              </Modal>
            </SettingsDropDown>
          ) : (
            <SettingsDropDown key={song.title} song={song}>
              <Modal
                background={"bg-grey5"}
                modalTitle={"Add to playlist"}
                text={"Add to playlist"}
              >
                <AddToPlaylist song={song} />
              </Modal>
            </SettingsDropDown>
          )}
        </span>
      </div>
    </div>
  );
};

export default SongCard;
