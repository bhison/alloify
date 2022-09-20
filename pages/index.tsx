import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import Cart from "../src/sections/input";
import Details from "../src/sections/output";

const IndexPage = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Heading w="full" h={20} m={0} py={4} textAlign="center">
        🇬🇧 Alloify 🇫🇷
      </Heading>
      <Text w="full" textAlign="center">
        E vory nace woy to umprive year Frunch
      </Text>

      <Flex h="90vh" pb={20}>
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
};

export default IndexPage;
