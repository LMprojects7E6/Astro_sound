import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "flowbite-react";
import { getThreeSongs } from "api/songs";
import { useQuery } from "@tanstack/react-query";
import Loader from "components/loader/Loader";
import Slide from "./Slide";
import img from "assets/slides/index";

const Carrousel = () => {
  const navigate = useNavigate();
  let pos = -1;

  const threeSlides = [
    { text: "Don’t just listen, feel the music.", image: img.firstCover },
    { text: "it will transport you to another world.", image: img.secondCover },
    { text: "Where the music never stops!", image: img.thirdCover },
  ];
  const {
    data: threeSongs,
    isLoading: isLoadingSong,
    isError: isSongError,
    error: songError,
  } = useQuery(["threeSongs"], getThreeSongs);

  if (isLoadingSong) {
    return <Loader />;
  }

  if (isSongError) {
    navigate("/error");
  }

  return (
    <div className="md:flex hidden mt-8 ">
      <Carousel slideInterval={5000}>
        {threeSlides.map((slide, index) => {
          pos++;
          return (
            <Slide key={index} title={slide.text} slideImage={slide.image} />
          );
        })}
      </Carousel>
    </div>
  );
};

export default Carrousel;
