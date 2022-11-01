import React from "react";
import DashboardSection from "components/dashboardSection";
import FavoriteSongContainer from "components/favoriteSongContainer/FavoriteSongContainer";
import PlaylistCardsRow from "components/cardsRow/playlistCardsRow";
import Modal from "components/modal";
import CreatePlaylist from "components/playlistModals/createPlaylist";
import "./Library.css";
const Library = () => {
  return (
    <DashboardSection>
      <div className="create-playlist__mobile md:hidden">
        <Modal
          className="font-bold"
          modalTitle={"Create Playlist"}
          icon={"plus"}
          iconSize={22}
          iconColor={"currentColor"}
          text={"Create Playlist"}
        >
          <CreatePlaylist />
        </Modal>
      </div>
      <div className="text-gray-300 min-h-screen p-10 text-white w-full">
        <h2 className="text-3xl font-semibold mb-1">My libraries</h2>
        <div className="flex flex-col">
          <FavoriteSongContainer />
          <PlaylistCardsRow />
        </div>
      </div>
    </DashboardSection>
  );
};

export default Library;
