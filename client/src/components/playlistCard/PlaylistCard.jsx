import React from "react";
import { Link } from "react-router-dom";
import SettingsDropDown from "components/settingsDropDown";
import Modal from "components/modal";
import DeletePlaylistModal from "components/playlistModals/deletePlaylist";
import EditPlaylistModal from "../playlistModals/editPlaylistModal";

const PlaylistCard = ({ playlist }) => {
  return (
    <div className=" text-white text-center md:bg-grey5  md:px-5 md:py-6 rounded-md">
      <Link to={"/playlist"} state={playlist} key={playlist._id}>
        <div className="playlist--image md:mb-3">
          <img
            src={playlist.playListImage}
            alt=""
            className="rounded-md w-full"
          />
        </div>
        <div className="playlist--content mt-2 md:text-left">
          <h2 className="md:text-xl md:mb-3">{playlist.name}</h2>
          <p className="text-grey overflow-y-auto md:flex hidden">
            {playlist.description}
          </p>
        </div>
      </Link>

      <div className="flex-none flex  mb-2 pr-5 max-w-full lg:ml-40 md:ml-28">
        <SettingsDropDown playlist={playlist}>
          <Modal background={"bg-grey5"} text={"Delete"}>
            <DeletePlaylistModal playlist={playlist} />
          </Modal>
          <Modal background={"bg-grey5"} modalTitle={`Edit playlist ${playlist.name}`} text={"Edit"}>
            <EditPlaylistModal playlist={playlist} />
          </Modal>
        </SettingsDropDown>
      </div>
    </div>
  );
};

export default PlaylistCard;
