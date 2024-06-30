import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <>
      <Box 
      bg="#0f0a19" 
      color="gray.500" 
      px={6} py={8} 
      minH="100vh"
      >
        <CodeEditor />
      </Box>
    </>
  );
}

export default App;
