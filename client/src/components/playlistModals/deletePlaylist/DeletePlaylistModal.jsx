import { useMutation, useQueryClient } from "@tanstack/react-query";
import Button from "components/button";
import React from "react";
import toast from "react-hot-toast";

const DeletePlaylistModal = ({ setShowModal }) => {
  const queryClient = useQueryClient();

  // const removePlaylist = useMutation(deletePlaylist, {
  //   onSuccess: (resp) => playlistDeleted(resp),
  // });

  // const playlistDeleted = (data) => {
  //   const playlistName = data.first_name;
  //   queryClient.invalidateQueries(["getCustomers"]);
  //   queryClient.invalidateQueries(["getEmployees"]);
  //   setShowModal(false);
  //   toast.success(`${playlistName} has been deleted`);
  // };
  return (
    <div className="flex flex-col text-center">
      <p className="text-xl  p-5">
        Are you sure you want to delete {"PlaylistName"} ?
      </p>

      <div className="flex items-center justify-between p-6 ">
        <Button
          bg={"mainButtonBg"}
          width={"w-max"}
          radius={"rounded"}
          text={"Yes"}
          // onClick={() => removePlaylist.mutate(playlist._id)}
        />
        <Button
          bg={"mainButtonBg"}
          width={"w-max"}
          radius={"rounded"}
          text={"Cancel"}
          onClick={() => setShowModal(false)}
        />
      </div>
    </div>
  );
};

export default DeletePlaylistModal;
