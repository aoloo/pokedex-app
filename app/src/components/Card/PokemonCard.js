import React, { useState, memo } from "react";
import styled from "styled-components";
import { StarIcon } from "@chakra-ui/icons";

//@dependencies
import { Box } from "@chakra-ui/layout";
import { Tag, TagLabel, Button } from "@chakra-ui/react";

//@util functions
import { getLocalStorageItem, saveToLocalStorage } from "../../utils/utils";

//@Custom styled components
const Container = styled.div`
  div:first-child {
    background-color: #f2f9ff;
  }

  h6 {
    padding: 4px; 6px;
    color: grey
  }

  svg {
    float: right;
    margin-right: 10px;
    color: #e1e150e0;
    font-size: 20px
  }

  p {
    font-weight: 500;
    padding: 4px; 6px;
    font-size: 20px;
    
    button {
      float: right;
      margin-right: 10px
    }
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 230px;
  }
`;

/**
 * A component to display pokemon details on card.
 * @param  {Object} {searchResults}
 */
const PokemonCard = ({ searchResults }) => {
  const [saveList, setSaveList] = useState(
    getLocalStorageItem("savePokemonIds") || []
  );

  const {
    id,
    abilities,
    name,
    sprites: { front_default },
  } = searchResults;

  const handlePokemonSave = (id) => {
    setSaveList([...saveList, id]);
    saveToLocalStorage("savePokemonIds", [...saveList, id]);
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Container>
        <div>
          <img src={front_default} alt={name} />
        </div>
        <div>
          <h6>Name</h6>
          <p>
            {name}
            {saveList.includes(id) ? (
              <StarIcon w={8} h={8} />
            ) : (
              <Button size="md" onClick={() => handlePokemonSave(id)}>
                Save
              </Button>
            )}
          </p>
        </div>
        <div>
          <h6>Abilities</h6>
          <div>
            {abilities.map(({ ability: { name }, slot }) => (
              <Tag
                size={"md"}
                key={slot}
                variant="outline"
                colorScheme="blue"
                margin={"5px 3px"}
              >
                <TagLabel>{name}</TagLabel>
              </Tag>
            ))}
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default PokemonCard;
