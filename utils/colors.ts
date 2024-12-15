// color scheme / constants

import { Appearance } from "react-native";
import { useState, useEffect } from "react";

const lightColors = {
  primaryText: "#313330",
  PillBG: "#000000",
  CleanBG: "#FFFAFA",
  DarkBG: "#000000",
  BG: "#FFFFFF",
  red: "#FF3B30",
  orange: "#FF9500",
  yellow: "#FFCC00",
  green: "#34C759",
  mint: "#00C7BE",
  teal: "#30B0C7",
  cyan: "#32ADE6",
  blue: "#007AFF",
  indigo: "#5856D6",
  purple: "#AF52DE",
  pink: "#FF2D55",
  brown: "#A5845E",
  gray: "#8E8E93",
  lightGray: "#C7C7CC",
};

const lightAccessibleColors = {
  primaryText: "#313330",
  PillBG: "#000000",
  CleanBG: "#FFFAFA",
  DarkBG: "#000000",
  BG: "#FFFFFF",
  red: "#D70015",
  orange: "#C93400",
  yellow: "#B25000",
  green: "#248A3D",
  mint: "#0C817B",
  teal: "#008299",
  cyan: "#0071A4",
  blue: "#0040DD",
  indigo: "#3634A3",
  purple: "#8944AB",
  pink: "#D30F45",
  brown: "#7F6545",
  lightGray: "#C7C7CC",
  gray: "#8E8E93",
};

const darkColors = {
  primaryText: "#000000",
  PillBG: "#313330",
  CleanBG: "#15151F",
  DarkBG: "#FFFFFF",
  BG: "#313330",
  red: "#FF453A",
  orange: "#FF9F0A",
  yellow: "#FFD60A",
  green: "#30D158",
  mint: "#66D4CF",
  teal: "#40C8E0",
  cyan: "#64D2FF",
  blue: "#0A84FF",
  indigo: "#5E5CE6",
  purple: "#BF5AF2",
  pink: "#FF375F",
  brown: "#AC8E68",
  lightGray: "#C7C7CC",
  gray: "#8E8E93",
};

const darkAccessibleColors = {
  primaryText: "#000000",
  PillBG: "#313330",
  CleanBG: "#15151F",
  DarkBG: "#FFFFFF",
  BG: "#313330",
  red: "#FF6961",
  orange: "#FFB340",
  yellow: "#FFD426",
  green: "#30DB5B",
  mint: "#66D4CF",
  teal: "#5DE6FF",
  cyan: "#70D7FF",
  blue: "#409CFF",
  indigo: "#7D7AFF",
  purple: "#DA8FFF",
  pink: "#FF6482",
  lightGray: "#C7C7CC",
  brown: "#B59469",
  gray: "#8E8E93",
};

const useColorScheme = () => {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const subscription = Appearance.addChangeListener(
      ({ colorScheme: newColorScheme }) => {
        setColorScheme(newColorScheme);
      }
    );

    return () => subscription.remove();
  }, []);

  return colorScheme;
};

const isDark = useColorScheme() === "dark";
const accessible = false;

const colorsDefault = isDark ? darkColors : lightColors;
const accessibleColors = isDark ? darkAccessibleColors : lightAccessibleColors;
const colors = accessible ? accessibleColors : colorsDefault;

export default colors;
