import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePlaylist } from "api/playlists";
import Button from "components/button";

import toast from "react-hot-toast";

const DeletePlaylistModal = ({ setShowModal, playlist }) => {
  const { name, _id } = playlist;
  const queryClient = useQueryClient();

  const removePlaylist = useMutation(deletePlaylist, {
    onSuccess: () => playlistDeleted(),
    onError: (err) => {
      toast.error(err.response.data.errorMsg);
    },
  });

  const playlistDeleted = () => {
    queryClient.invalidateQueries(["playlists"]);
    toast.success(`${name} has been deleted`);
  };

  return (
    <div className="flex flex-col text-center">
      <p className="text-xl  p-5">Are you sure you want to delete {name} ?</p>

      <div className="flex items-center justify-around p-6 ">
        <Button
          bg={"mainButtonBg"}
          width={"w-max"}
          radius={"rounded"}
          text={"Yes"}
          onClick={() => {
            removePlaylist.mutate(_id);
            setShowModal(false);
          }}
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
