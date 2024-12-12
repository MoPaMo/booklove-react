import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Container from "@/components/DefaultBGProvider";
export default function AboutScreen() {
  return (
    <Container>
      <Text style={styles.text}>
        <View style={styles.topSection}>
          <Text style={styles.h2}>Your List</Text>
        </View>
      </Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  h2: {
    fontSize: 24,
    textAlign: "left",
  },
  topSection: {
    height: 100,
    justifyContent: "flex-end"
  },
  text: {
    fontSize: 16,
    textAlign: "left",
  },
});
