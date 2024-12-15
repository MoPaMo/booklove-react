import { View, Text, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
export default function HeaderTitle({ children, color }) {
  let { width, height } = Dimensions.get("window");
  const styles = StyleSheet.create({
    topSection: {
      paddingTop: width < 700 ? height * 0.2 : height * 0.1,
      justifyContent: "flex-end",
      paddingBottom: 10,
    },
    header: {
      flexWrap: "wrap",
      fontSize: 64,
      color: color,
      textAlign: "left",
      lineHeight: 64,
      fontFamily: "PlayfairDisplay_900Black",
      flex: 1,
    },
  });
  return (
    <View style={styles.topSection}>
      <Text style={styles.header}>{children}</Text>
    </View>
  );
}
