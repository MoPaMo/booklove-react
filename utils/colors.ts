// color scheme / constants

import { Appearance } from "react-native";

const colorScheme = Appearance.getColorScheme();
const dark = () =>( colorScheme === "dark");
const colors = {
  primaryText: dark() ? "#000000" : "#313330",
  PillBG: dark() ? "#313330" : "#000000",
  CleanBG: dark() ? "#15151F" : "#FFFAFA",
  DarkBG: dark() ? "#FFFFFF" : "#000000",
  BG: dark() ? "#313330" : "#FFFFFF",
  red: dark() ? "#FF453A" : "#FF3B30",
  redAccessible: dark() ? "#FF6961" : "#D70015",
  orange: dark() ? "#FF9F0A" : "#FF9500",
  orangeAccessible: dark() ? "#FFB340" : "#C93400",

  yellow: dark() ? "#FFD60A" : "#FFCC00",
  yellowAccessible: dark() ? "#FFD426" : "#B25000",

  green: dark() ? "#30D158" : "#34C759",
  greenAccessible: dark() ? "#30DB5B" : "#248A3D",

  mint: dark() ? "#66D4CF" : "#00C7BE",
  mintAccessible: dark() ? "#66D4CF" : "#0C817B",

  teal: dark() ? "#40C8E0" : "#30B0C7",
  tealAccessible: dark() ? "#5DE6FF" : "#008299",

  cyan: dark() ? "#64D2FF" : "#32ADE6",
  cyanAccessible: dark() ? "#70D7FF" : "#0071A4",

  blue: dark() ? "#0A84FF" : "#007AFF",
  blueAccessible: dark() ? "#409CFF" : "#0040DD",

  indigo: dark() ? "#5E5CE6" : "#5856D6",
  indigoAccessible: dark() ? "#7D7AFF" : "#3634A3",

  purple: dark() ? "#BF5AF2" : "#AF52DE",
  purpleAccessible: dark() ? "#DA8FFF" : "#8944AB",

  pink: dark() ? "#FF375F" : "#FF2D55",
  pinkAccessible: dark() ? "#FF6482" : "#D30F45",

  brown: dark() ? "#AC8E68" : "#A5845E",
  brownAccessible: dark() ? "#B59469" : "#7F6545",

  gray: "#8E8E93",
};

export default colors;
