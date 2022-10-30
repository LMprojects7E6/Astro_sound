import actions from "store/actions/musicPlayerActions";
const musicPlayerReducer = (currentState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.onReady:
      return onReady(currentState, payload);
    case actions.isPlay:
      return isPlay(currentState, payload);
    case actions.getProgress:
      return onProgress(currentState, payload);
    case actions.seekChange:
      return seekChange(currentState, payload);
    case actions.volumeChange:
      return volumeChange(currentState, payload);
    case actions.nextSong:
      return nextSong(currentState, payload);
    case actions.previousSong:
      return previousSong(currentState, payload);

    default:
      break;
  }
};
//!ON START FUNCTION
const onReady = (currentState, payload) => {
  const { duration } = payload;
  return {
    ...currentState,
    playing: true,
    duration,
  };
};
//!PLAYING FUNCTION
const isPlay = (currentState) => {
  // const currentProgress = musicPlayer.current.getCurrentTime();

  return {
    ...currentState,
    playing: !currentState.playing,
  };
};
//!ON PROGRESS FUNCTION
const onProgress = (currentState, payload) => {
  return { ...currentState, played: payload.playedSeconds };
};
//!SEEK TO FUNCTION
const seekChange = (currentState, payload) => {
  const { player, seconds } = payload;
  player.seekTo(seconds, "seconds");
  return {
    ...currentState,
    played: seconds,
  };
};
//!VOLUME CHANGE
const volumeChange = (currentState, payload) => {
  const { volume } = payload;

  return {
    ...currentState,
    volume,
  };
};
//!NEXT SONG
const nextSong = (currentState, payload) => {
  const { songLength } = payload;

  const songNumber =
    currentState.songNumber + 1 === songLength
      ? 0
      : currentState.songNumber + 1;
  return {
    ...currentState,
    songNumber: songNumber,
  };
};
//!PREVIOUS SONG
const previousSong = (currentState, payload) => {
  const { songLength } = payload;
  const songNumber =
    currentState.songNumber === 0
      ? songLength - 1
      : currentState.songNumber - 1;
  return {
    ...currentState,
    songNumber: songNumber,
  };
};

export default musicPlayerReducer;
