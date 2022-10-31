import { createContext, useReducer, useState } from "react";
import musicPlayerReducer from "store/reducers/musicPlayerReducer";

export const MusicPlayerContext = createContext();
const MusicPlayerProvider = ({ children }) => {
  const initialData = {
    playing: false,
    duration: 0,
    played: 0,
    volume: 0.5,
    muted: false,
    songNumber: 0,
  };
  const [musicPlayer, setMusicPlayer] = useState([]);
  const [controls, dispatch] = useReducer(musicPlayerReducer, initialData);
  const value = {
    musicPlayer,
    setMusicPlayer,
    controls,
    dispatch,
  };
  return (
    <MusicPlayerContext.Provider value={value}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export default MusicPlayerProvider;
