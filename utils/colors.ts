// color scheme / constants

import { Appearance } from "react-native";

const colorScheme = Appearance.getColorScheme();

const colors = {
  PillBG: colorScheme === "dark" ? "rgba(49, 51, 48, 1.0)" : "#000000",
  CleanBG:
    colorScheme === "dark" ? "rgba(21, 21, 31, 1.0)" : "rgba(255, 250, 250, 1)",
  DarkBG: colorScheme === "dark" ? "#FFFFFF" : "#000000",
  BG: colorScheme === "dark" ? "rgba(49, 51, 48, 1.0)" : "#FFFFFF",
  red: colorScheme === "dark" ? "rgb(255, 69, 58)" : "rgb(255, 59, 48)",
  redAccessible:
    colorScheme === "dark" ? "rgb(255, 105, 97)" : "rgb(215, 0, 21)",

  orange: colorScheme === "dark" ? "rgb(255, 159, 10)" : "rgb(255, 149, 0)",
  orangeAccessible:
    colorScheme === "dark" ? "rgb(255, 179, 64)" : "rgb(201, 52, 0)",

  yellow: colorScheme === "dark" ? "rgb(255, 214, 10)" : "rgb(255, 204, 0)",
  yellowAccessible:
    colorScheme === "dark" ? "rgb(255, 212, 38)" : "rgb(178, 80, 0)",

  green: colorScheme === "dark" ? "rgb(48, 209, 88)" : "rgb(52, 199, 89)",
  greenAccessible:
    colorScheme === "dark" ? "rgb(48, 219, 91)" : "rgb(36, 138, 61)",

  mint: colorScheme === "dark" ? "rgb(102, 212, 207)" : "rgb(0, 199, 190)",
  mintAccessible:
    colorScheme === "dark" ? "rgb(102, 212, 207)" : "rgb(12, 129, 123)",

  teal: colorScheme === "dark" ? "rgb(64, 200, 224)" : "rgb(48, 176, 199)",
  tealAccessible:
    colorScheme === "dark" ? "rgb(93, 230, 255)" : "rgb(0, 130, 153)",

  cyan: colorScheme === "dark" ? "rgb(100, 210, 255)" : "rgb(50, 173, 230)",
  cyanAccessible:
    colorScheme === "dark" ? "rgb(112, 215, 255)" : "rgb(0, 113, 164)",

  blue: colorScheme === "dark" ? "rgb(10, 132, 255)" : "rgb(0, 122, 255)",
  blueAccessible:
    colorScheme === "dark" ? "rgb(64, 156, 255)" : "rgb(0, 64, 221)",

  indigo: colorScheme === "dark" ? "rgb(94, 92, 230)" : "rgb(88, 86, 214)",
  indigoAccessible:
    colorScheme === "dark" ? "rgb(125, 122, 255)" : "rgb(54, 52, 163)",

  purple: colorScheme === "dark" ? "rgb(191, 90, 242)" : "rgb(175, 82, 222)",
  purpleAccessible:
    colorScheme === "dark" ? "rgb(218, 143, 255)" : "rgb(137, 68, 171)",

  pink: colorScheme === "dark" ? "rgb(255, 55, 95)" : "rgb(255, 45, 85)",
  pinkAccessible:
    colorScheme === "dark" ? "rgb(255, 100, 130)" : "rgb(211, 15, 69)",

  brown: colorScheme === "dark" ? "rgb(172, 142, 104)" : "rgb(165, 132, 94)",
  brownAccessible:
    colorScheme === "dark" ? "rgb(181, 148, 105)" : "rgb(127, 101, 69)",
};

export default colors;
