import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { LanguageVersions } from "../constants";

const languages = Object.entries(LanguageVersions); //array like object
const active_color = "blue.400";

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <Box ml={2} mb={4}>
      <Text mb={2} fontSize="lg">
        Language :{" "}
      </Text>
      <Menu isLazy>
        <MenuButton as={Button}>{language}</MenuButton>
        <MenuList bg="#110c1b">
          {languages.map(([currLanguage, version]) => (
            //change with curr language
            <MenuItem
              key={currLanguage}
              color={currLanguage === language ? active_color : ""}
              bg={currLanguage === language ? "gray.900" : "transparent"}
              _hover={{
                color: active_color,
                bg: "gray.900",
              }}
              onClick={() => onSelect(currLanguage)}
            >
              {currLanguage}
              &nbsp;
              <Text color="gray.600" fontSize="sm" as="span">
                {version}
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;
