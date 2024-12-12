import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import { BlurView } from "expo-blur";

const { width, height } = Dimensions.get("window");

const BackgroundBlurElement = ({ option = 1 }) => {
  const renderBackground = () => {
    return (
      <>
        <Image
          source={require("@/assets/images/backgrounds/blur3.png")}
          style={[styles.image, styles.originalBG1]}
        />
        <Image
          source={require("@/assets/images/backgrounds/blur_hex.png")}
          style={[styles.image, styles.originalBG2]}
        />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <BlurView intensity={50} style={StyleSheet.absoluteFill} />
      {renderBackground()}
      {/* Actual content goes here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  rectangle: {
    position: "absolute",
    width: 307,
    height: 293,
    borderRadius: 65,
    shadowColor: "#FFFFFF",
    shadowOpacity: 0.25,
    shadowRadius: 3,
    shadowOffset: { width: -10, height: 4 },
    transform: [{ rotate: "-58.16deg" }],
    top: -300,
    left: -130,
    blur: 6,
  },

  originalBG1: {
    width: width * 0.61,
    top: -height * 0.08,
    right: -width * 0.5,
  },
  originalBG2: {
    width: width * 0.79,
    left: -width * 0.225,
    top: 28,
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default BackgroundBlurElement;
