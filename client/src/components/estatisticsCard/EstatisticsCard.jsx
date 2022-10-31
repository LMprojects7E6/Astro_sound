import React from "react";

const EstatisticsCard = ({ genre, songsNumber, percentage}) => {
  return (
    <div className="flex flex-col justify-center px-4 py-4 bg-white border border-gray-300 rounded">
      <div>
        <div>
          <p className="flex items-center justify-end text-green-500 text-md">
            <span className="font-bold">{percentage}%</span>
          </p>
        </div>
        <p className="text-3xl font-semibold text-center text-gray-800">{songsNumber}</p>
        <p className="text-lg text-center text-gray-500">{genre}</p>
      </div>
    </div>
  );
};

export default EstatisticsCard;
