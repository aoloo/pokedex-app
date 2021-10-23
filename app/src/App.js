//@dependencies
import React, { useState, useCallback, useEffect } from "react";
import debounce from "lodash.debounce";

//@util functions
import { fetchData, getPokeDexData } from "./utils/utils";

//@components
import Layout from "./components/Layout/Layout";
import Search from "./components/Search/Search";
import ResultList from "./components/Display/ResultList";

function App() {
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchString) {
      setSearchResults(getPokeDexData(searchString));
    }
  }, [searchString]);

  /**
   * Debounces state upate to search.
   * @param  {Object} e
   */
  const debouncedSearch = useCallback(
    debounce((searchValue) => setSearchString(searchValue), 1500),
    []
  );

  console.log("render");
  return (
    <>
      <Layout
        search={
          <Search
            debouncedSearch={debouncedSearch}
            renderesults={<ResultList searchResults={searchResults} />}
          />
        }
      />
    </>
  );
}

export default App;
