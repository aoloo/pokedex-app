import React, { useState, useCallback, useEffect } from "react";

//@dependencies
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
  const [searchResult, setSearchResult] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [savedPokemons, setSavedPokemons] = useState(
    getLocalStorageItem("savedPokemons") || []
  );

  useEffect(() => {
    const getPokeDexData = async (searchString) => {
      searchString =
        typeof searchString === "string"
          ? searchString.toLowerCase()
          : searchString;

      setIsLoading(true);

      const results = await fetchData(
        `https://pokeapi.co/api/v2/pokemon/${searchString}?limit=10`
      );
      setSearchResult(results);
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
        setSearchResult([]);
      }
    }, 1000),
    []
  );

  /**
   * Drawer click event listener.
   */
  const handleClick = useCallback(() => onOpen(), []);

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
                  color="#8080c1"
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
            Object.keys(searchResult).length > 0 &&
            !searchResult.hasOwnProperty("text") ? (
            <PokemonCard
              pokemon={searchResult}
              savedPokemons={savedPokemons}
              setSavedPokemons={setSavedPokemons}
              view={"default"}
            />
          ) : searchString && searchResult.text === "not found" ? (
            <ResultNotFound />
          ) : null
        }
      />
    </>
  );
}

export default App;
