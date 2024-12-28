import * as React from "react";
import { VStack } from "@chakra-ui/react";

const FullScreen = ({ children, DarkMode, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={DarkMode ? "white" : "black"}
    >
      <VStack maxWidth="100%" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreen;
