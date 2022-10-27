import { createContext, useReducer, useState } from "react";
import musicPlayerReducer from "store/reducers/musicPlayerReducer";

export const MusicPlayerContext = createContext();
//!!!! TEST BELOW
const testData = [
  {
    id: "6357cf2066c6bb63e7e08f1b",
    songFile:
      "https://res.cloudinary.com/dfmlnoenk/video/upload/v1666699040/songFiles/qaxeygwyvhompoma97fc.mp3",
    title: "Without me",
    artist: "Eminem",
    album: "8 mile",
    songImage:
      "https://res.cloudinary.com/dfmlnoenk/image/upload/v1666699039/songImages/jwblxulpncsmbqfiyvde.jpg",
    genre: "rap",
  },
  {
    id: "6357cf4a66c6bb63e7e08f1f",
    songFile:
      "https://res.cloudinary.com/dfmlnoenk/video/upload/v1666699082/songFiles/buknyc5t4exv6ittddn4.mp3",
    title: "Wanksta",
    artist: "50 cent",
    album: "get rich or try dying",
    songImage:
      "https://res.cloudinary.com/dfmlnoenk/image/upload/v1666699081/songImages/h8zmox9h1jiywxmocb0m.jpg",
    genre: "rap",
  },
  {
    id: "6357cf9066c6bb63e7e08f23",
    songFile:
      "https://res.cloudinary.com/dfmlnoenk/video/upload/v1666699151/songFiles/n8du4x3npx4i4vfs0oob.mp3",
    title: "Picture me rollin",
    artist: "2Pac",
    album: "All eyez on me",
    songImage:
      "https://res.cloudinary.com/dfmlnoenk/image/upload/v1666699150/songImages/mgcec6lqukyhbtmu1sho.jpg",
    genre: "rap",
  },
];
//!!!! TEST ABOVE
const MusicPlayerProvider = ({ children }) => {
  const initialData = {
    playing: false,
    duration: 0,
    played: 0,
    volume: 0.5,
    muted: false,
    songNumber: 0,
  };
  const [musicPlayer, setMusicPlayer] = useState(testData);
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
