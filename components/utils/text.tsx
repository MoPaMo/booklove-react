import React from "react";
import { Text as RNText, StyleSheet } from "react-native";
import colors from "@/utils/colors";

interface TextProps {
  design?: "serif" | "sansSerif" | "mono";
  weight?:
    | "light"
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  style?: any;
  children: React.ReactNode;
}

const Text = (props: TextProps) => {
  const {
    design = "sansSerif",
    weight = "normal",
    style,
    children,
    ...rest
  } = props;

  const designs = {
    serif: {
      light: { fontFamily: "PlayfairDisplay_300Light" },
      normal: { fontFamily: "PlayfairDisplay_400Regular" },
      bold: { fontFamily: "PlayfairDisplay_700Bold" },
    },
    sansSerif: {
      light: { fontFamily: "Raleway_300Light" },
      normal: { fontFamily: "Raleway_400Regular" },
      bold: { fontFamily: "Raleway_700Bold" },
    },
    mono: {
      light: { fontFamily: "RobotoMono_300Light" },
      normal: { fontFamily: "RobotoMono_400Regular" },
      bold: { fontFamily: "RobotoMono_700Bold" },
    },
  };

  const fontWeightMapping: { [key in Exclude<TextProps['weight'], undefined>]: string } = {
      "100": "light",
      "200": "light",
      "300": "light",
      "400": "normal",
      "500": "normal",
      "600": "bold",
      "700": "bold",
      "800": "bold",
      "900": "bold",
      light: "light",
      normal: "normal",
      bold: "bold"
  };

  const fontWeight = fontWeightMapping[weight as keyof typeof fontWeightMapping] as keyof typeof designs.serif;

  return (
    <RNText
      style={[styles.text, design && designs[design][fontWeight], style]}
      {...rest}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: colors.primaryText,
  },
});

export default Text;
