//@dependencies
import React, { useState, useCallback, useEffect } from "react";
import debounce from "lodash.debounce";

//@components
import Layout from "./components/Layout/Layout";
import Search from "./components/Search/Search";

function App() {
  const [searchString, setSearchString] = useState("");

  /**
   * Debounces state upate to search.
   * @param  {Object} e
   */
  const debouncedSearch = useCallback(
    debounce((searchValue) => setSearchString(searchValue), 1000),
    []
  );

  return (
    <>
      <Layout search={<Search debouncedSearch={debouncedSearch} />} />
      {searchString}
    </>
  );
}

export default App;
