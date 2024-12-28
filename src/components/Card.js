import React from "react";
import "../styles/project.css";
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, desc, imag_src }) => {
  return (
    <VStack
      borderRadius="15px"
      overflow="hidden"
      bg="transparent"
      boxShadow="lg"
      border={"1px solid white"}
      align="stretch"
      spacing={5}
      width="80%"
      height="100%"
    >
      <Image src={imag_src} alt={title} width="100%" />

      <VStack padding={4} align="start" spacing={3}>
        <Heading className="head" as="h3" size="md">
          {title}
        </Heading>
        <Text className="text" fontSize="sm" color="gray.600">
          {desc}
        </Text>
        <HStack align="center" color="blue.500" spacing={2}>
          <Text className="text" fontSize="sm" fontWeight="bold">
            Learn More
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};
export default Card;
