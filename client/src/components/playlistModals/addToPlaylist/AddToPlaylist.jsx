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
    ["getAllPlaylists"],
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

  const playlistUpdated = (data) => {
    queryClient.invalidateQueries(["getAllPlaylists"]);
    setShowModal(false);
    toast.success(data);
  };

  const handelClick = (list) => {
    addToPlaylist.mutate({
      songId: song._id,
      playlistId: list._id,
    });
    setOpen(!open);
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
        >
          <CreatePlaylist />
        </Modal>
      </div>
    </>
  );
};

export default AddToPlaylist;
