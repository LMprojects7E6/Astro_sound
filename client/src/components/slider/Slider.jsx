import React from "react";

const Slider = ({ threeSongs }) => {
  console.log(threeSongs);
  return (
    <section className="hidden md:block min-w-screen m-4 rounded-md h-72 bg-gradient-to-b from-purpleDark to-black">
      <div></div>
      {/* <h1>{threeSongs[0].artist}</h1> */}
    </section>
  );
};

export default Slider;
