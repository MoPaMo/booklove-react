import React from "react";
import { Stack } from "expo-router";
import { View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { PlayfairDisplay_900Black } from "@expo-google-fonts/dev";

export default function RootLayout() {
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_900Black,
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
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
