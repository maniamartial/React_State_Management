import React, { useState } from "react";
import { createContext, useContext } from "react";

//Normal context
const ThemeContext = createContext();

//toggle context which will set the theme to dark or light
const ThemeUpdateContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

//To use children to reduce the longer function on the main App.js
function ThemeProvider({ children }) {
  const [darkTheme, setdarktheme] = useState(true);

  function toggleTheme() {
    setdarktheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
