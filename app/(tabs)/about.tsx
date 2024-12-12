import { Text, View, StyleSheet } from "react-native";
import BackgroundBlurElement from "@/components/BackgroundBlurElement";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <BackgroundBlurElement />
      <View style={styles.content}>
        <Text style={styles.text}>
          Your actual content here ......
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    ...StyleSheet.absoluteFillObject, 
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1, 
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
});
