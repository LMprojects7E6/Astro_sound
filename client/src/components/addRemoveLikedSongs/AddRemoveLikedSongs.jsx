import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getLikedPlaylists } from "api/playlists";
import Icon from "components/icons";
import React from "react";

const AddRemoveLikedSongs = ({ song }) => {
  const queryClient = useQueryClient();

  const {
    isLoading: isLoadingLikedSongs,
    isError: isErrorLikedSongs,
    data: likedSongs,
    error: likedSongsError,
  } = useQuery(["liked-songs"], getLikedPlaylists);
  console.log(likedSongs);

  // const addToLikedSongs = useMutation(updateUser, {
  //   onSuccess: (resp) => {
  //     userUpdated(resp);
  //   },
  //   onError: (err) => {
  //     toast.error(err.response.data.errorMsg);
  //   },
  // });

  // const userUpdated = (data) => {
  //   queryClient.invalidateQueries(["getEmployees"]);
  //   setShowModal(false);
  //   toast.success(data);
  // };
  // const removeUser = useMutation(deleteUser, {
  //   onSuccess: (resp) => userDeleted(resp),
  // });

  // const userDeleted = (data) => {
  //   const userName = data.first_name;
  //   queryClient.invalidateQueries(["getCustomers"]);
  //   queryClient.invalidateQueries(["getEmployees"]);
  //   setShowModal(false);
  //   toast.success(`${userName} has been deleted`);
  // };

  const isLiked = likedSongs.find((likedSong) => likedSong._id === song._id);

  return (
    <>
      {isLiked ? (
        <span onClick={() => console.log("")}>
          <Icon name={"heartFilled"} size={24} color={"#fff"} />
        </span>
      ) : (
        <Icon name={"heart"} size={24} color={"#fff"} />
      )}
    </>
  );
};

export default AddRemoveLikedSongs;
