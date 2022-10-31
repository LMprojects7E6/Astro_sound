import phpApi from "./phpApi";

//!POST SONG CLOUDINARY
export const getGenres = async () => {
  const response = await phpApi.get("/genres");
  return response.data;
};

//!GET SEARCHED SONGS
export const getGenresCount = async () => {
  const response = await phpApi.get("/genresCount");
  return response.data;
};
