// app/settings/book-vendor.jsx
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function BookVendor() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Vendor</Text>

      <View style={styles.grid}>
        <TouchableOpacity style={styles.vendorButton}>
          <Text style={styles.vendorText}>Amazon</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectedVendor}>
          <Text style={styles.vendorText}>eBay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.vendorButton}>
          <Text style={styles.vendorText}>bookshop.org</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.vendorButton}>
          <Text style={styles.vendorText}>Thrift Books</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.info}>We do not earn money from book sales.</Text>
      <TouchableOpacity>
        <Text style={styles.suggest}>Suggest A Vendor</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5F5",
    padding: 24,
  },
  title: {
    fontFamily: "PlayfairDisplay_400Regular",
    fontSize: 28,
    marginBottom: 32,
    textDecorationLine: "underline",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  vendorButton: {
    width: "45%",
    padding: 20,
    backgroundColor: "#FAFAFA",
    borderRadius: 12,
    marginBottom: 16,
    alignItems: "center",
  },
  selectedVendor: {
    width: "45%",
    padding: 20,
    backgroundColor: "#E0F0FF",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#007AFF",
    marginBottom: 16,
    alignItems: "center",
  },
  vendorText: {
    fontFamily: "Raleway_400Regular",
    fontSize: 18,
  },
  info: {
    fontFamily: "Raleway_400Regular",
    fontSize: 14,
    textAlign: "center",
    marginTop: 24,
  },
  suggest: {
    fontFamily: "Raleway_400Regular",
    fontSize: 16,
    color: "#007AFF",
    textAlign: "center",
    marginTop: 16,
  },
});
