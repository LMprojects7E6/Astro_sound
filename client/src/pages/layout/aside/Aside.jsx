import Logo from "components/logo";
import Modal from "components/modal";
import CreatePlaylist from "components/playlistModals/createPlaylist";
import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../../../components/icons/Icons";

const Aside = () => {
  const style =
    "px-5 py-3  mobile:py-5 mobile:px-6 flex gap-x-4 items-center text-mobile font-semibold text-link px-4 hover:text-white mobile:flex mobile:flex-col mobile:items-center";
  const activeStyle =
    "bg-active hover:text-white mobile:flex mobile:flex-column mobile:items-center";

  return (
    <nav className="px-2 bg-black text-grey hover:text-grey mobile:w-full w-1/6 mobile:flex mobile:justify-center ">
      <ul className="flex flex-col mobile:flex-row">
        <li className="flex flex-col ">
          <div className="mobile:hidden flex justify-center my-3 pr-16">
            <Logo width={"w-14"} />
            <h3 className="text-white flex flex-col justify-center">
              Astro Sounds
            </h3>
          </div>
          <NavLink
            to={"/"}
            end
            className={({ isActive }) =>
              isActive ? activeStyle + " " + style : style
            }
          >
            <span>
              <Icon name={"home"} size={22} color={"currentColor"} />
            </span>
            Home
          </NavLink>
        </li>
        <li className="mobile:flex-col">
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
        <li className="mobile:flex-col">
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
        <li className="mobile:hidden flex">
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
        <li className="mobile:hidden flex ">
          <NavLink
            to={"/likedsongs"}
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
  );
};

export default Aside;
