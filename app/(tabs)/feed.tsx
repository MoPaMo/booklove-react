import { Text, View, StyleSheet } from "react-native";
import FeedbackView from "@/components/feed/FeedbackView";
export default function Feed() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Feed</Text>
        <FeedbackView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
