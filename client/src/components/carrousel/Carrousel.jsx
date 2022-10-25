import React from "react";
import { Carousel } from "flowbite-react";
import { getThreeSongs } from "api/songs";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Slide from "./Slide";
import description from "assets/description/description";
import img from "assets/threeSongs/index";

const Carrousel = () => {
  let pos = -1;
  const {
    data: threeSongs,
    isLoading: isLoadingSong,
    isError: isSongError,
    error: songError,
  } = useQuery(["threeSongs"], getThreeSongs);

  if (isLoadingSong) {
    return <p>Loading...</p>;
  } else if (isSongError) {
    toast.error(songError);
  } else {
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
          })}
        </Carousel>
      </div>
    );
  }
};

export default Carrousel;
