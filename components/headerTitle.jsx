import { View, Text, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
export default function HeaderTitle({ children, color, height: h = 0.1 }) {
  let { width, height } = Dimensions.get("window");
  const styles = StyleSheet.create({
    topSection: {
      paddingTop: width < 700 ? h * height * 2 : h * height,
      justifyContent: "flex-end",
      paddingBottom: 10,
    },
    header: {
      flexWrap: "wrap",
      fontSize: 48,
      color: color,
      textAlign: "left",
      lineHeight: 48,
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
