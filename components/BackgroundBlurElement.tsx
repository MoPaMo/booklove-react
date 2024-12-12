import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import { BlurView } from "expo-blur";

const { width, height } = Dimensions.get("window");

const BackgroundBlurElement = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/backgrounds/blur3.png")}
        style={[styles.image, styles.originalBG1]}
      />
      <Image
        source={require("@/assets/images/backgrounds/blur_hex.png")}
        style={[styles.image, styles.originalBG2]}
      />
      <BlurView intensity={8} style={StyleSheet.absoluteFill} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject, 
    zIndex: 0,
  },
  originalBG1: {
    position: "absolute",
    width: width * 0.61,
    top: 0,
    right: width * -0.1,
  },
  originalBG2: {
    position: "absolute",
    width: width * 0.79,
    left: width * -0.2,
    bottom: 28,
  },
  image: {
    resizeMode: "contain",
  },
});

export default BackgroundBlurElement;
