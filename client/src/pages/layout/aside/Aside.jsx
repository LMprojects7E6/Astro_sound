import Logo from "components/logo";
import Modal from "components/modal";
import CreatePlaylist from "components/playlistModals/createPlaylist";
import { MusicPlayerContext } from "context/MusicPlayerProvider";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Icon from "../../../components/icons/Icons";

const Aside = () => {
  const style =
    "md:px-5 md:py-3 py-5 px-6 md:flex md:gap-x-4 items-center font-semibold text-link px-4 hover:text-white flex flex-col md:flex-row items-center";
  const activeStyle =
    "bg-active hover:text-white flex flex-col items-center text-white";

  const { musicPlayer: musicPlayerSongs, controls } =
    useContext(MusicPlayerContext);

  const songImages = musicPlayerSongs
    ? musicPlayerSongs.map((song) => song.songImage)
    : null;

  return (
    <section className="bg-black flex flex-col justify-between md:w-72">
      <nav className="  text-grey hover:text-grey w-full md:w-44 flex justify-center md:justify-start md:flex-col">
        <ul className="flex md:flex-col ">
          <li className="flex flex-col">
            <div className="hidden md:flex md:justify-center md:my-3">
              <Logo width={"w-14"} />
              <h3 className="text-white flex md:flex-col justify-center">
                Astro Sounds
              </h3>
            </div>

            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? activeStyle + " " + style : style
              }
              exact="true"
            >
              <span>
                <Icon name={"home"} size={22} color={"currentColor"} />
              </span>
              Home
            </NavLink>
          </li>
          <li className="flex-col">
            <NavLink
              to={"/search"}
              className={({ isActive }) =>
                isActive ? activeStyle + " " + style : style
              }
            >
              <span>
                <Icon name={"search"} size={22} color={"currentColor"} />
              </span>
              Search
            </NavLink>
          </li>
          <li className="flex-col">
            <NavLink
              to={"/library"}
              className={({ isActive }) =>
                isActive ? activeStyle + " " + style : style
              }
            >
              <span>
                <Icon name={"collection"} size={22} color={"currentColor"} />
              </span>
              My Library
            </NavLink>
          </li>
          <li className="hidden md:flex">
            <Modal
              className="font-bold"
              modalTitle={"Create PLaylist"}
              icon={"plus"}
              iconSize={22}
              iconColor={"currentColor"}
              text={"Create Playlist"}
            >
              <CreatePlaylist />
            </Modal>
          </li>
          <li className="hidden md:flex ">
            <NavLink
              to={"/likedSongs"}
              className={({ isActive }) =>
                isActive ? activeStyle + " " + style : style
              }
            >
              <span>
                <Icon name={"heartFilled"} size={22} color={"currentColor"} />
              </span>
              Liked Songs
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="md:flex hidden w-full">
        {songImages.length > 0 && (
          <img
            src={songImages[controls.songNumber]}
            alt="photo"
            className="md:w-full md:mb-24 pr-1 md:pr-0"
          />
        )}
      </div>
    </section>
  );
};

export default Aside;
