import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import * as Icons from "react-icons/fa";

const Output = ({
  outputString,
  reroll,
}: {
  outputString: string;
  reroll: () => void;
}) => {
  return (
    <VStack
      w="full"
      h="full"
      p={[2, 4, 10]}
      spacing={6}
      align="flex-start"
      bg={"gray.200"}
      boxShadow={"md"}
    >
      {" "}
      <HStack>
        <Icons.FaArrowCircleRight
          style={{ height: "24", width: "24", color: "#99D" }}
        />
        <Heading>Output</Heading>
      </HStack>
      <Box h="full" w="full">
        <Text fontSize="larger" whiteSpace={"pre"}>{outputString}</Text>
      </Box>
      <HStack w="full">
        <Button
          w="full"
          shadow="lg"
          py={4}
          onClick={() => {
            reroll();
          }}
        >
          Re-Roll
          <Icons.FaRecycle
            style={{
              marginLeft: "12px",
              height: "24",
              width: "24",
            }}
          />
        </Button>
        <Button
          w="full"
          shadow="lg"
          py={4}
          onClick={() => {
            speechSynthesis.cancel();
            speechSynthesis.speak(new SpeechSynthesisUtterance(outputString));
          }}
        >
          Say It Only Wance{" "}
          <Icons.FaRegPlayCircle
            style={{
              marginLeft: "12px",
              height: "24",
              width: "24",
            }}
          />
        </Button>
      </HStack>
    </VStack>
  );
};

export default Output;
