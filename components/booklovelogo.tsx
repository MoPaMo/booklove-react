import React from "react";
import { View, Text } from "react-native";
const BookLoveLogo: React.FC = () => {
  return (
    <View
      style={{
        fontFamily: "PlayfairDisplay_900Black",
        color: "#000",
        textAlign: "center",
        fontSize: "clamp(24px, 5vw, 48px)",
      }}
    >
      <Text>booklove </Text>
    </View>
  );
};

export default BookLoveLogo;
