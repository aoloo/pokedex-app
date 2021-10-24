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
    };

    if (searchString) getPokeDexData(searchString);
    setIsLoading(false);
  }, [searchString]);

  /**
   * Debounces state upate to search.
   * @param  {Object} e
   */
  const debouncedSearch = useCallback(
    debounce((searchValue) => {
      if (searchValue) {
        setIsLoading(true);
        setSearchString(searchValue);
      } else {
        setIsLoading(false);
        setSearchString("");
        setSearchResults([]);
      }
    }, 900),
    []
  );

  console.log("render", "APP");
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
          ) : searchString && searchResults.text === "not found" ? (
            <ResultNotFound />
          ) : null
        }
      />
    </>
  );
}

export default App;
