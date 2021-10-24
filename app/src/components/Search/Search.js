//@dependencies
import React, { useState } from "react";
import { Input } from "@chakra-ui/input";

/**
 * Displays a search component.
 * @param  {Function} {debouncedSearch}
 */
const Search = ({ debouncedSearch }) => {
  const [value, setValue] = useState("");

  /**
   * Updates search component state.
   * @param  {Object} e
   */
  const handleSearchChange = (e) => {
    const { value } = e.target;

    setValue(value);
    debouncedSearch(value);
  };

  return (
    <>
      <Input
        placeholder="Search Pokemon"
        size="lg"
        value={value}
        onChange={handleSearchChange}
      />
    </>
  );
};

export default Search;
