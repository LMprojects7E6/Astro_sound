import DashboardSection from "components/dashboardSection";
import Dropdown from "components/dropdown";

import GenreSection from "components/genreSection";
import SearchBarModal from "./searchBarModal";
import SearchResults from "./searchResults/SearchResults";

const Search = () => {
  return (
    <DashboardSection>
      <Dropdown />
      <SearchBarModal modalTitle={"Search"}>
        <SearchResults />
      </SearchBarModal>
      <GenreSection />
    </DashboardSection>
  );
};

export default Search;
