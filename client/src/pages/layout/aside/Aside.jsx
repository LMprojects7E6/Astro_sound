import Modal from "components/modal";
import CreatePlaylist from "components/playlistModals/createPlaylist";
import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../../../components/icons/Icons";

const Aside = () => {
  const style =
    "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded px-4 hover:text-white";
  const activeStyle = "text-white";

  return (
    <nav className="px-2 bg-black text-grey hover:text-grey w-1/6">
      <ul className="flex flex-col">
        <li>
          <NavLink
            to={""}
            end
            className={({ isActive }) =>
              isActive ? activeStyle + " " + style : style
            }
          >
            <span>
              <Icon name={"home"} size={24} color={"currentColor"} />
            </span>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/search"}
            className={({ isActive }) =>
              isActive ? activeStyle + " " + style : style
            }
          >
            <span>
              <Icon name={"search"} size={24} color={"currentColor"} />
            </span>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/library"}
            className={({ isActive }) =>
              isActive ? activeStyle + " " + style : style
            }
          >
            <span>
              <Icon name={"collection"} size={24} color={"currentColor"} />
            </span>
            My Library
          </NavLink>
        </li>
        <li>
          <Modal
            modalTitle={"Create PLaylist"}
            icon={"plus"}
            iconSize={30}
            iconColor={"currentColor"}
            text={"Create Playlist"}
          >
            <CreatePlaylist />
          </Modal>
        </li>
        <li>
          <NavLink
            to={"/library"}
            className={({ isActive }) =>
              isActive ? activeStyle + " " + style : style
            }
          >
            <span>
              <Icon name={"heartFilled"} size={24} color={"currentColor"} />
            </span>
            Liked Songs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Aside;
