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
});
