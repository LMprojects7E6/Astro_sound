import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import ErrorParagraph from "components/errorParagraph";
import Icon from "components/icons/Icons";
import Button from "components/button";
import { useState } from "react";
import { createNewPlaylist } from "api/playlists";
import { useRef } from "react";
import { DotSpinner } from "@uiball/loaders";

const CreatePlaylist = ({ setShowModal }) => {
  const formRef = useRef(null);
  const [uploadedPhoto, setUploadedPhoto] = useState();
  const [photoPreview, setPhotoPreview] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  //POST createPlaylist
  const {mutate , isLoading} = useMutation(createNewPlaylist, {
    onSuccess: (resp) => {
      playlistCreated(resp);
    },
    onError: (err) => {
      toast.error(err.response.data.errorMsg);
    },
  });

  if(isLoading){
    return     (<div className="flex w-60 h-60 justify-center items-center flex-col">
    <DotSpinner size={100} speed={0.9} color="purple" />
    <p className="text-2xl mt-5 text-white">LOADING...</p>
  </div>)
  }

  const playlistCreated = (data) => {
    queryClient.invalidateQueries(["playlists"]);
    setShowModal(false);
    toast.success(data.message);
  };

  const onSubmit = () => {
    const dataForm = new FormData(formRef.current)
    mutate(dataForm);
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setUploadedPhoto(file);
    setPhotoPreview(URL.createObjectURL(file));
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
            {photoPreview ? (
              <img
                className="w-60 "
                alt={uploadedPhoto?.name}
                src={photoPreview}
              />
            ) : (
              <div className="flex flex-col justify-center items-center p-5  ">
                <Icon name={"addImage"} size={50} color={"white"} />
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
                validate: {
                  lessThan5MB: () =>
                    uploadedPhoto?.size < 5000000 || "Max 10MB",
                },
                accept: "image/png, image/jpg, image/jpeg",
              })}
              type="file"
              onChange={handleUpload}
              name="playListImage"
              id="playListImage"
              accept="image/png, image/jpeg"
              className="hidden "
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
              className="bg-grey4 w-full my-2 pl-5 pr-5 py-2 placeholder-white outline-none"
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
              className="bg-grey4 w-full pl-5 pr-5 py-2 h-28 resize-none rounded  placeholder-white outline-none"
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

export default CreatePlaylist;
