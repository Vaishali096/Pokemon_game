import { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
  const [isLightTheme, setIsLightTheme] = useState([true]);

  const [light, setLight] = useState({ text: "#555", ui: "#DDD", bg: "#EEE" });

  const [dark, setDark] = useState({ text: "#DDD", ui: "#333", bg: "#555" });

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        isLightTheme: isLightTheme,
        light: light,
        dark: dark,
        toggleTheme: toggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
