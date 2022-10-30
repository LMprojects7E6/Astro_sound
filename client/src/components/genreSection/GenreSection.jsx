import GenreContainer from "components/genreContainer";
import React from "react";
import Icon from "components/icons/Icons";

const GenreSection = () => {
  const genre = [
    { genre: "jazz", color: "purple" },
    { genre: "pop", color: "purple2" },
    { genre: "caca", color: "grey2" },
    { genre: "rap", color: "purple3" },
  ];

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 350;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 350;
  };

  return (
    <section className="w-full  md:flex text-white rounded-lg mb-20  ">
      <div className="hidden md:flex items-center m-1">
        <div
          className=" cursor-pointer flex hover:opacity-50 w-10 h-10 rounded-full bg-white  "
          onClick={slideLeft}
        >
          <Icon name={"leftArrow"} size={40} color={"black"} />
        </div>
      </div>
      <div
        id="slider"
        className="w-max grid grid-cols-2 items center md:flex scrollbar-hide overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        {genre.map((genre) => {
          return <GenreContainer genre={genre} key={genre.genre} />;
        })}
      </div>
      <div className="hidden md:flex items-center m-1">
        <div
          className="  cursor-pointer hover:opacity-50 w-10 h-10 rounded-full bg-white  "
          onClick={slideRight}
        >
          <Icon name={"rightArrow"} size={40} color={"black"} />
        </div>
      </div>
    </section>
  );
};

export default GenreSection;
