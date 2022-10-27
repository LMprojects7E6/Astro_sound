import React from "react";
import { Link } from "react-router-dom";
import SettingsDropDown from "components/settingsDropDown";
import Modal from "components/modal";
import DeletePlaylistModal from "components/playlistModals/deletePlaylist";
import EditPlaylistModal from "../playlistModals/editPlaylistModal";

const PlaylistCard = ({ playlist }) => {
  return (
    <div className="relative text-white text-center md:bg-grey5  md:px-5 md:py-6 rounded-md">
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

      <SettingsDropDown playlist={playlist}>
        <Modal background={"bg-grey5"} modalTitle={"Delete"} text={"Delete"}>
          <DeletePlaylistModal playlist={playlist} />
        </Modal>
        <Modal background={"bg-grey5"} modalTitle={"Edit"} text={"Edit"}>
          <EditPlaylistModal />
        </Modal>
      </SettingsDropDown>
    </div>
  );
};

export default PlaylistCard;
