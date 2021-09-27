import { createContext } from "react";

const langContext = createContext({
  language: 'en',
  setLanguage: () => {}
});

export default langContext;