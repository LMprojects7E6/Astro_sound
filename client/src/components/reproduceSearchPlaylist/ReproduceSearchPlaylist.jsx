import Button from "components/button";
import SearchBarModal from "components/searchBarModal";
import SearchResults from "components/searchResults";

const ReproduceSearchPlaylist = ({ songsList, listName }) => {
  return (
    <div className="hidden md:flex items-center mt-10 justify-between w-full">
      <div className="  border-2 border-white pl-3 pt-3 w-16 h-16      rounded-full bg-purple2 align-center ">
        <Button
          icon={"play"}
          iconSize={36}
          onClick={() => console.log("play")}
        />
      </div>
      <SearchBarModal modalTitle={`Search in ${listName}`}>
        <SearchResults songs={songsList} />
      </SearchBarModal>
    </div>
  );
};

export default ReproduceSearchPlaylist;
