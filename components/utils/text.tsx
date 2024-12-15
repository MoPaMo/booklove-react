import React from "react";
import { Text as RNText, StyleSheet } from "react-native"; // rename to avoid conflict with custom
import colors from "@/utils/colors";

interface TextProps {
  design?: "serif" | "sansSerif" | "mono";
  style?: any;
  children: React.ReactNode;
}

const Text = (props: TextProps) => {
  const { design = "sansSerif", style, children, ...rest } = props;

  const designs = {
    serif: { fontFamily: "PlayfairDisplay_400Regular" },
    sansSerif: { fontFamily: "Raleway_400Regular" },
    mono: { fontFamily: "RobotoMono_400Regular" },
  };

  return (
    <RNText style={[styles.text, design && designs[design], style]} {...rest}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Raleway_400Regular",
    fontSize: 16,
    color: colors.primaryText,
  },
});

export default Text;
