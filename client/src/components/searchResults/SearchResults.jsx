import useSearchSongs from "hooks/useSearch";
import { useState } from "react";
import Icon from "components/icons";

import ResultContainer from "./ResultContainer";

const SearchResults = ({ setShowModal, songs }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  const searchData = useSearchSongs(value, songs);

  return (
    <>
      <div className=" flex items-center  rounded-lg  bg-white ">
        <span className="p-2">
          <Icon name={"search"} size={22} color={"black"} />
        </span>
        <input
          className="outline-none appearance-none text-black"
          value={value}
          name="searchInput"
          placeholder="Search"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col h-2/3">
        <h5 className=" ml-5 mr-5 text-white font-bold mb-5 mx-2">
          {searchData.length > 0 && value.length >= 3
            ? `Your  search for ${value}`
            : ""}
          {searchData.length === 0 && value.length >= 3
            ? `No results for ${value}`
            : ""}
        </h5>
        <div className="overflow-y-auto h-full">
          {searchData ? (
            searchData.map((song) => {
              return (
                <ResultContainer
                  key={song._id}
                  song={song}
                  setShowModal={setShowModal}
                />
              );
            })
          ) : (
            <h3 className="text-white">asdasd</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
