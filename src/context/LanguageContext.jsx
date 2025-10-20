import React, { createContext, useState, useContext, useEffect } from "react";
import en from "../languages/english.json";
import es from "../languages/spanish.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Step 1: Check localStorage first
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem("language");
    return savedLang ? savedLang : "en";
  });

  // Step 2: Whenever language changes, save to localStorage
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Step 3: Toggle function
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

// Step 4: Custom hook for easy use
export const useLanguage = () => useContext(LanguageContext);
