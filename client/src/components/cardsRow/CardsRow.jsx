import React from "react";
import { useNavigate } from "react-router-dom";
import { getFivePlaylists } from "api/playlists";
import { useQuery } from "@tanstack/react-query";
import Loader from "components/loader/Loader";
import PlaylistCard from "components/playlistCard/PlaylistCard";
import Modal from "components/modal/Modal";
import CreatePlaylist from "components/playlistModals/createPlaylist";

const CardsRow = () => {
  const navigate = useNavigate();
  const {
    data: fivePlaylist,
    isLoading: isLoadingPlaylist,
    isError: isPlaylistError,
    error: playlistError,
  } = useQuery(["playlists"], getFivePlaylists);

  if (isLoadingPlaylist) {
    return <Loader/>
  } else if (isPlaylistError) {
    navigate("/error");
  } else {
    return (
      <section className="md:my-10 my-5">
        <h2 className="text-2xl m-2 text-white font-bold mb-5 mx-2">
          My Library
        </h2>

        <div
          className={`${
            fivePlaylist.length > 0
              ? "flex flex-col md:grid md:grid-cols-5 gap-5  md:gap-6  md:overflow-x-auto "
              : "flex flex-col"
          }`}
        >
          {fivePlaylist.length > 0 ? (
            fivePlaylist.map((playlist) => (
              <PlaylistCard playlist={playlist} key={playlist._id} />
            ))
          ) : (
            <h2 className="md:text-2xl text-xl mb-8 text-white">
              You don't have any playlist created
              <button className="bg-black pr-7 pl-0 text-lg flex mt-5 rounded-md">
                <Modal
                  className="font-bold"
                  modalTitle={"Create PLaylist"}
                  icon={"plus"}
                  iconSize={22}
                  iconColor={"currentColor"}
                  text={"Create Playlist"}
                >
                  <CreatePlaylist />
                </Modal>
              </button>
            </h2>
          )}
        </div>
      </section>
    );
  }
};

export default CardsRow;
