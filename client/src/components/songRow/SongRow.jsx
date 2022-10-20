import React from "react";

const SongRow = () => {
  return (
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
    </div>
  );
};
