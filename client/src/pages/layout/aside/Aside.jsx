import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../../../components/icons/Icons";

const Aside = () => {
  const style =
    "h-10 flex gap-x-4 lg:items-center text-sm font-semibold text-link px-4 hover:text-white";
  const activeStyle = "bg-active hover:text-white";


    return (
      <nav className="px-2 bg-black text-grey hover:text-grey lg:w-2/6 tablet:bg-white mobile:flex sm:w-full">
        <ul className="flex lg:flex-col sm:flex-row sm:justify-center">
          <li className="sm:flex sm:flex-col">
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
              <p className="">Home</p>
            </NavLink>
          </li>
          <li className="sm:flex-col">
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
          <li className="sm:flex-col">
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
          <li className="sm:hidden lg:flex">
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
          <li className="sm:hidden lg:flex">
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
}

export default Aside;
