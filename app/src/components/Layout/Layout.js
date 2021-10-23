import React from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { SimpleGrid } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

/**
 * App layout to display components.
 * @param  {} {children} Rendered children components.
 */
const Layout = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <SimpleGrid column={1}>
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
      <Box>
        <div>Allan</div>
      </Box>
      <Box>
        <main>{children}</main>
      </Box>
    </SimpleGrid>
  );
};

export default Layout;
