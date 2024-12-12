import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import { BlurView } from "expo-blur";

const { width, height } = Dimensions.get("window");

const BackgroundBlurElement = ({ option = 1 }) => {
  const renderBackground = () => {
    switch (option) {
      case 2:
        return (
          <>
            <View style={[styles.rectangle, styles.secondBackground]}>
              <Image
                source={require("@/assets/images/backgrounds/blur3.png")}
                style={styles.image}
              />
            </View>
            <View style={styles.circle}>
              <Image
                source={require("@/assets/images/backgrounds/blur1.png")}
                style={styles.image}
              />
            </View>
          </>
        );
      case 3:
        return <View style={styles.cleanBackground} />;
      case 5:
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
      default:
        return (
          <>
            <View style={[styles.rectangle, styles.defaultBackground]}>
              <Image
                source={require("@/assets/images/backgrounds/blur_base.jpeg")}
                style={styles.image}
              />
            </View>
            <View style={styles.hexBackground}>
              <Image
                source={require("@/assets/images/backgrounds/blur_hex.png")}
                style={styles.image}
              />
            </View>
          </>
        );
    }
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
  secondBackground: {
    // Specific styles for second background
  },
  thirdBackground: {
    // Specific styles for third background
  },
  cleanBackground: {
    // Styles for clean background
  },
  originalBG1: {
    width: width * 0.61,
    top: -height * 0.08,
    left: width * 0.29,
  },
  originalBG2: {
    width: width * 0.79,
    left: -width * 0.225,
    top: 280,
  },
  hexBackground: {
    position: "absolute",
    width: 375.42,
    height: 341.27,
    borderRadius: 65,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 5 },
    transform: [{ rotate: "-6.25deg" }],
    top: 300,
    left: 130,
    blur: 6,
  },
  circle: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: 150,
    top: 280,
    left: -120,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  wavyShape: {
    position: "absolute",
    width: 350,
    height: 250,
    top: 200,
    left: 150,
    transform: [{ rotate: "-15deg" }],
    resizeMode: "cover",
  },
});

export default BackgroundBlurElement;
