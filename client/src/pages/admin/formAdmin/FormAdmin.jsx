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
      <div className="md:w-full md:h-screen h-full flex items-center text-white flex-col overflow-auto">
        <div className="md:flex md:text-8xl text-5xl font-bold mt-16 md:mt-4">
          <h1>Upload Songs</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
          <div className="flex flex-row w-full md:px-6 md:mt-5">
            <div className="flex flex-col w-5/10 px-3 py-2 space-y-1 text-black">
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
                  maxLength: 30,
                })}
              />
              {errors.title?.type === "required" && (
                <ErrorParagraph className="m-0">
                  This is field required
                </ErrorParagraph>
              )}
              {errors.title?.type === "pattern" && (
                <ErrorParagraph>Insert a valid title</ErrorParagraph>
              )}
              {errors.title?.type === "maxLength" && (
                <ErrorParagraph>
                  This field requires 30 characters
                </ErrorParagraph>
              )}
              {/* INPUT ARTIST */}
              <Input
                className="rounded-lg py-1 pl-2"
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
                  maxLength: 30,
                })}
              />
              {errors.artist?.type === "required" && (
                <ErrorParagraph>This is field required</ErrorParagraph>
              )}
              {errors.artist?.type === "pattern" && (
                <ErrorParagraph>Insert a valid artist</ErrorParagraph>
              )}
              {errors.artist?.type === "maxLength" && (
                <ErrorParagraph>
                  This field requires 30 characters
                </ErrorParagraph>
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
                  maxLength: 30,
                })}
              />
              {errors.album?.type === "required" && (
                <ErrorParagraph>This is field required</ErrorParagraph>
              )}
              {errors.album?.type === "pattern" && (
                <ErrorParagraph>Insert a valid album</ErrorParagraph>
              )}
              {errors.album?.type === "maxLength" && (
                <ErrorParagraph>
                  This field requires 30 characters
                </ErrorParagraph>
              )}
              {/* INPUT GENRE */}
              <div className="flex flex-col">
                <label className="pl-1">Genre</label>
                <select
                  className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-1"
                  name="genre"
                >
                  <option value="electronic">Dance / Electronic</option>
                  <option value="jazz">Jazz</option>
                  <option value="rap">Rap</option>
                  <option value="reggaeton">Reggaeton</option>
                  <option value="rock">Rock</option>
                  <option value="pop">Pop</option>
                  <option value="soul">Soul</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col w-8/12 space-y-4">
              {/* INPUT IMAGE SONG */}
              <div className="flex flex-col md:flex-col items-center w-full mt-10 md:mt-8 md:mb-2 justify-evenly">
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