import React from "react";
import { Carousel } from "flowbite-react";
import Slide from "./Slide";
import description from "assets/description/description";
import img from "assets/threeSongs/index";

const Carrousel = ({ threeSongs }) => {
  let pos = -1;
  return (
    <div className="h-90 md:flex hidden  mainButtonBg rounded-lg mt-8 ">
      <Carousel slideInterval={5000}>
        {threeSongs.map((song) => {
          pos++;
          return (
            <Slide
              key={song._id}
              artist={song.artist}
              title={song.title}
              songImage={img.amyCover}
              description={description[pos]}
            />
          );
          pos++;
        })}
      </Carousel>
    </div>
  );
};

export default Carrousel;
