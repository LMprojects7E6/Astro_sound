import React from "react";

const GenreContainer = ({ bgColor, text }) => {
  return (
    <div className={`bg-${bgColor} rounded-xl max-w-xs m-5`}>
      <h4 className="text-xl m-2 text-white font-bold flex">Your top genres</h4>
      <div className="flex flex-row  m-5 space-around md:flex-col items-center    md:rounded-xl  max-w-full md:w-60 md:max-h-72  md:m-20"></div>
    </div>
  );
};

export default GenreContainer;
