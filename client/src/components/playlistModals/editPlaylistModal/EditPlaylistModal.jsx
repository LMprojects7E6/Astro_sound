import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, Controller } from "react-hook-form";
import ErrorParagraph from "components/errorParagraph";
import Icon from "components/icons/Icons";
import Button from "components/button";
import { updatePlaylist } from "api/playlists";
import { useRef } from "react";
import { convertFormData } from "utils/convertFormData";

const EditPlaylistModal = ({ setShowModal, playlist }) => {
  const { _id, name, description, playListImage } = playlist;

  const formRef = useRef(null);
  const inputFileRef = useRef(null);

  let [editName, setEditName] = useState(name);
  let [editDescription, setEditDescription] = useState(description);
  let [editImage, setEditImage] = useState(playListImage);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  //PUT updatePlaylist
  const editPlaylist = useMutation(updatePlaylist, {
    onSuccess: (resp) => {
      console.log(resp);
      playlistUpdated(resp);
    },
    onError: (err) => {
      toast.error(err.response.data.errorMsg);
    },
  });

  const playlistUpdated = (data) => {
    queryClient.invalidateQueries(["getAllPlaylists"]);
    setShowModal(false);
    toast.success(data.message);
  };

  const onSubmit = () => {
    const dataForm = new FormData(formRef.current);
    editPlaylist.mutate(_id, dataForm);
  };

  const handleUpload = (e) => {
    const profilePhoto = e.target.files[0];
    setEditImage(URL.createObjectURL(profilePhoto));
  };

  return (
    <div>
      <form
        className="grid md:grid-cols-2 md:gap-1 p-5"
        onSubmit={handleSubmit(onSubmit)}
        ref={formRef}
      >
        <div className="flex justify-center items-center ">
          <label htmlFor="playListImage" className="bg-grey3 rounded">
            {editImage ? (
              <img className="w-60 " alt={editImage?.name} src={editImage} />
            ) : (
              <div className="flex flex-col justify-center items-center p-5  ">
                <Icon name={"addImage"} size={50} />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  PNG or JPG (MAX. 10MB)
                </p>
              </div>
            )}

            <input
              {...register("playListImage", {
                required: {
                  value: false,
                  message: "Image is required.",
                },
                // validate: {
                //   lessThan5MB: () => uploadedPhoto?.size < 5000000 || "Max 5MB",
                // },
                accept: "image/png, image/jpg, image/jpeg",
              })}
              type="file"
              onChange={handleUpload}
              ref={inputFileRef}
              name="playListImage"
              id="playListImage"
              accept="image/png, image/jpeg"
              className="hidden"
            />
            {errors.playListImage && (
              <ErrorParagraph>{errors.playListImage.message}</ErrorParagraph>
            )}
          </label>
        </div>
        <div className="p-5 flex flex-col justify-center items-center w-full ">
          <label htmlFor="playListName" className="bg-grey4 rounded">
            <input
              {...register("playListName", {
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
              name="playListName"
              id="playListName"
              className="bg-grey4 w-full my-2 pl-5 pr-5 py-2 placeholder-white"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
            {errors.playListName && (
              <ErrorParagraph>{errors.playListName.message}</ErrorParagraph>
            )}
          </label>
          <label
            htmlFor="playListDescription"
            className="bg-grey4 rounded my-2 w-full"
          >
            <textarea
              {...register("playListDescription", {
                maxLength: {
                  value: 100,
                  message: "Max length exceeded ",
                },
              })}
              type="text"
              placeholder="Playlist Description"
              name="playListDescription"
              id="playListDescription"
              className="bg-grey4 w-full pl-5 pr-5 py-2 h-28 resize-none rounded  placeholder-white"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />
            {errors.playListDescription && (
              <ErrorParagraph>
                {errors.playListDescription.message}
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
