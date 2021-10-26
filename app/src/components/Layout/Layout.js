import React from "react";

//@dependencies
import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { SimpleGrid, GridItem, Container, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

/**
 * App layout to display components.
 * @param  {} {children} Rendered children components.
 */
const Layout = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <SimpleGrid>
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
      </SimpleGrid>
      <Container marginTop={"40px"}>
        <Text
          textAlign="center"
          fontWeight={700}
          margin={"20px"}
          fontSize="30px"
          stroke="black"
          color="black.500"
          outline="blue"
        >
          Pokemon Card
        </Text>
        <Box> {props.renderSearch()}</Box>
        <Box marginTop={"50px"}>{props.renderCard()}</Box>
      </Container>
    </>
  );
};

export default Layout;
