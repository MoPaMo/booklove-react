import React from "react";
import { Tabs } from "expo-router";
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
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function RootLayout() {
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_900Black,
    PlayfairDisplay_700Bold,
    PlayfairDisplay_400Regular,
    Raleway_300Light,
    Raleway_400Regular,
    Raleway_700Bold,
    RobotoMono_400Regular,
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
        <Tabs
          initialRouteName="index"
          screenOptions={{
            tabBarActiveTintColor: "#eee",
            headerStyle: {
              backgroundColor: "#25292e",
            },
            headerShown: false,
            headerShadowVisible: false,
            headerTintColor: "#fff0",
            tabBarStyle: {
              shadowColor: "#25292e00",
              backgroundColor: "#25292e00",
              borderTopColor: "#25292e00",
              borderTopWidth: 0,
            },
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "Feed",
              tabBarIcon: ({ color, focused }) => (
                <Ionicons name="newspaper" color={color} size={24} />
              ),
            }}
          />

          <Tabs.Screen
            name="quotes"
            options={{
              title: "Quotes",
              tabBarIcon: ({ color, focused }) => (
                <MaterialCommunityIcons
                  name="comment-quote"
                  size={24}
                  color={color}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="about"
            options={{
              title: "List",
              tabBarIcon: ({ color, focused }) => (
                <Ionicons name="library" color={color} size={24} />
              ),
            }}
          />
          <Tabs.Screen
            name="account"
            options={{
              title: "Account",
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                  name="person-circle-outline"
                  color={color}
                  size={24}
                />
              ),
            }}
          />
        </Tabs>
      </ThemeWrapper>
    </ThemeProvider>
  );
}
