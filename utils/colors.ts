// color scheme / constants

import { Appearance } from "react-native";

const colorScheme = Appearance.getColorScheme();

const colors = {
  primaryText: colorScheme == "dark" ? "#000000" : "#313330",
  PillBG: colorScheme === "dark" ? "#313330" : "#000000",
  CleanBG: colorScheme === "dark" ? "#15151F" : "#FFFAFA",
  DarkBG: colorScheme === "dark" ? "#FFFFFF" : "#000000",
  BG: colorScheme === "dark" ? "#313330" : "#FFFFFF",
  red: colorScheme === "dark" ? "#FF453A" : "#FF3B30",
  redAccessible: colorScheme === "dark" ? "#FF6961" : "#D70015",
  orange: colorScheme === "dark" ? "#FF9F0A" : "#FF9500",
  orangeAccessible: colorScheme === "dark" ? "#FFB340" : "#C93400",

  yellow: colorScheme === "dark" ? "#FFD60A" : "#FFCC00",
  yellowAccessible: colorScheme === "dark" ? "#FFD426" : "#B25000",

  green: colorScheme === "dark" ? "#30D158" : "#34C759",
  greenAccessible: colorScheme === "dark" ? "#30DB5B" : "#248A3D",

  mint: colorScheme === "dark" ? "#66D4CF" : "#00C7BE",
  mintAccessible: colorScheme === "dark" ? "#66D4CF" : "#0C817B",

  teal: colorScheme === "dark" ? "#40C8E0" : "#30B0C7",
  tealAccessible: colorScheme === "dark" ? "#5DE6FF" : "#008299",

  cyan: colorScheme === "dark" ? "#64D2FF" : "#32ADE6",
  cyanAccessible: colorScheme === "dark" ? "#70D7FF" : "#0071A4",

  blue: colorScheme === "dark" ? "#0A84FF" : "#007AFF",
  blueAccessible: colorScheme === "dark" ? "#409CFF" : "#0040DD",

  indigo: colorScheme === "dark" ? "#5E5CE6" : "#5856D6",
  indigoAccessible: colorScheme === "dark" ? "#7D7AFF" : "#3634A3",

  purple: colorScheme === "dark" ? "#BF5AF2" : "#AF52DE",
  purpleAccessible: colorScheme === "dark" ? "#DA8FFF" : "#8944AB",

  pink: colorScheme === "dark" ? "#FF375F" : "#FF2D55",
  pinkAccessible: colorScheme === "dark" ? "#FF6482" : "#D30F45",

  brown: colorScheme === "dark" ? "#AC8E68" : "#A5845E",
  brownAccessible: colorScheme === "dark" ? "#B59469" : "#7F6545",

  gray: "#8E8E93",
};

export default colors;
