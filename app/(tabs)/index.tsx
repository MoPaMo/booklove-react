import { Text, View, StyleSheet } from "react-native";

import FeedbackView from "@/components/feed/FeedbackComponent";
import Container from "@/components/DefaultBGProvider";
import BookLoveLogo from "@/components/booklovelogo";
export default function Feed() {
  return (
    <Container>
      <BookLoveLogo />
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
