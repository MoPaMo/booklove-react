import React from "react";
import { Text as RNText, StyleSheet } from "react-native"; // rename to avoid conflict with custom
import colors from "@/utils/colors";
const Text = (props: any) => {
  return (
    <RNText {...props} style={[styles.text, props.style]}>
      {props.children}
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
