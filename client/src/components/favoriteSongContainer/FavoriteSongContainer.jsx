import Button from "components/button";
import React from "react";
import Icon from "components/icons/Icons";
import image from "assets/threeSongs/quevedo.png";
const FavoriteSongContainer = () => {
  return (
    <>
      <h2 className="text-xl m-2 text-white font-bold  mb-8 flex">
        Liked Songs{" "}
        <span className="mx-3">
          <Icon name={"heart"} size={24} color={"white"} />
        </span>
      </h2>
      <section className="w-full mainButtonBg flex text-white rounded-lg mb-20">
        <div className="p-5 w-full flex flex-col justify-around">
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eaque
            totam cum ullam, laudantium perspiciatis, quos illo praesentium quae
            nostrum cupiditate veniam officiis quasi, odit dicta natus nemo id!
            Officia?
          </p>
          <div className="flex justify-between">
            <p className="font-semibold text-2xl">15 liked songs</p>
            <div className=" rounded-full border-2 border-white md:hidden pl-0.5 pt-0.5 w-8 h-8  ">
              <Icon name={"play"} size={24} color={"white"} />
            </div>
          </div>
        </div>
        <div className="hidden md:flex">
          <img src={image} alt="" />
        </div>
      </section>
    </>
    // <section className="flex flex-col  p-5 m-2 mb-20">
    //   {/* <h4 className="text-xl m-2 text-white font-bold flex">
    //     Liked songs
    //     <span className="ml-2">
    //       <Icon name={"heart"} size={24} color={"white"} />
    //     </span>
    //   </h4> */}
    //   <div
    //     className="mainButtonBg rounded-xl p-2"
    //     onClick={() => console.log("aaaaaa")}
    //   >
    //     <div className="flex flex-row  m-5 space-around md:flex-col items-center    md:rounded-xl  max-w-full md:w-60 md:max-h-72  md:m-20">
    //       <p className="text-white min-h-min">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
    //       </p>
    //     </div>
    //     <div className="  flex justify-between m-5 ">
    //       <h5 className=" md:text-xl w-max tracking-tight text-white">
    //         15 liked Songs
    //       </h5>
    //       <div className=" rounded-full border-2 border-white md:hidden pl-0.5 pt-0.5 w-8 h-8  ">
    //         <Icon name={"play"} size={24} color={"white"} />
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default FavoriteSongContainer;
