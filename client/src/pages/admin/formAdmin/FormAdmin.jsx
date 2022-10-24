import React, { useState } from "react";
import Icons from "components/icons";
import { useForm } from "react-hook-form";
import Input from "components/input";
import Button from "components/button";
import ErrorParagraph from "components/errorParagraph";
import toast from "react-hot-toast";

const FormAdmin = ({ mutate }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    const data = new FormData(e.target);
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
      <div className="">
        <h1 className="md:text-8xl text-5xl font-bold border-none">
          {" "}
          Upload Songs
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row p-6 w-full text-black">
          <div className="flex flex-col p-6 w-5/10 space-y-3">
            {/* INPUT TITLE */}
            <Input
              className="text-black rounded-lg py-1 pl-2 mt-2"
              label="Title"
              name="title"
              register={register}
              type={"text"}
              pattern={/[a-zA-Z]{1,}/}
              placeholder="Title"
              // errors={errors}
              {...register("title", {
                required: true,
                message: "Title required",
                maxLength: 30,
              })}
            />
            {errors.title?.type === "required" && (
              <ErrorParagraph>This is field required</ErrorParagraph>
            )}
            {errors.title?.type === "pattern" && (
              <ErrorParagraph>Insert a valid title</ErrorParagraph>
            )}
            {/* INPUT ARTIST */}
            <Input
              className="text-black rounded-lg py-1 pl-2"
              label={"Artist"}
              name={"artist"}
              type={"text"}
              pattern={/[a-zA-Z]{1,}/}
              placeholder="Artist"
              maxLength={30}
              register={register}
              required
              errors={errors}
              {...register("artist", {
                required: true,
                message: "Artist name required",
              })}
            />
            {errors.artist && errors.artist.type === "required" && (
              <ErrorParagraph>This is field required</ErrorParagraph>
            )}
            {/* INPUT ALBUM */}
            <Input
              className="text-black rounded-lg py-1 pl-2"
              label={"Album"}
              name={"album"}
              pattern={/[a-zA-Z]{1,}/}
              placeholder="Album"
              maxLength={30}
              register={register}
              errors={errors}
              required
              {...register("album", {
                required: true,
                message: "Album name required",
              })}
            />
            {errors.album && errors.album.type === "required" && (
              <ErrorParagraph>This is field required</ErrorParagraph>
            )}
            {/* INPUT GENRE */}
            Genre:
            <input
              className="text-black rounded-lg py-1 pl-2"
              label={"Genre"}
              name={"genre"}
              pattern={/[a-zA-Z]{1,}/}
              placeholder="Genre"
              maxLength={30}
              {...register("genre", {
                required: true,
                message: "Genre required",
              })}
            />
            {errors.genre && errors.genre.type === "required" && (
              <ErrorParagraph>This is field required</ErrorParagraph>
            )}
          </div>
          <div className="flex flex-col p-6 w-8/12 space-y-5">
            {/* INPUT IMAGE SONG */}
            Song Image:
            <div className="flex  items-center w-full mt-2 justify-start">
              <label
                htmlFor="upload-button"
                className="flex flex-col justify-center items-center text-black bg-white rounded-lg border-2 border-gray-300 cursor-pointer hover:bg-white  w-52 h-52"
              >
                {image.preview ? (
                  <img
                    src={image.preview}
                    alt="dummy"
                    className="w-full h-full"
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
                  type="file"
                  className="hidden"
                  accept=".jpg, .jpeg, .png"
                  name="songImage"
                  multiple
                  onChange={handleChange}
                />
              </label>
            </div>
            <Input
              className="flex w-full text-sm text-gray-900 bg-white text-black rounded-lg cursor-pointer focus:outline-none mt-4"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
              accept=".mp3, .mp4"
              name="songFile"
              required
              register={register}
              errors={errors}
            />
            {errors.songFile && errors.songFile.type === "required" && (
              <ErrorParagraph>This is field required</ErrorParagraph>
            )}
          </div>
        </div>
        <div className=" flex items-center justify-around pb-2 mt-3">
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
