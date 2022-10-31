import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeSongFromPlaylist } from "api/songs";
import Button from "components/button";

import toast from "react-hot-toast";

const DeleteFromPlaylist = ({ setShowModal, playlist, song }) => {
  const queryClient = useQueryClient();

  const removeFromPlaylist = useMutation(removeSongFromPlaylist, {
    onSuccess: () => songDeletedFromPlaylist(),
    onError: (err) => {
      toast.error(err.response.data.errorMsg);
    },
  });

  const songDeletedFromPlaylist = () => {
    queryClient.invalidateQueries([`list-${playlist._id}`]);
    toast.success(`${song.title}  removed from playlist`);
  };

  const handelClick = () => {
    removeFromPlaylist.mutate({
      songId: song._id,
      playlistId: playlist._id,
    });
    setShowModal(false);
  };

  return (
    <div className="flex flex-col text-center">
      <p className="text-xl  p-5">
        Are you sure you want to delete {song.title} from {playlist.name}?
      </p>

      <div className="flex items-center justify-around p-6 ">
        <Button
          bg={"mainButtonBg"}
          width={"w-max"}
          radius={"rounded"}
          text={"Yes"}
          onClick={() => handelClick()}
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

export default DeleteFromPlaylist;
