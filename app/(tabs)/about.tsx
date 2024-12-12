import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Container from "@/components/DefaultBGProvider";
import colors from "@/utils/colors";
import { Dimensions } from "react-native";

let { width, height } = Dimensions.get("window");
export default function AboutScreen() {
  return (
    <Container>
      <View style={styles.topSection}>
        <Text style={[styles.header]}>Your Books</Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },

  topSection: {
    paddingTop: width < 700 ? height * 0.2: height * 0.1,
    justifyContent: "flex-end",
    paddingBottom: 10, // Add padding if needed
  },
  header: {
    flexWrap: "wrap",
    fontSize: 64,
    color: colors.orange,
    textAlign: "left",
    fontFamily: "PlayfairDisplay_900Black",
    lineHeight: 64,
    flex: 1,
  },
});
