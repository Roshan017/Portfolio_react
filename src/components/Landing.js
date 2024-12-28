import ProfilePic from "../images/img.png";
import React from "react";
import "../styles/land.css";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreen from "./FullScreen";

const greet = "Hello , I am Roshan!";
const bio1 = "A Frontend Devloper";
const bio2 = "Specialised in React";

const Landing = () => {
  return (
    <FullScreen
      justifyContent="center"
      alignItems="center"
      DarkMode
      backgroundColor="black"
    >
      <VStack spacing={6}>
        <Avatar className="img1" size="3xl" src={ProfilePic} />
        <Heading className="greet" as={"h1"} size={"xl"} color={"white"}>
          {greet}
        </Heading>

        <Heading className="bio" as={"h1"} size={"md"} color={"white"}>
          {bio1}
        </Heading>
        <Heading className="bio" as={"h2"} size={"md"} color={"white"}>
          {bio2}
        </Heading>
      </VStack>
    </FullScreen>
  );
};
export default Landing;
