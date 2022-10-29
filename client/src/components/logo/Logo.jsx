import React from "react";

const Logo = ({ width }) => {
  return (
    <img
      className={`${width}`}
      src={require("../../assets/logo.png")}
      alt="logo"
    />
  );
};

export default Logo;
