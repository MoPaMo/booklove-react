import { Text, View, StyleSheet } from "react-native";

import FeedbackView from "@/components/feed/FeedbackComponent";
import Container from "@/components/DefaultBGProvider";
import BookLoveLogo from "@/components/booklovelogo";
import BookQuizView from "@/components/feed/QuizItem";
export default function Feed() {
  return (
    <Container>

      <Text style={styles.text}>Feed</Text>
      <FeedbackView />
      <BookQuizView triggerSearch={()=>{}}/>
      <BookQuizView triggerSearch={()=>{}}/>
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
