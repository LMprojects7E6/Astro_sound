import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, Controller } from "react-hook-form";
import ErrorParagraph from "components/errorParagraph";
import Icon from "components/icons/Icons";
import Button from "components/button";
import { updateMyPlaylist } from "api/playlists";

const EditPlaylistModal = ({ setShowModal, playlist }) => {
  const { _id, name, description } = playlist;

  const initialFormState = {
    PlaylistName: name,
    PlaylistDescription: description,
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: initialFormState });
  setValue("name", name);
  setValue("username", description);

  const queryClient = useQueryClient();

  //PUT updatePlaylist
  const playlistUpdated = useMutation(updateMyPlaylist, {
    onSuccess: (resp) => {
      console.log(resp);
      updatePlaylist(resp);
    },
    onError: (err) => {
      toast.error(err.response.data.errorMsg);
    },
  });

  const updatePlaylist = (data) => {
    queryClient.invalidateQueries(["getAllPlaylists"]);
    setShowModal(false);
    toast.success(data.message);
  };

  const onSubmit = (data) => {
    playlistUpdated.mutate(_id);
    setShowModal(false);
  };

  const handleUpload = (e) => {
    console.log(e.target.files);
  };

  return (
    <div>
      <form
        className="grid md:grid-cols-2 md:gap-1 p-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="p-5 flex flex-col justify-center items-center w-full ">
          <label htmlFor="PlaylistName" className="bg-grey4 rounded">
            <input
              {...register("PlaylistName", {
                required: {
                  value: true,
                  message: "Required name.",
                },
                minLength: {
                  value: 5,
                  message: "Min length 5 characters",
                },
                maxLength: {
                  value: 30,
                  message: "Max length exceeded ",
                },
              })}
              type="text"
              placeholder="Playlist Name"
              name="PlaylistName"
              id="PlaylistName"
              className="bg-grey4 w-full my-2 pl-5 pr-5 py-2 placeholder-white"
            />
            {errors.PlaylistName && (
              <ErrorParagraph>{errors.PlaylistName.message}</ErrorParagraph>
            )}
          </label>
          <label
            htmlFor="PlaylistDescription"
            className="bg-grey4 rounded my-2 w-full"
          >
            <textarea
              {...register("PlaylistDescription", {
                maxLength: {
                  value: 100,
                  message: "Max length exceeded ",
                },
              })}
              type="text"
              placeholder="Playlist Description"
              name="PlaylistDescription"
              id="PlaylistDescription"
              className="bg-grey4 w-full pl-5 pr-5 py-2 h-28 resize-none rounded  placeholder-white"
            />
            {errors.PlaylistDescription && (
              <ErrorParagraph>
                {errors.PlaylistDescription.message}
              </ErrorParagraph>
            )}
          </label>
          <Button
            bg={"mainButtonBg"}
            width={"w-full"}
            radius={"rounded"}
            text={"Save"}
            type={"submit"}
          />
        </div>
      </form>
    </div>
  );
};

export default EditPlaylistModal;
