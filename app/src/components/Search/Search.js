import React, { useState } from "react";

//@dependencies
import { Input } from "@chakra-ui/input";
import { Stack, InputLeftElement, InputGroup } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

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
    <Stack>
      <InputGroup>
        <InputLeftElement
          children={<SearchIcon verticalAlign="middle" marginTop="10px" />}
        />
        <Input
          placeholder="Search by name or number"
          size="lg"
          value={value}
          onChange={handleSearchChange}
        />
      </InputGroup>
    </Stack>
  );
};

export default Search;
