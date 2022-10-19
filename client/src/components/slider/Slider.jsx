import React from "react";
import "tw-elements";

import Button from "components/button/Button";

const Slider = ({ threeSongs }) => {
  console.log(threeSongs);
  return (
    <section className="flex min-w-screen mt-20 m-4 h-72 bg-gradient-to-b from-purpleDark to-black rounded-md">
      <div
        id="carouselExampleCaptions"
        class="carousel slide relative w-full h-full p-0 bg-transparent"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        {/* {threeSongs.map((song) => {
          let { _id, artist, title, songImage } = song; */}

        {/* return ( */}
        {/* <div className="carousel-inner relative w-full overflow-hidden "> */}
        <div
          className="duration-700 ease-in-out flex flex-col "
          data-carousel-item
        >
          <div className="flex flex-col absolute    ">
            <h1 className="text-4xl font-bold text-white">First Slide</h1>
            <p className="text-grey">
              We recommend you listen <span>ahsfl</span>
            </p>
            <div className="">
              <Button
                type={"button"}
                text={"Play"}
                radius={"rounded-md"}
                // onClick={onLogout}
                background={"bg-purpleDark"}
              />
            </div>
          </div>

          <img
            src="https://res.cloudinary.com/dfmlnoenk/image/upload/v1666166682/songImages/bxasqsw2zgjv2zence28.png"
            className="absolute flex top-0 right-0 h-full"
            alt="..."
          />
        </div>
        {/* </div> */}
        {/* ); */}
        {/* })} */}
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Slider;
