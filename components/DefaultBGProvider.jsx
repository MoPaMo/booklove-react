import { Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import BackgroundBlurElement from "@/components/BackgroundBlurElement";

export default function Container({ children, style=0 }) {
  return (
    <>
      <BackgroundBlurElement />
      <SafeAreaView style={styles.container}>
        <ScrollView>{children}</ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
});
