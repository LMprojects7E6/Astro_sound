import AddRemoveLikedSongs from "components/addRemoveLikedSongs";
import AddToPlaylist from "components/playlistModals/addToPlaylist";
import SettingsDropDown from "components/settingsDropDown";
import SongCard from "components/songCard";
import Modal from "components/modal/Modal";
import React from "react";

const SongsListContainer = ({ songs }) => {
  const thStyle = "border-b-2 border-white  ";
  const tdStyle = "";
  return (
    <>
      <div className="md:hidden ">
        {songs.map((song) => (
          <SongCard key={song._id} song={song} />
        ))}
      </div>
      <div className="text-white hidden md:flex ">
        <table className=" table-auto  min-w-full mt-5">
          <thead>
            <tr>
              <th className={`${thStyle}`}>Title</th>
              <th className={`${thStyle}`}>Album</th>
              <th className={`${thStyle}`}></th>
              <th className={`${thStyle}`}></th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => (
              <tr key={song._id}>
                <td className={`${tdStyle}`}>
                  <div className=" flex flex-row  items-center">
                    <div
                      className=" z-0 m-2 w-16 h-16  bg-cover bg-no-repeat bg-center   "
                      style={{ backgroundImage: `url(${song.songImage})` }}
                    ></div>
                    <div className=" grow flex flex-col justify-between  ">
                      <h5 className=" font-bold tracking-tight">
                        {song.title}
                      </h5>
                      <p>{song.artist}</p>
                    </div>
                  </div>
                </td>
                <td className={`${tdStyle}`}>
                  <div>{song.album}</div>
                </td>
                <td className={`${tdStyle} relative`}>
                  <AddRemoveLikedSongs song={song} />
                </td>
                <td className={`${tdStyle} relative mb-7`}>
                  <div className="absolute  bottom-5 ">
                    <SettingsDropDown key={song.title} song={song}>
                      <Modal
                        background={"bg-grey5"}
                        modalTitle={"Add to playlist"}
                        text={"Add to playlist"}
                      >
                        <AddToPlaylist song={song} />
                      </Modal>
                    </SettingsDropDown>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SongsListContainer;
