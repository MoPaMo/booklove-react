import { Text, View, StyleSheet } from "react-native";

import BackgroundBlurElement from "@/components/BackgroundBlurElement";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <BackgroundBlurElement option={5} />
      <View style={styles.content}>
        <Text>Your actual content here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });