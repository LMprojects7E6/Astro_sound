import React from "react";

const FullScreenModal = ({ isOpen, toggle }) => {
  return (
    <aside className="fixed">
      <div>
        <img
          src={require("../../assets/logo.png")}
          alt="astro sound logo"
          max-width="250"
          height="600"
        />
      </div>
    </aside>
  );
};

export default FullScreenModal;
