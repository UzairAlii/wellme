import React, { createContext, useState, useContext, useEffect } from "react";
import en from "../languages/english.json";
import es from "../languages/spanish.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem("language");
    return savedLang ? savedLang : "en";
  });

  const [notification, setNotification] = useState("");

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLang = prev === "en" ? "es" : "en";
      setNotification(newLang === "en" ? "Language changed to English" : "Idioma cambiado a Español");
      return newLang;
    });

    setTimeout(() => setNotification(""), 5000);
  };

  const trans = language === "en" ? en : es;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, trans }}>
      {children}

      {notification && (
  <div
    className="fixed top-5 left-1/2 
               bg-white/70 backdrop-blur-xl border border-white/30 
               text-[#3c1d00] text-sm md:text-md py-3 px-8 
               rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.15)] 
               flex items-center gap-3 z-[9999] animate-slideDown openSauceMedium"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-[#c28347]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
    <span>{notification}</span>
  </div>
)}



    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
