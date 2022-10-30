import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeSearchedSongs } from "api/songs";
import SongCard from "components/songCard";
import toast from "react-hot-toast";

const SearchedSongsContainer = ({ searchedSongs, title }) => {
  const queryClient = useQueryClient();
  const clearSearchedSong = useMutation(removeSearchedSongs, {
    onSuccess: () => {
      queryClient.invalidateQueries(["searchedSongs"]);
    },
    onError: (err) => {
      toast.error(err.response.data.errorMsg);
    },
  });

  return (
    <section className="md:my-10 my-5">
      <h4 className="text-2xl m-2 text-white font-bold mb-2 mx-2">{title}</h4>

      <div
        className={`${
          searchedSongs.length > 1
            ? " flex flex-col md:grid lg:grid-cols-4 md:grid-cols-3 md:gap-5  overflow-x-auto "
            : "flex flex-col"
        }`}
      >
        {searchedSongs.map((song) => {
          return <SongCard key={song._id} song={song} />;
        })}
      </div>
      <div
        className={`${
          searchedSongs.length > 0
            ? " md:text-2xl mt-2 text-white mb-5 mx-2 cursor-pointer"
            : "hidden"
        }`}
        onClick={() => clearSearchedSong.mutate()}
      >
        Clear search history
      </div>
    </section>
  );
};

export default SearchedSongsContainer;
