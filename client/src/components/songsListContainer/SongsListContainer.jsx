import AddRemoveLikedSongs from "components/addRemoveLikedSongs";
import AddToPlaylist from "components/playlistModals/addToPlaylist";
import SettingsDropDown from "components/settingsDropDown";
import SongCard from "components/songCard";
import Modal from "components/modal/Modal";
import React from "react";
import { useContext } from "react";
import { MusicPlayerContext } from "context/MusicPlayerProvider";
import DeleteFromPlaylist from "components/playlistModals/deleteFromPlaylist";
import { useLocation } from "react-router-dom";

const SongsListContainer = ({ songs, playlist }) => {
  const location = useLocation();
  const [, page] = location.pathname.split("/");

  const thStyle = "border-b-2 border-white text-left ";
  const tdStyle = "";
  const { setMusicPlayer } = useContext(MusicPlayerContext);

  const handleClick = (song) => {
    setMusicPlayer([song]);
  };
  return (
    <>
      <div className="md:hidden ">
        {songs.map((song) => (
          <SongCard key={song._id} song={song} playlist={playlist} />
        ))}
      </div>
      <div className="text-white hidden md:flex ">
        <table className=" table-auto  w-full mt-5">
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
              <tr
                key={song._id}
                className="hover:bg-purple1   transition duration-75 ease-in-out cursor-pointer"
                onClick={() => handleClick(song)}
              >
                <td className={`${tdStyle}`}>
                  <div className=" flex flex-row  items-center">
                    <div
                      className=" z-0 m-2 w-16 h-16  bg-cover bg-no-repeat bg-center "
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
                    {page !== "likedSongs" ? (
                      <SettingsDropDown key={song.title} song={song}>
                        <Modal
                          background={"bg-grey5"}
                          modalTitle={"Add to playlist"}
                          text={"Add to playlist"}
                        >
                          <AddToPlaylist song={song} />
                        </Modal>
                        <Modal
                          background={"bg-grey5"}
                          modalTitle={"Remove from playlist"}
                          text={"Remove"}
                        >
                          <DeleteFromPlaylist song={song} playlist={playlist} />
                        </Modal>
                      </SettingsDropDown>
                    ) : (
                      <SettingsDropDown key={song.title} song={song}>
                        <Modal
                          background={"bg-grey5"}
                          modalTitle={"Add to playlist"}
                          text={"Add to playlist"}
                        >
                          <AddToPlaylist song={song} />
                        </Modal>
                      </SettingsDropDown>
                    )}
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
