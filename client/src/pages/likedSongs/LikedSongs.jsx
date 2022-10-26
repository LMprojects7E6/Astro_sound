import React from "react";
import { getSongs } from "api/songs";

const LikedSongs = () => {
  return (
    <div className="bg-black text-gray-300 min-h-screen p-10 text-white w-full">
      {/* <!-- header --> */}
      <div className="flex">
        <img className="mr-6" src={require("../../assets/likedsong.png")} />
        <div className="flex flex-col justify-center">
          {/* <!-- content --> */}
          <h4 className="mt-0 mb-2 uppercase text-gray-500 tracking-widest text-xs">
            Playlist
          </h4>
          <h1 className="mt-0 mb-2 text-white text-8xl">Liked Songs</h1>
        </div>
      </div>

      {/* <!-- action buttons --> */}
      <div className="mt-6 flex justify-between">
        <div className="flex">
          <button className="mr-2 bg-green-500 text-green-100 block py-2 px-8 rounded-full">
            Play
          </button>
        </div>
        <div className="text-gray-600 text-sm tracking-widest text-right">
          <h5 className="mb-1">Followers</h5>
          <p>5,055</p>
        </div>
      </div>

      {/* <!-- song list   --> */}
      <div className="mt-10">
        {/* <!-- song list header --> */}
        <div className="flex text-gray-600">
          <div className="p-2 w-8 flex-shrink-0"></div>
          <div className="p-2 w-8 flex-shrink-0"></div>
          <div className="p-2 w-full">Title</div>
          <div className="p-2 w-full">Album</div>
          <div className="p-2 w-full">Date Added</div>
          <div className="p-2 w-12 flex-shrink-0 text-right">⏱</div>
        </div>
        <div className="flex border-b border-gray-800 hover:bg-gray-800">
          <div className="p-3 w-8 flex-shrink-0">▶️</div>
          <div className="p-3 w-8 flex-shrink-0">❤️</div>
          <div className="p-3 w-full">My Song Here</div>
          <div className="p-3 w-full">Eminem</div>
          <div className="p-3 w-full">Spotify</div>
          <div className="p-3 w-12 flex-shrink-0 text-right">5:35</div>
        </div>

        <div className="flex border-b border-gray-800 hover:bg-gray-800">
          <div className="p-3 w-8 flex-shrink-0">▶️</div>
          <div className="p-3 w-8 flex-shrink-0">❤️</div>
          <div className="p-3 w-full">My Song Here</div>
          <div className="p-3 w-full">Eminem</div>
          <div className="p-3 w-full">Spotify</div>
          <div className="p-3 w-12 flex-shrink-0 text-right">5:35</div>
        </div>
        <div className="flex border-b border-gray-800 hover:bg-gray-800">
          <div className="p-3 w-8 flex-shrink-0">▶️</div>
          <div className="p-3 w-8 flex-shrink-0">❤️</div>
          <div className="p-3 w-full">My Song Here</div>
          <div className="p-3 w-full">Eminem</div>
          <div className="p-3 w-full">Spotify</div>
          <div className="p-3 w-12 flex-shrink-0 text-right">5:35</div>
        </div>
      </div>
    </div>
  );
};

export default LikedSongs;
