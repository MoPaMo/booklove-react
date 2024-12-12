import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import colors from "@/utils/colors";

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  children: string;
}

const Button: React.FC<ButtonProps> = ({ onPress, children }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: colors.blue,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: "center",
  },
  text: {
    color: colors.blue,
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Button;
