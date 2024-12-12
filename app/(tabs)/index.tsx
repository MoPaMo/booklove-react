import { Text, View, StyleSheet } from "react-native";
import FeedbackView from "@/components/feed/FeedbackView";
import Container from "@/components/DefaultBGProvider";
export default function Feed() {
  return (
    <Container>
      <Text style={styles.text}>Feed</Text>
      <FeedbackView />
    </Container>
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
