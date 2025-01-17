import React, { useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components/native";
import { ThemeContext } from "./ThemeContext";
import { themes } from "./themes";

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext);

  const selectedTheme = theme === "dark" ? themes.dark : themes.light;

  return (
    <StyledThemeProvider theme={selectedTheme}>{children}</StyledThemeProvider>
  );
};

export default ThemeWrapper;