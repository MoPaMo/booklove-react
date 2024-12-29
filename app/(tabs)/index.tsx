//feed page
import { Text, View, StyleSheet } from "react-native";

import FeedbackView from "@/components/feed/FeedbackComponent";
import Container from "@/components/DefaultBGProvider";
import BookLoveLogo from "@/components/booklovelogo";
import BookQuizView from "@/components/feed/QuizItem";
import HeaderTitle from "@/components/headerTitle";
import { Header } from "react-native/Libraries/NewAppScreen";
import styled, { useTheme } from "styled-components/native";
export default function Feed() {
  const theme = useTheme();
  return (
    <Container style={styles.container}>
      <HeaderTitle color={theme.blue}>Feed</HeaderTitle>
      <FeedbackView />
      <BookQuizView triggerSearch={() => {}} />
      <BookQuizView triggerSearch={() => {}} />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    flexGrow: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
