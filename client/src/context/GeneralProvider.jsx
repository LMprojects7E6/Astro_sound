import React from "react";
import AuthProvider from "./AuthProvider";
import MusicPlayerProvider from "./MusicPlayerProvider";

const GeneralProvider = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <MusicPlayerProvider>{children}</MusicPlayerProvider>
      </AuthProvider>
    </>
  );
};

export default GeneralProvider;
