import React from "react";
import  Icon  from '../../../components/icons/Icons';

const MusicPlayer = () => {
  return (
  <div className="flex bg-black mobile:hidden  absolute w-full bottom-0">
    <div className="flex w-full justify-around text-xs font-semibold text-white px-4 py-2">
      <div>
        0:00
      </div>
      <div className="flex space-x-3 p-2">
      <button className="focus:outline-none">
        <Icon name={"shuffle"} size={20}/>
        </button>
        <button className="focus:outline-none">
        <Icon name={"playerPrev"} size={24}/>
        </button>
        <button className="rounded-full w-8 h-8 flex items-center justify-center pl-0.5 ring-2 ring-gray-100 focus:outline-none">
        <Icon name={"play"} size={24}/>
        </button>
        <button className="focus:outline-none">
        <Icon name={"playerNext"} size={24}/>
        </button>
        <button className="focus:outline-none">
        <Icon name={"repeat"} size={20}/>
        </button>
      </div>
      <div>
        3:00
      </div>
      </div>
  </div>
  );
};

export default MusicPlayer;
