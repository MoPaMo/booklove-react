import React from "react";
import { Stack } from "expo-router";
import { View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { PlayfairDisplay_900Black, DMSerifDisplay_400Regular } from "@expo-google-fonts/dev";

export default function RootLayout() {
  let [fontsLoaded] = useFonts({ PlayfairDisplay_900Black, DMSerifDisplay_400Regular});

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
      <Stack.Screen
        name="about"
        options={{ title: "About", headerTitleStyle: { fontFamily: "Butler" } }}
      />
    </Stack>
  );
}
