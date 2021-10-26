import React, { memo } from "react";

//@dependencies
import { StarIcon, DeleteIcon, AddIcon } from "@chakra-ui/icons";
import { Button, Alert, AlertIcon } from "@chakra-ui/react";

//Renders pokemon card action buttons
export default memo(function CardActions({
  savedPokemons,
  handlePokemonSave,
  handlePokemonDelete,
  pokemon,
  view,
}) {
  const { id, abilities, name, sprites, types } = pokemon;

  return (
    <>
      {view === "default" ? (
        <>
          {savedPokemons.filter((poke) => poke.id === id).length > 0 ? (
            <StarIcon color={"yellow.300"} w={8} h={8} />
          ) : (
            <Button
              size="md"
              onClick={() =>
                handlePokemonSave({
                  id,
                  name,
                  abilities,
                  sprites: { front_default: sprites.front_default },
                  types,
                })
              }
              leftIcon={<AddIcon color={"blackAlpha.300"} />}
              colorScheme="green"
              variant="solid"
            >
              Save
            </Button>
          )}
        </>
      ) : (
        <Button
          size="md"
          onClick={() => handlePokemonDelete(savedPokemons, id)}
          leftIcon={<DeleteIcon color={"white"} />}
          colorScheme="red"
          variant="solid"
        >
          Delete
        </Button>
      )}
    </>
  );
});
