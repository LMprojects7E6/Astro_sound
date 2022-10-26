import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePlaylist } from "api/playlists";
import Button from "components/button";

import toast from "react-hot-toast";

const DeletePlaylistModal = ({ setShowModal, playlist }) => {
  const queryClient = useQueryClient();

  const removePlaylist = useMutation(deletePlaylist, {
    onSuccess: () => playlistDeleted(),
    onError: (err) => {
      toast.error(err.response.data.errorMsg);
    },
  });

  const playlistDeleted = () => {
    queryClient.invalidateQueries(["getAllPlaylists"]);
    toast.success(`${playlist.name} has been deleted`);
  };

  return (
    <div className="flex flex-col text-center">
      <p className="text-xl  p-5">
        Are you sure you want to delete {playlist.name} ?
      </p>

      <div className="flex items-center justify-between p-6 ">
        <Button
          bg={"mainButtonBg"}
          width={"w-max"}
          radius={"rounded"}
          text={"Yes"}
          onClick={() => removePlaylist.mutate(playlist._id)}
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
