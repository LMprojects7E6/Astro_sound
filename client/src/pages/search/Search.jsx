import { useQuery } from "@tanstack/react-query";
import { getSearchedSongs } from "api/songs";
import DashboardSection from "components/dashboardSection";
import Dropdown from "components/dropdown";

import GenreSection from "components/genreSection";
import SongsContainer from "components/songsContainer";
import SearchBarModal from "./searchBarModal";
import SearchResults from "./searchResults/SearchResults";

const Search = () => {
  const { isLoading, isError, data } = useQuery(
    ["searchedSongs"],
    getSearchedSongs
  );

  const recentSearches = !isLoading && !isError ? data : [];
  const recentSearchesTitle =
    !isLoading && !isError && recentSearches.length > 0
      ? "Recent Searches"
      : "Find and listen to the latests songs...";

  return (
    <DashboardSection>
      <Dropdown />
      <SearchBarModal modalTitle={"Search"}>
        <SearchResults />
      </SearchBarModal>
      <GenreSection />
      <SongsContainer
        searchedSongs={recentSearches}
        title={recentSearchesTitle}
      />
    </DashboardSection>
  );
};

export default Search;
