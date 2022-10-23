import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllPlaylists } from "api/playlists";
import { getSession } from "api/session";
import { addSongToPlaylist } from "api/songs";

import Button from "components/button";
import { AuthContext } from "context/AuthProvider";

import React, { useContext } from "react";
import toast from "react-hot-toast";

const AddToPlaylist = ({ setShowModal, song }) => {
  const queryClient = useQueryClient();

  const { userId } = useContext(AuthContext);

  const { isLoading, isError, data, error } = useQuery(
    ["getAllPlaylists"],
    () => getAllPlaylists(userId)
  );

  const addToPlaylist = useMutation(addSongToPlaylist, {
    onSuccess: (resp) => {
      playlistUpdated(resp);
    },
  });

  const playlistUpdated = (data) => {
    queryClient.invalidateQueries(["getAllPlaylists"]);
    setShowModal(false);
    toast.success(data);
  };

  return (
    <>
      <ul className="pr-4 px-10 list-disc">
        {data?.map((list) => (
          <li
            className="cursor-pointer"
            key={list._id}
            onClick={addToPlaylist({ songId: song._id, playlistId: list._id })}
          >
            {list.name}
          </li>
        ))}
      </ul>

      <div className="relative pr-4 px-4 ">
        <hr />
      </div>
      <div className="flex items-center justify-start p-6 ">
        <Button
          bg={"mainButtonBg"}
          width={"w-max"}
          radius={"rounded"}
          text={"+ Create new playlist"}
          onClick={() => setShowModal(false)}
        />
      </div>
    </>
  );
};

export default AddToPlaylist;
