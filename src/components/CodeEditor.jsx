import { Box, HStack } from "@chakra-ui/react";
import Editor from "@monaco-editor/react";
import React, { useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";

const CodeEditor = () => {
  const [value, setValue] = useState(""); //to store states of variables
  const [language, setLanguage] = useState("javascript");
  const editorRef = useRef();

  const onMount = (editor) => {
    //focus on curr editor
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]); //set value for code editor on choosing a language
  };

  return (
    <Box>
      <HStack spacing={4}>
        <Box w="50%">
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            theme="vs-dark"
            height="75vh"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            value={value}
            onChange={(value) => setValue(value)}
            onMount={onMount}
          />
        </Box>
        <Output editorRef={editorRef} language={language}/>
      </HStack>
    </Box>
  );
};

export default CodeEditor;
