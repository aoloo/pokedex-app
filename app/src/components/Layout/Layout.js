import React from "react";

//@Third party library
import { Flex, Spacer } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { SimpleGrid, Grid, GridItem, Container } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

/**
 * App layout to display components.
 * @param  {} {children} Rendered children components.
 */
const Layout = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <SimpleGrid gap={3}>
        <GridItem>
          <Box>
            <Button
              backgroundColor="transparent"
              float="right"
              margin="3"
              onClick={toggleColorMode}
            >
              {colorMode === "light" ? (
                <MoonIcon fontSize="20" />
              ) : (
                <SunIcon fontSize="20" />
              )}
            </Button>
          </Box>
        </GridItem>
        <GridItem alignItems="center">
          <Flex
            display="block"
            margin="auto"
            flexDirection="column"
            justifyContent="center"
            width={"50%"}
          >
            <Box w="100%">{props.search}</Box>
          </Flex>
        </GridItem>
        <GridItem alignItems="center">
          <Flex
            display="block"
            margin="auto"
            flexDirection="column"
            justifyContent="center"
            width={"70%"}
          >
            <Box>
              <main>allan</main>
            </Box>
          </Flex>
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default Layout;
