import React from "react";
import { Stack } from "expo-router";
import { View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import {
  PlayfairDisplay_900Black,
  PlayfairDisplay_400Regular,
  PlayfairDisplay_700Bold,
  Raleway_300Light,
  Raleway_400Regular,
  Raleway_700Bold,
  RobotoMono_400Regular,
} from "@expo-google-fonts/dev";
import { ThemeProvider } from "@/context/ThemeContext";
import ThemeWrapper from "@/context/ThemeWrapper";

export default function RootLayout() {
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_900Black,
    PlayfairDisplay_700Bold,
    PlayfairDisplay_400Regular,
    Raleway_300Light,
    Raleway_400Regular,
    Raleway_700Bold,
    RobotoMono_400Regular
  });

  if (!fontsLoaded) {
    return (
      <ActivityIndicator
        size="large"
        style={{ flex: 1, justifyContent: "center" }}
      />
    );
  }

  return (
    <ThemeProvider>
      <ThemeWrapper>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </ThemeWrapper>
    </ThemeProvider>
  );
}
