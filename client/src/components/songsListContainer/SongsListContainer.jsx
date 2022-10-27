import AddRemoveLikedSongs from "components/addRemoveLikedSongs";
import React from "react";

const SongsListContainer = ({ songs }) => {
  const thStyle =
    " items-center md:w-min-full border-b-2  text-head text-left  font-semibold text-g uppercase ";
  const tdStyle = "px-5 py-5  text-sm";
  return (
    <div className="flex items-center text-white m-10">
      <table className=" table-auto md:min-w-full leading-normal m-10">
        <thead>
          <tr>
            <th className={`${thStyle}`}></th>
            <th className={`${thStyle}`}>Title</th>
            <th className={`${thStyle}`}>Artist</th>
            <th className={`${thStyle}`}>Album</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <tr key={song._id}>
              <td className={`${tdStyle}`}>
                <AddRemoveLikedSongs song={song} />
              </td>
              <td className={`${tdStyle}`}>
                <div className="flex items-center ">{song.title}</div>
              </td>
              <td>
                <div className="flex items-center ">{song.album}</div>
              </td>
              <td className={`${tdStyle}`}>
                <div className="flex items-center ">{song.artist}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SongsListContainer;
