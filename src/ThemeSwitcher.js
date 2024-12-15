import React from "react";
import { useTheme } from "./contexts/ThemeContext.js";

const ThemeSwitcher = () => {
  const { switchTheme } = useTheme();

  const handleThemeChange = (theme) => {
    switchTheme(theme);
  };

  return (
    <div>
      <button onClick={() => handleThemeChange("light")}>Light Theme</button>
      <button onClick={() => handleThemeChange("dark")}>Dark Theme</button>
      <button onClick={() => handleThemeChange("blue")}>Blue Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
