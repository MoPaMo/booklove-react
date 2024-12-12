// color scheme / constants

import { Appearance } from "react-native";

const colorScheme = Appearance.getColorScheme();
const isDark = colorScheme === "dark";

const lightColors = {
  primaryText: "#313330",
  PillBG: "#000000",
  CleanBG: "#FFFAFA",
  DarkBG: "#000000",
  BG: "#FFFFFF",
  red: "#FF3B30",
  redAccessible: "#D70015",
  orange: "#FF9500",
  orangeAccessible: "#C93400",
  yellow: "#FFCC00",
  yellowAccessible: "#B25000",
  green: "#34C759",
  greenAccessible: "#248A3D",
  mint: "#00C7BE",
  mintAccessible: "#0C817B",
  teal: "#30B0C7",
  tealAccessible: "#008299",
  cyan: "#32ADE6",
  cyanAccessible: "#0071A4",
  blue: "#007AFF",
  blueAccessible: "#0040DD",
  indigo: "#5856D6",
  indigoAccessible: "#3634A3",
  purple: "#AF52DE",
  purpleAccessible: "#8944AB",
  pink: "#FF2D55",
  pinkAccessible: "#D30F45",
  brown: "#A5845E",
  brownAccessible: "#7F6545",
  gray: "#8E8E93",
};

const darkColors = {
  primaryText: "#000000",
  PillBG: "#313330",
  CleanBG: "#15151F",
  DarkBG: "#FFFFFF",
  BG: "#313330",
  red: "#FF453A",
  redAccessible: "#FF6961",
  orange: "#FF9F0A",
  orangeAccessible: "#FFB340",
  yellow: "#FFD60A",
  yellowAccessible: "#FFD426",
  green: "#30D158",
  greenAccessible: "#30DB5B",
  mint: "#66D4CF",
  mintAccessible: "#66D4CF",
  teal: "#40C8E0",
  tealAccessible: "#5DE6FF",
  cyan: "#64D2FF",
  cyanAccessible: "#70D7FF",
  blue: "#0A84FF",
  blueAccessible: "#409CFF",
  indigo: "#5E5CE6",
  indigoAccessible: "#7D7AFF",
  purple: "#BF5AF2",
  purpleAccessible: "#DA8FFF",
  pink: "#FF375F",
  pinkAccessible: "#FF6482",
  brown: "#AC8E68",
  brownAccessible: "#B59469",
  gray: "#8E8E93",
};

const colors = isDark ? darkColors : lightColors;

export default colors;
