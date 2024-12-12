import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Container from "@/components/DefaultBGProvider";
export default function AboutScreen() {
  return (
    <Container>
      <Text style={styles.text}>
        Your actual content here .....
        oluptatem. Aperiam laboriosam quo in.
      </Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  text: {
    fontSize: 16,
    textAlign: "left",
  },
});
