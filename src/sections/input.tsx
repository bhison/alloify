import { Heading, HStack, Textarea, VStack } from "@chakra-ui/react";
import * as Icons from "react-icons/fa";

const Input = ({
  setInputString,
}: {
  setInputString: (val: string) => void;
}) => {
  return (
    <VStack
      w="full"
      h="full"
      p={[2, 4, 10]}
      spacing={5}
      alignItems={"flex-start"}
      boxShadow={"md"}
      borderTop={"2px"}
      borderColor={"gray.100"}
    >
      <HStack>
        <Icons.FaArrowCircleDown
          style={{ height: "24", width: "24", color: "#99D" }}
        />
        <Heading>Input</Heading>
      </HStack>
      <Textarea
        fontSize="larger"
        placeholder="Start typing here..."
        boxShadow="lg"
        bg={"gray.50"}
        h="full"
        w="full"
        onChange={(e) => setInputString(e.target.value)}
      />
    </VStack>
  );
};

export default Input;
