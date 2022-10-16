import Button from "components/button";
import React from "react";

const AddToPlaylist = ({ setShowModal }) => {
  return (
    <>
      <ul className="pr-4 px-10 list-disc">
        <li>Hola</li>
        <li>Hola</li>
        <li>Hola</li>
        <li>Hola</li>
        <li>Hola</li>
      </ul>

      <div className="relative pr-4 px-4 ">
        <hr />
      </div>
      <div className="flex items-center justify-start p-6 ">
        <Button
          bg={"mainButtonBg"}
          width={"w-max"}
          radius={"rounded"}
          text={"+ Create new playlist"}
          onClick={() => setShowModal(false)}
        />
      </div>
    </>
  );
};

export default AddToPlaylist;
