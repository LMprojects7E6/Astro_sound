import React from "react";
import Button from "components/button/Button";
import './style.css'

const MusicSlide = ({ key, index, songIndex, song }) => {
  let { artist, title, songImage } = song;

  let position = "nextSlide";
  if (songIndex === index) {
    position = "activeSlide";
  }
  if (songIndex === index - 1 || (index === 0 && songIndex === 2)) {
    position = "lastSlide";
  }
  return (
    <article
      key={key}
      index={index}
      className="flex h-300 justify-around rounded-md bg-gradient-to-b from-purpleDark to-black"
    >
      <div className="flex flex-col justify-around">
        <h1 className="text-white text-4xl font-bold">{artist}</h1>
        <p className="text-grey">
          We recommend you listen <span>{title}</span>
        </p>
        <div className="">
          <Button
            type={"button"}
            text={"Play"}
            radius={"rounded-md"}
            // onClick={onLogout}
            background={"bg-purple"}
          />
        </div>
      </div>
      <div className="flex  h-full w-20">
        <img src={songImage} alt={artist} />
      </div>
    </article>
  );
};

export default MusicSlide;
