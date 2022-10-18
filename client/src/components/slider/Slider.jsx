import React from "react";

import Button from "components/button/Button";

const Slider = ({ threeSongs }) => {
  return (
    <section className="flex pt-5 min-w-screen m-4 rounded-md h-72 bg-gradient-to-b from-purpleDark to-black">
      {threeSongs.map((song) => {
        let { _id, artist, title, songImage } = song;
        console.log(songImage);
        return (
          <div>
            <h1 className="p-5 text-white text-4xl font-bold">{artist}</h1>
            <p className="pl-5 text-grey">
              We recommend you listen <span>{title}</span>
            </p>
            <div className="pl-5 pt-20">
              <Button
                type={"button"}
                text={"Play"}
                radius={"rounded-md"}
                // onClick={onLogout}
                background={"bg-purple"}
              />
            </div>

            {/* <img
                  src={song.songImage}
                  alt={song.artist}
                  className="bg-cover"
                /> */}
          </div>
        );
      })}
    </section>
  );
};

export default Slider;
