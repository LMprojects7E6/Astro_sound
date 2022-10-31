import Button from "components/button";
import SearchBarModal from "components/searchBarModal";
import SearchResults from "components/searchResults";
import { MusicPlayerContext } from "context/MusicPlayerProvider";
import { useContext } from "react";

const ReproduceSearchPlaylist = ({ songsList, listName }) => {
  const { setMusicPlayer } = useContext(MusicPlayerContext);
  const handleClick = () => {
    setMusicPlayer(songsList);
  };
  return (
    <div className=" md:flex items-center md:mt-10 justify-between w-full">
      <div className="  border-2 border-white w-10 h-10 md:pl-3 md:pt-3 md:w-16 md:h-16 my-5 md:my-0 rounded-full bg-purple2 align-center ">
        <Button
          icon={"play"}
          iconSize={36}
          onClick={() => console.log("play")}
        />
      </div>
      <div className="hidden md:flex">
        <SearchBarModal modalTitle={`Search in ${listName}`}>
          <SearchResults songs={songsList} />
        </SearchBarModal>
      </div>
    </div>
  );
};

export default ReproduceSearchPlaylist;
