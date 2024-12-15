import LandingPage from "./pages/LandingPage.js";
import { ThemeProvider } from "./contexts/ThemeContext.js";
import ThemeSwitcher from "./ThemeSwitcher.js";

import React from "react";

const lightTheme = {
  background: "white",
  textColor: "black",
  primary: "#007bff",
};

const darkTheme = {
  background: "#333",
  textColor: "white",
  primary: "#ff6347",
};

const blueTheme = {
  background: "#f0f8ff",
  textColor: "#00008b",
  primary: "#4682b4",
};

function App() {
  const [theme, setTheme] = React.useState(lightTheme);
  return (
    <ThemeProvider theme={theme}>
      <div>
        <div className="page-container">
          <LandingPage />
        </div>
        {/* <ThemeSwitcher /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
