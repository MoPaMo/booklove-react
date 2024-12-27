import React from "react";
import styled from "styled-components/native";
import { Text as RNText } from "react-native";
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

const StyledText = styled(RNText)<TextProps>`
  font-size: 16px;
  color: ${(props) => props.theme.primaryText};
`;

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

  const fontWeightMapping: {
    [key in Exclude<TextProps["weight"], undefined>]: string;
  } = {
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
    bold: "bold",
  };

  const fontWeight = fontWeightMapping[
    weight as keyof typeof fontWeightMapping
  ] as keyof typeof designs.serif;

  return (
    <StyledText
      style={[design && designs[design][fontWeight], style]}
      {...rest}
    >
      {children}
    </StyledText>
  );
};

export default Text;
