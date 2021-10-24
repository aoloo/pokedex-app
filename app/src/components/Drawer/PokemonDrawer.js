import React, { memo } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

//@components
import PokemonCard from "../Card/PokemonCard";

const PokemonDrawer = memo(
  ({ isOpen, onClose, savedPokemons, setSavedPokemons }) => {
    console.log("RESULTS", savedPokemons);

    return (
      <>
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Saved Cards</DrawerHeader>
            <DrawerBody>
              {savedPokemons.map((pokemon) => (
                <div style={{ margin: "10px 0px" }}>
                  <PokemonCard
                    key={pokemon.id}
                    savedPokemons={savedPokemons}
                    pokemon={pokemon}
                    setSavedPokemons={setSavedPokemons}
                  />
                </div>
              ))}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
);

export default PokemonDrawer;
