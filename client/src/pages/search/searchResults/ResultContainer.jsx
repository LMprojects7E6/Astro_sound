import AddRemoveLikedSongs from "components/addRemoveLikedSongs";

const ResultContainer = ({ setShowModal, song }) => {
  const handelClick = () => {
    console.log("play");
    setShowModal(false);
  };
  return (
    <div
      className="cursor-pointer flex flex-row ml-5 mr-5  border-2 border-black space-around  items-center bg-purple3  max-w-full "
      onClick={() => handelClick()}
    >
      <div
        className=" z-0 m-2 w-16 h-16   bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${song.songImage})` }}
      ></div>
      <div className=" grow flex flex-col justify-between  ">
        <h5 className="  w-max font-bold tracking-tight dark:text-white">
          {song.title}
        </h5>
        <p className=" text-white">{song.artist}</p>
      </div>
      <div className=" flex-none flex  mb-2 pr-5 max-w-full ">
        <AddRemoveLikedSongs song={song} />
      </div>
    </div>
  );
};

export default ResultContainer;
