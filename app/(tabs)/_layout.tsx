import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View } from "react-native";
import colors from "@/utils/colors";
import styled from "styled-components/native";

const TabBarStyle = styled(Tabs)`
  shadow-color: #25292e00;
  background-color: #25292e00;
  border-top-color: #25292e00;
  border-top-width: 0;
`;

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: colors.blue,
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
            <Ionicons name="person-circle-outline" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
