import { createContext } from "react";

export const LangContext = createContext({
  language: 'en',
  setLanguage: () => {}
});

export const AlertContext = createContext({
  alert: false,
  setAlert: () => {}
});
