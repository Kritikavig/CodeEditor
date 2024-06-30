import { Box, Button, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { executeCode } from "../api";

//  to run the code we need
// 1. code ref -> editorRef
// 2. language selected -> language

const Output = ({ editorRef, language }) => {

  const toast = useToast(); //to display err
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const srcCode = editorRef.current.getValue();
    if (!srcCode) return;

    try {
      setLoading(true);
      const { run: result } = await executeCode(language, srcCode);
      setOutput(result.output.split("\n")); //in output real result is stored

      result.stderr ? setIsError(true) : setIsError(false); //check if result has err
    } 
    catch (error) {
      console.log(error);
      toast({
        title: "An error occured!",
        description: error.message || "Unable to run the code",
        status: "error",
        duration: 6000,
      });
    } 
    finally {
      setLoading(false);
    }
  };

  return (
    <Box w="50%">
      <Text mb={2} fontSize="lg">
        Output
      </Text>
      <Button
        variant="outline"
        colorScheme="green"
        mb={4}
        onClick={runCode}
        loading={loading}
      >
        Run Code
      </Button>
      <Box
        height="75vh"
        p={2}
        border="1px solid"
        borderRadius={4}
        borderColor={isError ? "red.500" : "#333"}
        color={isError ? "red.400" : ""}
      >
        {output
          ? output.map((line, idx) => 
              <Text key={idx}>{line}</Text>
            )
          : 'Click "Run Code" to see the output here '}
      </Box>
    </Box>
  );
};

export default Output;
