import React from "react";
import { View, Image, StyleSheet } from "react-native";

const UserStack = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/memoji.png")}
        style={[styles.image, { marginLeft: 0 }]}
      />
      <Image
        source={require("../assets/images/memoji.png")}
        style={styles.image}
      />
      <Image
        source={require("../assets/images/memoji.png")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginLeft: -20,
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 5000,
    backgroundColor: "#fff",
  },
});

export default UserStack;
