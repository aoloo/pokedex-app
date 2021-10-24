//@dependencies
import React, { useState, useCallback, useEffect } from "react";
import debounce from "lodash.debounce";
import { Skeleton } from "@chakra-ui/react";

//@util functions
import { fetchData } from "./utils/utils";

//@components
import Layout from "./components/Layout/Layout";
import Search from "./components/Search/Search";
import PokemonCard from "./components/Card/PokemonCard";
import ResultNotFound from "./components/Display/ResultNotFound";

function App() {
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getPokeDexData = async (searchString) => {
      const results = await fetchData(
        `https://pokeapi.co/api/v2/pokemon/${searchString}?limit=10`
      );

      setSearchResults(results);
      setIsLoading(false);
    };

    if (searchString) getPokeDexData(searchString);
  }, [searchString]);

  /**
   * Debounces state upate to search.
   * @param  {Object} e
   */
  const debouncedSearch = useCallback(
    debounce((searchValue) => {
      setIsLoading(true);
      setSearchString(searchValue);
    }, 2000),
    []
  );

  console.log("render", searchResults);
  return (
    <>
      <Layout
        renderSearch={() => <Search debouncedSearch={debouncedSearch} />}
        renderCard={() =>
          isLoading ? (
            <Skeleton h={300} />
          ) : !isLoading &&
            Object.keys(searchResults).length > 0 &&
            !searchResults.hasOwnProperty("text") ? (
            <PokemonCard searchResults={searchResults} />
          ) : searchResults.hasOwnProperty("text") &&
            searchResults.text === "not found" ? (
            <ResultNotFound />
          ) : null
        }
      />
    </>
  );
}

export default App;
