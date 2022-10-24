import DashboardSection from "components/dashboardSection";
import Dropdown from "components/dropdown";

import useSearchSongs from "hooks/useSearch";
import { useState } from "react";
import Icon from "components/icons/Icons";
import SongsContainer from "components/songsContainer";
import GenreSection from "components/genreSection";
import AddToPlaylist from "components/playlistModals/addToPlaylist";
import SongDropDown from "components/songDropDown";

const Search = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  const searchData = useSearchSongs(value);

  return (
    <DashboardSection>
      <Dropdown />
      <div className="w-full content-center ">
        <div className=" flex items-center m-10 rounded-lg  lg:ml-80 bg-white  md:max-w-sm ">
          <span className="p-2">
            <Icon name={"search"} size={22} color={"currentColor"} />
          </span>
          <input
            className="outline-none appearance-none"
            value={value}
            name="searchInput"
            placeholder="Search"
            onChange={handleChange}
          />
        </div>
      </div>
      <GenreSection />
      <SongsContainer searchedSongs={searchData} value={value} />
    </DashboardSection>
  );
};

export default Search;
