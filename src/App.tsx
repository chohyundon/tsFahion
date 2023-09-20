import React, { useState } from "react";
import Nav from "./pages/Nav";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./style/theme";
import GlobalStyle from "./style/Globalstyle";

export default function App() {
  const [theme, setTheme] = useState<string>("lightTheme");
  const toggleTheme = () => {
    setTheme(theme === "lightTheme" ? "darkTheme" : "lightTheme");
  };

  return (
    <>
      <ThemeProvider theme={theme === "lightTheme" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Nav toggleTheme={toggleTheme} theme={theme} />
        <Outlet />
      </ThemeProvider>
    </>
  );
}
