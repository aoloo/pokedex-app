import React, { useState, memo } from "react";
import styled from "styled-components";

//@dependencies
import { Box } from "@chakra-ui/layout";
import { Tag, TagLabel } from "@chakra-ui/react";

//@util functions
import { saveToLocalStorage } from "../../utils/utils";

//@Components
import CardActions from "./CardActions";

//@Custom styled components
const Container = styled.div`
  div:first-child {
    background-color: #f2f9ff;
  }

  h6 {
    padding: 4px; 6px;
    color: grey
  }

  div.actions__section {
   display: flex;

    p {
    font-weight: 500;
    padding: 4px; 6px;
    font-size: 20px;
    }
    button {
      margin-left: auto;
      margin-right: 10px
    }

    svg {
      margin-left: auto;
      margin-right: 10px;
      font-size: 20px;
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
const PokemonCard = ({ pokemon, savedPokemons, setSavedPokemons, view }) => {
  const { abilities, name, sprites, types } = pokemon;

  /**
   * Save pokemon obj detail to localstorage.
   * @param  {Object} pokemonObj
   */
  const handlePokemonSave = (pokemonObj) => {
    setSavedPokemons([...savedPokemons, pokemonObj]);
    saveToLocalStorage("savedPokemons", [...savedPokemons, pokemonObj]);
  };

  /**
   * Removes saved pokemon by id.
   * @param  {Array} savedPokemons
   * @param  {int} id
   */
  const handlePokemonDelete = (savedPokemons, id) => {
    const filteredPokemonList = savedPokemons.filter((poke) => poke.id !== id);

    setSavedPokemons([...filteredPokemonList]);
    saveToLocalStorage("savedPokemons", [...filteredPokemonList]);
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Container>
        <div>
          <img src={sprites.front_default} alt={name} />
        </div>
        <div>
          <h6>Name</h6>
          <div className="actions__section">
            <p>{name}</p>
            <CardActions
              savedPokemons={savedPokemons}
              handlePokemonSave={handlePokemonSave}
              handlePokemonDelete={handlePokemonDelete}
              pokemon={pokemon}
              view={view}
            />
          </div>
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
        <div>
          <h6>Types</h6>
          <div>
            {types.map(({ type: { name }, slot }) => (
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
