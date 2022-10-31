import React from "react";
import DashboardSection from "components/dashboardSection";
import FavoriteSongContainer from "components/favoriteSongContainer/FavoriteSongContainer";
import PlaylistCardsRow from "components/cardsRow/playlistCardsRow";

const Library = () => {
  return (
    <DashboardSection>
      <div className="text-gray-300 min-h-screen p-10 text-white w-full">
        <h2 className="text-3xl font-semibold mb-1">My libraries</h2>
        <div className="flex flex-col">
          <FavoriteSongContainer />
          <PlaylistCardsRow />
        </div>
      </div>
    </DashboardSection>
  );
};

export default Library;
