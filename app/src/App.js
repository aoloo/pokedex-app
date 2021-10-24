//@dependencies
import React, { useState, useCallback, useEffect } from "react";
import debounce from "lodash.debounce";
import { Skeleton, Text, useDisclosure } from "@chakra-ui/react";

//@util functions
import { fetchData, getLocalStorageItem } from "./utils/utils";

//@components
import Layout from "./components/Layout/Layout";
import Search from "./components/Search/Search";
import PokemonCard from "./components/Card/PokemonCard";
import PokemonDrawer from "./components/Drawer/PokemonDrawer";
import ResultNotFound from "./components/Display/ResultNotFound";

function App() {
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [savedPokemons, setSavedPokemons] = useState(
    getLocalStorageItem("savedPokemons") || []
  );

  useEffect(() => {
    const getPokeDexData = async (searchString) => {
      setIsLoading(true);

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
      if (searchValue) {
        setSearchString(searchValue);
      } else {
        setSearchString("");
        setSearchResults([]);
      }
    }, 1000),
    []
  );

  const handleClick = () => {
    onOpen();
  };

  console.log("render", "APP");
  return (
    <>
      <Layout
        renderSearch={() => (
          <>
            <Search debouncedSearch={debouncedSearch} />
            {savedPokemons.length > 0 && (
              <>
                <Text
                  as="u"
                  paddingRight="8px"
                  cursor="pointer"
                  color="blue"
                  float="right"
                  onClick={handleClick}
                >
                  Saved
                </Text>
                {isOpen && (
                  <PokemonDrawer
                    isOpen={isOpen}
                    onClose={onClose}
                    savedPokemons={savedPokemons}
                    setSavedPokemons={setSavedPokemons}
                  />
                )}
              </>
            )}
          </>
        )}
        renderCard={() =>
          isLoading ? (
            <Skeleton h={300} />
          ) : !isLoading &&
            Object.keys(searchResults).length > 0 &&
            !searchResults.hasOwnProperty("text") ? (
            <PokemonCard
              pokemon={searchResults}
              savedPokemons={savedPokemons}
              setSavedPokemons={setSavedPokemons}
            />
          ) : searchString && searchResults.text === "not found" ? (
            <ResultNotFound />
          ) : null
        }
      />
    </>
  );
}

export default App;
