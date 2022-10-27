import phpApi from "./phpApi";

//!POST SONG CLOUDINARY
export const getGenres = async () => {
  const response = await phpApi.get("/genres");
  return response.data;
};

//!GET SEARCHED SONGS
export const getCount = async () => {
  const response = await phpApi.get("/genreCount");
  return response.data;
};
