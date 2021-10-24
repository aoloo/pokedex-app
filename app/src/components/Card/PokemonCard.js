import React from "react";
import styled from "styled-components";

//@dependencies
import { Box } from "@chakra-ui/layout";
import { Tag, TagLabel } from "@chakra-ui/react";

//@Custom styled components
const Container = styled.div`
  div:first-child {
    background-color: #f2f9ff;
  }

  h6 {
    padding: 4px; 6px;
    color: grey
  }
  p {
    font-weight: 500;
    padding: 4px; 6px;
    font-size: 20px;
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
  const {
    abilities,
    name,
    sprites: { front_default },
  } = searchResults;

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Container>
        <div>
          <img src={front_default} alt={name} />
        </div>
        <div>
          <h6>Name</h6>
          <p>{name}</p>
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
