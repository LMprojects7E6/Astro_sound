import { MusicPlayerContext } from "context/MusicPlayerProvider";
import { useContext, useRef } from "react";
import ReactPlayer from "react-player";
import actions from "store/actions/musicPlayerActions";
import { secondsToMinutes } from "utils/convertSecondsMinute";
import Icon from "../../../components/icons/Icons";

const MusicPlayer = () => {
  const musicPlayerRef = useRef(null);
  const {
    musicPlayer: musicPlayerSongs,
    dispatch,
    controls,
  } = useContext(MusicPlayerContext);
  const { songNumber } = controls;
  const songsURL =
    musicPlayerSongs.length > 0
      ? musicPlayerSongs.map((song) => song.songFile)
      : [];
  //!ACTION PLAY/PAUSE
  const handlePlay = () => {
    dispatch({
      type: actions.isPlay,
    });
  };
  //!HANDLE ON START
  const handleOnReady = () => {
    dispatch({
      type: actions.onReady,
      payload: { duration: musicPlayerRef.current.getDuration() },
    });
  };
  //!ACTION PROGRESS
  const handleProgress = (e) => {
    dispatch({
      type: actions.getProgress,
      payload: { ...e },
    });
  };
  //!HANDLE SEEK
  const handleSeek = (e) => {
    dispatch({
      type: actions.seekChange,
      payload: { player: musicPlayerRef.current, seconds: e.target.value },
    });
  };
  //!HANDLE VOLUME CHANGE
  const handleVolumeChange = (e) => {
    dispatch({
      type: actions.volumeChange,
      payload: { volume: parseFloat(e.target.value) },
    });
  };
  //!HANDLE NEXT SONG
  const handleNext = () => {
    dispatch({
      type: actions.nextSong,
      payload: {
        songLength: songsURL.length,
      },
    });
  };
  //!HANDLE PREVIOUS SONG
  const handlePrevious = () => {
    dispatch({
      type: actions.previousSong,
      payload: {
        songLength: songsURL.length,
      },
    });
  };
  return (
    //Player
    <section className="flex flex-row w-full justify-between bg-purple3 absolute md:fixed md:bottom-0 bottom-7 ">
      <div className="flex md:flex-col justify-around md:w-60">
        <div className="md:hidden md:absolute md:mb-96 md:mt-16">
          {musicPlayerSongs[songNumber]?.songImage && (
            <img
              src={musicPlayerSongs[songNumber]?.songImage}
              alt="photo"
              className=" relative md:w-56 w-16 h-full pr-1"
            />
          )}
        </div>
        <div className="text-white pl-3 mt-2">
          <h2 className="font-semibold">
            {musicPlayerSongs[songNumber]?.artist}
          </h2>
          <p>{musicPlayerSongs[songNumber]?.title}</p>
        </div>
      </div>
      {/* //!REACT PLAYER  */}.
      <div className="md:flex flex-col-reverse bg-purple3 md:w-full w-28">
        <div className="hidden">
          <ReactPlayer
            className="react-player"
            url={songsURL[songNumber]}
            muted={controls.muted}
            playing={controls.playing}
            volume={controls.volume}
            ref={musicPlayerRef}
            onProgress={(e) => handleProgress(e)}
            onEnded={() => handleNext()}
            onReady={() => handleOnReady()}
          ></ReactPlayer>
        </div>
        {/*//!CUSTOM PLAYER */}
        {/* //!CONTROLS PLAYER */}
        <div className="md:flex md:w-full  justify-around text-xs font-semibold text-white px-4 py-2">
          <div className="md:flex space-x-5 p-2 h-full  md:flex-row md:items-center md:justify-center">
            <button
              className="md:flex hidden focus:outline-none"
              onClick={(e) => handlePrevious(e)}
            >
              <Icon name={"playerPrev"} size={24} color={"currentColor"} />
            </button>
            <button
              onClick={handlePlay}
              className=" rounded-full w-8 h-8 p-1 flex justify-center ring-2 focus:outline-none"
            >
              {controls.playing ? (
                <Icon name={"pause"} size={24} color={"currentColor"} />
              ) : (
                <Icon name={"play"} size={24} color={"currentColor"} />
              )}
            </button>
            <button
              className="md:flex hidden focus:outline-none"
              onClick={(e) => handleNext(e)}
            >
              <Icon name={"playerNext"} size={24} color={"currentColor"} />
            </button>
          </div>
        </div>
        {/*//!PROGRESS BAR PLAYER*/}
        <div className="text-white md:flex hidden mx-auto w-5/6 pt-3">
          <div className="mx-2">{secondsToMinutes(controls.played)}</div>
          <input
            className="w-full accent-purpleDark"
            type="range"
            min={0}
            max={controls.duration}
            value={controls.played}
            onChange={(e) => handleSeek(e)}
          />
          <div className="mx-2">{secondsToMinutes(controls.duration)}</div>
        </div>
      </div>
      {/*//!VOLUME BAR */}
      <div className="text-white mr-7 w-60 md:flex md:flex-row md:items-center hidden">
        <Icon name={"volLow"} size={24} color={"currentColor"} />
        <input
          className="w-full accent-purpleDark"
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={controls.volume}
          onChange={(e) => handleVolumeChange(e)}
        />
      </div>
    </section>
  );
};

export default MusicPlayer;
