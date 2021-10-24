import { extendTheme } from "@chakra-ui/react";

//Config settings
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

/**
 * Application custom theming config
 * @param  {} {config}
 */
const theme = extendTheme({ config });

export default theme;
