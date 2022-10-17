import React from "react";

const Slider = ({ threeSongs }) => {
  console.log(threeSongs);
  // const slide1 = threeSongs[0];
  // console.log(slide1);

  const artist = threeSongs[0].artist
  return (
    <section className="min-w-screen m-4 rounded-md h-72 bg-gradient-to-b from-purpleDark to-black">
      <div></div>
      <h1>{artist}</h1>
    </section>
  );
};

export default Slider;
