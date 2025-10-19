import React, { createContext, useState, useContext } from "react";
import en from "../languages/english.json";
import es from "../languages/spanish.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  const trans = language === "en" ? en : es;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, trans }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
