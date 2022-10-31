import React from "react";
import Logo from "components/logo";
import Icon from "../../../components/icons/Icons";

const AsideAdmin = ({ setPage, page }) => {
  console.log(page);
  const style =
    "md:px-5 md:py-3 py-5 px-6 md:flex md:gap-x-4 items-center font-semibold text-link px-4 hover:text-white flex flex-col lg:flex-row items-center cursor-pointer";
  const activeStyle =
    "bg-active text-white hover:text-white flex flex-col items-center";

  return (
    <nav className="px-2 bg-black text-grey hover:text-grey w-full md:h-full md:w-1/6 md:flex justify-center md:justify-start absolute md:relative">
      <ul className="flex md:flex-col ">
        <li className="flex flex-col">
          <div className="hidden md:flex md:justify-center md:my-3">
            <Logo width={"w-14"} />
            <h3 className="text-white flex md:flex-col justify-center">
              Astro Sounds
            </h3>
          </div>
          <div
            className={page === "home" ? activeStyle + " " + style : style}
            onClick={() => setPage("home")}
          >
            <span>
              <Icon name={"home"} size={22} color={"currentColor"} />
            </span>
            Home
          </div>
        </li>
        <li className="flex-col">
          <div
            className={page === "search" ? activeStyle + " " + style : style}
            onClick={() => setPage("search")}
          >
            <span>
              <Icon name={"search"} size={22} color={"currentColor"} />
            </span>
            Search
          </div>
        </li>
        <li className="flex-col">
          <div
            className={
              page === "statistics" ? activeStyle + " " + style : style
            }
            onClick={() => setPage("statistics")}
          >
            <span>
              <Icon name={"collection"} size={22} color={"currentColor"} />
            </span>
            Statistics
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default AsideAdmin;
