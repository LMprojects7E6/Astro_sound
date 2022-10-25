import React, { useState } from "react";
import Icons from "components/icons";
import { useForm } from "react-hook-form";
import Input from "components/input";
import Button from "components/button";
import ErrorParagraph from "components/errorParagraph";

const FormAdmin = ({ mutate }) => {


  const onSubmit = (e) => {
    // e.preventDefault();
    console.log(e)
    console.log(e.target)
    const data = new FormData(e.target);
    console.log(data);
    mutate(data);
  };

  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  // const handleUpload = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("image", image.raw);
  // };



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  return (
    <div className="md:w-full md:h-screen h-full flex justify-center items-center text-white flex-col">
      <div className="md:flex md:text-8xl text-5xl font-bold top-0 absolute mt-16 md:mt-0">
        <h1>
          Upload Songs
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row w-full text-white p-6 mt-16 md:mt-0">
          <div className="flex flex-col w-5/10 px-3 py-2 space-y-1">
            {/* INPUT TITLE */}
            <Input
              className="text-black rounded-lg py-1 pl-2 mt-2"
              label="Title"
              name="title"
              register={register}
              type={"text"}
              pattern={/[a-zA-Z]{1,}/}
              placeholder="Title"
              errors={errors}
              {...register("title", {
                required: true,
                message: "Title required",
                maxLength: 30
              })}
            />
            {errors.title?.type === "required" && (
            <ErrorParagraph className="m-0">This is field required</ErrorParagraph>
            )}
            {errors.title?.type === "pattern" && (
            <ErrorParagraph>Insert a valid title</ErrorParagraph>
            )}
            {errors.title?.type === "maxLength" && (
            <ErrorParagraph>This field requires 30 characters</ErrorParagraph>
            )}
            {/* INPUT ARTIST */}
            <Input
              className="text-black rounded-lg py-1 pl-2"
              label="Artist"
              name="artist"
              type="text"
              pattern={/[a-zA-Z]{1,}/}
              placeholder="Artist"
              register={register}
              required
              errors={errors}
              {...register("artist", {
                required: true,
                message: "Artist name required",
                maxLength: 30
              })}
            />
            {errors.artist?.type === "required" && (
              <ErrorParagraph>This is field required</ErrorParagraph>
            )}
            {errors.artist?.type === "pattern" && (
            <ErrorParagraph>Insert a valid artist</ErrorParagraph>
            )}
            {errors.artist?.type === "maxLength" && (
            <ErrorParagraph>This field requires 30 characters</ErrorParagraph>
            )}
            {/* INPUT ALBUM */}
            <Input
              className="text-black rounded-lg py-1 pl-2"
              label="Album"
              name="album"
              pattern={/[a-zA-Z]{1,}/}
              placeholder="Album"
              register={register}
              errors={errors}
              {...register("album", {
                required: true,
                message: "Album name required",
                maxLength: 30
              })}
            />
            {errors.album?.type === "required" && (
              <ErrorParagraph>This is field required</ErrorParagraph>
            )}
            {errors.album?.type === "pattern" && (
            <ErrorParagraph>Insert a valid album</ErrorParagraph>
            )}
            {errors.album?.type === "maxLength" && (
            <ErrorParagraph>This field requires 30 characters</ErrorParagraph>
            )}
            {/* INPUT GENRE */}
            <Input
              className="text-black rounded-lg py-1 pl-2"
              label="Genre"
              name="genre"
              type="text"
              pattern={/[a-zA-Z]{1,}/}
              placeholder="Genre"
              maxLength={30}
              register={register}
              errors={errors}
              {...register("genre", {
                required: true,
                message: "Genre required",
                maxLength:30
              })}
            />
             {errors.genre?.type === "required" && (
              <ErrorParagraph>This is field required</ErrorParagraph>
            )}
            {errors.genre?.type === "pattern" && (
            <ErrorParagraph>Insert a valid genre</ErrorParagraph>
            )}
            {errors.genre?.type === "maxLength" && (
            <ErrorParagraph>This field requires 30 characters</ErrorParagraph>
            )}
          </div>
          <div className="flex flex-col w-8/12 space-y-1">
            {/* INPUT IMAGE SONG */}
            <div className="flex md:flex-col items-center w-full mt-10 md:mt-8 md:mb-2 justify-evenly " >
              <label
                htmlFor="upload-button"
                className="flex flex-col justify-center items-center text-black bg-white rounded-lg cursor-pointer hover:bg-white w-52 h-52"
              >
                  {image.preview ? (
                    <img
                      src={image.preview}
                      alt="songImage"
                      className="w-full h-full"
                      name="songImage"
                    />
                  ) : (
                    <>
                      <Icons name={"Pencil"} size={52} color={"black"} />
                      <span className="mb-1 mx-2 text-xs md:text-sm">
                        <span className="font-semibold">Click to upload</span>{" "}
                        <span className="hidden md:flex">or drag and drop</span>
                      </span>
                      <span className="hidden md:flex text-xs text-gray-500">
                        PNG or JPG (MAX. 800x 400px)
                      </span>
                    </>
                  )}
                <input
                  id="upload-button"
                  name="songFile"
                  type="file"
                  className="hidden"
                  accept=".jpg, .jpeg, .png"
                  multiple
                  required
                  onChange={handleChange}
                  register={register}
                  errors={errors}
                />
                {errors.songImage?.type === "required" && (
                <ErrorParagraph>This is field required</ErrorParagraph>
                )}
              </label>
            {/* INPUT SONGFILE */}
            </div>
            <div>
            <input
              className="flex w-full text-sm text-white mt-5"
              id="file_input"
              type="file"
              accept=".mp3, .mp4"
              name="songFile"
              required
              register={register}
              errors={errors}
            />
              {errors.songFile?.type === "required" && (
              <ErrorParagraph>This is field required</ErrorParagraph>
            )}
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-around">
          <div>
            <Button
              bg={"mainButtonBg"}
              width={"w-full"}
              radius={"rounded"}
              text={"Cancel"}
              type={"reset"}
            />
          </div>
          <div>
            <Button
              bg={"mainButtonBg"}
              width={"w-full"}
              radius={"rounded"}
              text={"Submit"}
              type={"submit"}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormAdmin;