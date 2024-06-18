"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { DarkModeProviderProps, DarkModeType } from "../Types/DarkMode";

const DarkModeContext = createContext<DarkModeType>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    setIsDarkMode(savedDarkMode ? JSON.parse(savedDarkMode) : false);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevDarkMode: boolean) => {
      const newDarkMode = !prevDarkMode;
      if (typeof window !== "undefined") {
        localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
        document.body.classList.toggle("dark-mode", newDarkMode);
      }
      return newDarkMode;
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.classList.toggle("dark-mode", isDarkMode);
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = (): DarkModeType => {
  return useContext(DarkModeContext);
};
