import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  GestureResponderEvent,
} from "react-native";
import { BlurView } from "expo-blur";

import CategoryButtons from "./CategoryPicker";

const { width, height } = Dimensions.get("window");

const SetupScreen: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [genres, setGenres] = useState<string[]>([]);
  const [books, setBooks] = useState<string[]>([]);
  const fadeAnim = useState(new Animated.Value(0))[0];

  const nextStep = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setStep((prevStep) => prevStep + 1);
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
                accessibilityLabel="Name Input"
                accessibilityHint="Enter your full name"
              />
              <TouchableOpacity
                style={[styles.button, !name.trim() && styles.buttonDisabled]}
                onPress={nextStep}
                disabled={!name.trim()}
                accessibilityLabel="Next Button"
                accessibilityHint="Proceed to genre selection"
              >
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
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
              <CategoryButtons
                selectedGenres={genres}
                onSelect={setGenres}
                accessibilityLabel="Genre Picker"
                accessibilityHint="Select your favorite genres"
              />
              <TouchableOpacity
                style={[
                  styles.button,
                  genres.length === 0 && styles.buttonDisabled,
                ]}
                onPress={nextStep}
                disabled={genres.length === 0}
                accessibilityLabel="Next Button"
                accessibilityHint="Proceed to book selection"
              >
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </BlurView>
          </Animated.View>
        );
      case 3:
        return (
          <Animated.View style={{ opacity: fadeAnim }}>
            <BlurView intensity={50} style={styles.blurContainer}>
              <Text style={styles.label}>Select some books you like</Text>
              <CategoryButtons />

              <TouchableOpacity
                style={styles.button}
                onPress={() => console.log({ name, genres, books })}
                accessibilityLabel="Finish Button"
                accessibilityHint="Complete the setup process"
              >
                <Text style={styles.buttonText}>Finish</Text>
              </TouchableOpacity>
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
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  button: {
    width: "100%",
    padding: 12,
    borderRadius: 5,
    backgroundColor: "#000",
    alignItems: "center",
    marginTop: 10,
  },
  buttonDisabled: {
    backgroundColor: "#555",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default SetupScreen;
