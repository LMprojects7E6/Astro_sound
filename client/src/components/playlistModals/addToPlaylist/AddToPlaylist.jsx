import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllPlaylists } from "api/playlists";

import { addSongToPlaylist } from "api/songs";

import React from "react";
import toast from "react-hot-toast";
import Modal from "components/modal/Modal";
import CreatePlaylist from "../createPlaylist";

const AddToPlaylist = ({ setShowModal, song, setOpen, open }) => {
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery(
    ["playlists"],
    getAllPlaylists
  );

  const addToPlaylist = useMutation(addSongToPlaylist, {
    onSuccess: (resp) => {
      playlistUpdated(resp);
    },
    onError: (err) => {
      toast.error(err.response.data.errorMsg);
    },
  });

  const playlistUpdated = (resp) => {
    queryClient.invalidateQueries(["playlists"]);
    setShowModal(false);
    resp.status === 208 ? toast.error(resp.data) : toast.success(resp.data);
  };

  const handelClick = (list) => {
    addToPlaylist.mutate({
      songId: song._id,
      playlistId: list._id,
    });
    setOpen(false);
  };

  return (
    <>
      <ul className="m-5 pr-4 px-10 list-disc">
        {data?.map((list) => (
          <li
            className="cursor-pointer"
            key={list._id}
            onClick={() => handelClick(list)}
          >
            {list.name}
          </li>
        ))}
      </ul>

      <div className="relative pr-4 px-4 ">
        <hr />
      </div>
      <div className="flex items-center justify-start p-6 ">
        <Modal
          background={"mainButtonBg"}
          width={"w-max"}
          radius={"rounded"}
          text={"+ Create new playlist"}
          modalTitle={"Create PLaylist"}
        >
          <CreatePlaylist />
        </Modal>
      </div>
    </>
  );
};

export default AddToPlaylist;
