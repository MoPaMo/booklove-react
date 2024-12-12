import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const redirect = async () => {
      router.push("/feed");
    };

    redirect();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Link href="/about" style={styles.button}>
        About
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    color: "#fff",
    marginTop: 20,
  },
});
