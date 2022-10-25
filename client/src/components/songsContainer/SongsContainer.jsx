import PlaylistCard from "components/playlistCard";
import SongCard from "components/songCard";

const SongsContainer = ({ searchedSongs, value }) => {
  return (
    <section className="md:my-10 my-5">
      <h2 className="text-2xl m-2 text-white font-bold mb-5 mx-2">
        {searchedSongs.length > 0 ? `Your  search for ${value}` : ""}
      </h2>

      <div
        className={`${
          searchedSongs.length > 1
            ? " flex flex-col md:grid lg:grid-cols-4 md:grid-cols-3 md:gap-5   overflow-x-auto "
            : "flex flex-col"
        }`}
      >
        {searchedSongs.map((song) => {
          return <SongCard key={song._id} song={song} />;
        })}
      </div>
    </section>
  );
};

export default SongsContainer;
