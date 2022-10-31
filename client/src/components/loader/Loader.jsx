import React from "react";
import { DotSpinner } from "@uiball/loaders";

const Loader = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center flex-col">
      <DotSpinner size={100} speed={0.9} color="purple" />
      <p className="text-2xl mt-5 text-white">LOADING...</p>
    </div>
  );
};

export default Loader;
