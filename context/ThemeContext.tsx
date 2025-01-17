import React, { createContext, useState, useEffect, ReactNode } from "react";
import { Appearance } from "react-native";

type ThemeContextType = {
  theme: "light" | "dark" | null;
};

const ThemeContext = createContext<ThemeContextType>({ theme: null });

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark" | null | undefined>(
    Appearance.getColorScheme()
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme);
    });

    return () => subscription.remove();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };