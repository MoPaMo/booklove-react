import React from "react";
import { View, Image, StyleSheet } from "react-native";
import SimpleAvatar from "@/components/SimpleAvatar";
const UserStack = () => {
  return (
    <View style={styles.container}>
      {[...Array(5)].map((_, index) => (
        <SimpleAvatar
          key={index}
          size={50}
          source={require("@/assets/images/memoji.png")}
          style={{ marginLeft: index === 0 ? 0 : -20 }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default UserStack;
