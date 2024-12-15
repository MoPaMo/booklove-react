import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Container from "@/components/DefaultBGProvider";
import colors from "@/utils/colors";
import { Dimensions } from "react-native";
import FeedbackComponent from "@/components/feed/FeedbackComponent";
import HeaderTitle from "@/components/headerTitle";
let { width, height } = Dimensions.get("window");
export default function AboutScreen() {
  return (
    <Container>
      <HeaderTitle color={colors.orange}>Your Books</HeaderTitle>
      <FeedbackComponent />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },

  topSection: {
    paddingTop: width < 700 ? height * 0.2 : height * 0.1,
    justifyContent: "flex-end",
    paddingBottom: 10, // Add padding if needed
  },
  header: {
    flexWrap: "wrap",
    fontSize: 64,
    color: colors.orange,
    textAlign: "left",
    lineHeight: 64,
    fontFamily: "PlayfairDisplay_900Black",
    flex: 1,
  },
});
