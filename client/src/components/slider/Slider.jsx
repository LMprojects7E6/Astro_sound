import React, { useState } from "react";
import MusicSlide from "components/musicSlide";
import "tw-elements";

const Slider = ({ threeSongs }) => {
  const [index, setIndex] = useState(0);
  return (
    <section className="flex flex-col min-w-screen mt-20 m-4 h-72">
      {threeSongs.map((song, songIndex) => {
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
