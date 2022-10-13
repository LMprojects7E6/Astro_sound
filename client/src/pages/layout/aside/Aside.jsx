import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "components/icons/Icons";
import Modal from "components/modal/Modal";
import DeletePlaylist from "components/playlistModals/deletePlaylist";

const Aside = () => {
  const style =
    "h-10 flex gap-x-4 items-center text-sm font-semibold text-NavLink rounded px-4 hover:text-white";
  const activeStyle = "bg-active text-white";

  return (
    <nav className="px-2 mt-4">
      <ul className="flex flex-col">
        <li>
          <NavLink
            to={"/home"}
            className={({ isActive }) =>
              isActive ? activeStyle + " " + style : style
            }
          >
            <span>
              <Icon name={"home"} size={22} />
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
              <Icon name={"search"} size={22} />
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
              <Icon name={"collection"} size={22} />
            </span>
            My Library
          </NavLink>
        </li>
        <li>
          <Modal modalTitle={"Delete Playlist"}>
            <DeletePlaylist />
          </Modal>
        </li>
      </ul>
    </nav>
  );
};

export default Aside;
