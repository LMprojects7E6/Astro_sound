import actions from "store/actions/musicPlayerActions";
const musicPlayerReducer = (currentState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.isPlay:
      return isPlay(currentState, payload);
    case actions.getProgress:
      return onProgress(currentState, payload);
    case actions.seekChange:
      return seekChange(currentState, payload);
    case actions.volumeChange:
      return volumeChange(currentState, payload);
    default:
      break;
  }
};
//!PLAYING FUNCTION
const isPlay = (currentState, musicPlayer) => {
  const duration = musicPlayer.current.getDuration();
  // const currentProgress = musicPlayer.current.getCurrentTime();

  return {
    ...currentState,
    playing: !currentState.playing,
    duration,
  };
};
//!ON PROGRESS FUNCTION
const onProgress = (currentState, payload) => {
  return { ...currentState, played: payload.playedSeconds };
};
const seekChange = (currentState, payload) => {
  const { player, seconds } = payload;
  player.seekTo(seconds, "seconds");
  return {
    ...currentState,
    played: seconds,
  };
};

const volumeChange = (currentState, payload) => {
  const { volume } = payload;
  return {
    ...currentState,
    volume,
  };
};
//!SEEK TO FUNCTION
export default musicPlayerReducer;
