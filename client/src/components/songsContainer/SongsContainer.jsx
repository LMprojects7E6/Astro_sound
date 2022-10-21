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
          searchedSongs.length > 0
            ? " flex flex-col md:grid md:grid-cols-5 md:grid-cols-3 md:gap-5 md:gap-6  overflow-x-auto md:p-5"
            : "flex flex-col"
        }`}
      >
        {searchedSongs.map((song) => {
          console.log(song);
          return (
            <SongCard
              key={song._id}
              album={song.album}
              artist={song.artist}
              songFile={song.songImage}
              songImage={song.songImage}
              title={song.title}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SongsContainer;
