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
  const songsURL = musicPlayerSongs.map((song) => song.songFile);

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
      payload: { volume: e.target.value },
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
    <>
      {/* //!REACT PLAYER  */}
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
      <div className="md:flex bg-black hidden absolute w-full bottom-0 flex-col">
        {/* //!CONTROLS PLAYER */}
        <div className="flex w-full justify-around text-xs font-semibold text-white px-4 py-2">
          <div className="flex space-x-3 p-2">
            <button className="focus:outline-none">
              <Icon name={"shuffle"} size={24} color={"currentColor"} />
            </button>
            <button
              className="focus:outline-none"
              onClick={(e) => handlePrevious(e)}
            >
              <Icon name={"playerPrev"} size={24} color={"currentColor"} />
            </button>
            <button
              onClick={handlePlay}
              className="rounded-full w-8 h-8 flex items-center justify-center ring-2 ring-gray-100 focus:outline-none"
            >
              {controls.playing ? (
                <Icon name={"pause"} size={24} color={"currentColor"} />
              ) : (
                <Icon name={"play"} size={24} color={"currentColor"} />
              )}
            </button>
            <button
              className="focus:outline-none"
              onClick={(e) => handleNext(e)}
            >
              <Icon name={"playerNext"} size={24} color={"currentColor"} />
            </button>
            <button className="focus:outline-none">
              <Icon name={"repeat"} size={24} color={"currentColor"} />
            </button>
          </div>
        </div>
        {/*//!PROGRESS BAR PLAYER*/}
        <div className="text-white flex m-auto w-80">
          <div>{secondsToMinutes(controls.played)}</div>
          <input
            className="w-full"
            type="range"
            min={0}
            max={controls.duration}
            value={controls.played}
            onChange={(e) => handleSeek(e)}
          />
          <div>{secondsToMinutes(controls.duration)}</div>
        </div>
        {/*//!VOLUME BAR */}
        <div className="text-white flex m-auto w-80">
          <input
            className="w-full"
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={controls.volume}
            onChange={(e) => handleVolumeChange(e)}
          />
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;
