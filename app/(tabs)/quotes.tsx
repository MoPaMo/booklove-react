import { Text, View, StyleSheet } from "react-native";
import Container from "@/components/DefaultBGProvider";
export default function Quotes() {
  return (
    <Container>
      <Text style={styles.text}>Quotes</Text>
    </Container>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#fff',
    },
  });