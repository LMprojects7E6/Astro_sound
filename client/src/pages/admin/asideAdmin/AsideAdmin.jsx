import React from 'react'
import Logo from "components/logo";
import Modal from "components/modal";
import CreatePlaylist from "components/playlistModals/createPlaylist";
import { NavLink } from "react-router-dom";
import Icon from "../../../components/icons/Icons";

const AsideAdmin = () => {

    const style =
    "md:px-5 md:py-3 py-5 px-6 md:flex md:gap-x-4 items-center font-semibold text-link px-4 hover:text-white flex flex-col lg:flex-row items-center";
    const activeStyle = "bg-active hover:text-white flex flex-col items-center";

  return (
    <nav className="px-2 bg-black text-grey hover:text-grey w-full md:h-full md:w-1/6 flex justify-center md:justify-start">
        <ul className="flex md:flex-col ">
          <li className="flex flex-col">
            <div className="hidden md:flex md:justify-center md:my-3">
              <Logo width={"w-14"} />
              <h3 className="text-white flex md:flex-col justify-center">Astro Sounds</h3>
            </div>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? activeStyle + " " + style : style
              }
            >
              <span>
                <Icon name={"home"} size={22} color={"currentColor"}/>
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
                <Icon name={"search"} size={22} color={"currentColor"}/>
              </span>
              Search
            </NavLink>
          </li>
          <li className="flex-col">
            <NavLink
              to={"/stadistic"}
              className={({ isActive }) =>
                isActive ? activeStyle + " " + style : style
              }
            >
              <span>
                <Icon name={"collection"} size={22} color={"currentColor"}/>
              </span>
              Stadistics
            </NavLink>
          </li>
        </ul>
      </nav>
    );

}

export default AsideAdmin