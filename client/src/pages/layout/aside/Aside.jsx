import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../../../components/icons/Icons";

const Aside = () => {
  const style =
    "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded px-4 hover:text-white";
  const activeStyle = "bg-active hover:text-white";

  return (
    <nav className="px-2 bg-black text-grey hover:text-grey w-1/6">
      <ul className="flex flex-col">
        <li>
          <NavLink
            to={"/index"}
            className={({ isActive }) =>
              isActive ? activeStyle + " " + style : style
            }
            exact
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
            to={"/collection"}
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
          <NavLink
            to={"/collection"}
            className={({ isActive }) =>
              isActive ? activeStyle + " " + style : style
            }
          >
            <span>
              <Icon name={"plus"} size={22} />
            </span>
            Created Playlist
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/collection"}
            className={({ isActive }) =>
              isActive ? activeStyle + " " + style : style
            }
          >
            <span>
              <Icon name={"heartFilled"} size={22} />
            </span>
            Liked Songs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Aside;
