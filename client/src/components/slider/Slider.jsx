import React, { useState } from "react";
import MusicSlide from "components/musicSlide";

import Button from "components/button/Button";
//!TODO DELETE
const Slider = ({ threeSongs }) => {
  const [index, setIndex] = useState(0);
  return (
    <section className="flex pt-5 min-w-screen rounded-md h-72 bg-gradient-to-b from-purpleDark to-black mt-16">
      {threeSongs.map((song) => {
        let { _id, artist, title, songImage } = song;
        console.log(songImage);
        return (
          <MusicSlide
            key={song._id}
            song={song}
            songIndex={songIndex}
            index={index}
          />
        );
      })}
    </section>
  );
};

export default Slider;
