import React from "react";
import Button from "../../components/button"
import Amy from "../../assets/threeSongs/amy.png";
import Duki from "../../assets/threeSongs/duki.png";
import Quevedo from "../../assets/threeSongs/quevedo.png";
import Redhotchilipeppers from "../../assets/threeSongs/redhotchilipeppers.png";

const Slider = ({ threeSongs }) => {
  console.log(threeSongs);
  
  return (
    <section className="pt-5 min-w-screen m-4 rounded-md h-72 bg-gradient-to-b from-purpleDark to-black">
     <h1 className="p-5 text-white text-4xl font-bold">Red Hot Chili Peppers</h1>
     <p className="pl-5 text-grey">We recommend you listen <span>Back to Black</span></p>
     <Button>Play</Button>
    </section>
  );
};

export default Slider;
