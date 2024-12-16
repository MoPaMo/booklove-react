import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Animated,
  Dimensions,
} from "react-native";
import { BlurView } from "expo-blur";

import CategoryButtons from "./CategoryPicker";
const { width, height } = Dimensions.get("window");

const SetupScreen = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [genres, setGenres] = useState([]);
  const [books, setBooks] = useState([]);
  const fadeAnim = useState(new Animated.Value(0))[0];

  const nextStep = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setStep(step + 1);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Animated.View style={{ opacity: fadeAnim }}>
            <BlurView intensity={50} style={styles.blurContainer}>
              <Text style={styles.label}>Enter your name</Text>
              <TextInput
                style={styles.input}
                placeholder="Your Name"
                value={name}
                onChangeText={setName}
              />
              <Button title="Next" onPress={nextStep} disabled={!name.trim()} />
            </BlurView>
          </Animated.View>
        );
      case 2:
        return (
          <Animated.View style={{ opacity: fadeAnim }}>
            <BlurView intensity={50} style={styles.blurContainer}>
              <Text style={styles.label}>
                Hi {name}, what genres do you like?
              </Text>
              <CategoryButtons />{" "}
              <Button
                title="Next"
                onPress={nextStep}
                disabled={genres.length === 0}
              />
            </BlurView>
          </Animated.View>
        );
      case 3:
        return (
          <Animated.View style={{ opacity: fadeAnim }}>
            <BlurView intensity={50} style={styles.blurContainer}>
              <Text style={styles.label}>Select some books you like</Text>

              <Button
                title="Finish"
                onPress={() => console.log({ name, genres, books })}
              />
            </BlurView>
          </Animated.View>
        );
      default:
        return null;
    }
  };

  return <View style={styles.container}>{renderStep()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f4f7",
  },
  blurContainer: {
    width: "80%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    alignItems: "center",
  },
  label: {
    fontSize: 20,
    marginBottom: 15,
    color: "#333",
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
});

export default SetupScreen;
