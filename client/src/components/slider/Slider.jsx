import React from "react";
import amy from "../../assets/threeSongs/amy.png"

const photo = [amy

]
const Slider = ({ threeSongs }) => {
  console.log(threeSongs);

  return (
    <section className="min-w-screen m-4 rounded-md h-72 bg-gradient-to-b from-purpleDark to-black">
      {/* {threeSongs.map((song) => {
        const { artist } = song;
        return (
          <p>{artist}</p>
        )
      })} */}
      <div></div>
      <p>hasjdlfkjafd</p>
      <p>hasjdlfkjafd</p>
      <p>hasjdlfkjafd</p>
      <p>hasjdlfkjafd</p>
      <p>hasjdlfkjafd</p>
    </section>
  );
};

export default Slider;
