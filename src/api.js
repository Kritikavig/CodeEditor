import axios from 'axios';
import { LanguageVersions } from './constants';
//make request to api which gives resp with given code

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language, srcCode) => {
  const response = await API.post("/execute", {
    language: language,
    version: LanguageVersions[language],
    files: [
      {
        content: srcCode,
      },
    ],
  });
  // console.log(response.data); 
  // having obj of version, lang selected and run command containing result
  return response.data;
};
