import React from 'react';
import { Stack } from 'expo-router';
import { View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';


export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Butler: require('../assets/fonts/Butler-Free-Blk.otf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" style={{ flex: 1, justifyContent: 'center' }} />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="about" options={{ title: 'About', headerTitleStyle: { fontFamily: 'Butler' } }} />
    </Stack>
  );
}