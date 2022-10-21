import Carrousel from "components/carrousel";
import DashboardSection from "components/dashboardSection";
import Dropdown from "components/dropdown";

import toast from "react-hot-toast";
import { getThreeSongs } from "api/songs";
import { useQuery } from "@tanstack/react-query";
import useSearchSongs from "hooks/useSearch";
import { useState } from "react";
import Icon from "components/icons/Icons";
import SongsContainer from "components/songsContainer";

const Search = () => {
  const {
    data: threeSongs,
    isLoading: isLoadingSong,
    isError: isSongError,
    error: songError,
  } = useQuery(["threeSongs"], getThreeSongs);

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  const searchData = useSearchSongs(value);
  // searchData.map((s) => console.log(s));

  if (isLoadingSong) {
    return <p>Loading...</p>;
  }
  if (isSongError) {
    toast.error(songError);
  }

  return (
    <DashboardSection>
      <Dropdown />
      <div className=" m-10 rounded-lg  flex bg-white md:max-w-sm">
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
      <SongsContainer searchedSongs={searchData} value={value} />
      <Carrousel threeSongs={threeSongs}></Carrousel>
    </DashboardSection>
  );
};

export default Search;
