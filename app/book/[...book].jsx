import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import {
  PlayfairDisplay_900Black,
  PlayfairDisplay_400Regular,
  PlayfairDisplay_700Bold,
} from "@expo-google-fonts/dev";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_700Bold,
  });

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Pride and Prejudice</Text>
      <Text style={styles.author}>Jane Austen, 1813</Text>

      <Text style={styles.description}>
        Mr Bennet, owner of the Longbourn estate in Hertfordshire, has five
        daughters, but his property is entailed and can only be passed to a male
        heir. His wife also lacks an inheritance, so his family faces...{" "}
        <Text style={styles.more}>more</Text>
      </Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="bookmark-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="cart-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.readBy}>Read by</Text>
      <View style={styles.profileIcons}>
        <Ionicons name="person-circle-outline" size={30} color="black" />
        <Ionicons name="person-circle-outline" size={30} color="black" />
        <Ionicons name="person-circle-outline" size={30} color="black" />
        <Ionicons name="person-circle-outline" size={30} color="black" />
      </View>

      <View style={styles.comment}>
        <Ionicons name="person-circle-outline" size={40} color="black" />
        <Text style={styles.commentText}>
          <Text style={styles.commentAuthor}>Amazing! ~</Text> Jane
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  time: {
    fontFamily: "PlayfairDisplay_400Regular",
    fontSize: 16,
  },
  networkIcons: {
    flexDirection: "row",
  },
  networkIcon: {
    fontSize: 16,
    marginHorizontal: 5,
  },
  downloadIcon: {
    width: 20,
    height: 20,
  },
  title: {
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 24,
    marginBottom: 5,
  },
  author: {
    fontFamily: "PlayfairDisplay_400Regular",
    fontSize: 16,
    marginBottom: 10,
  },
  description: {
    fontFamily: "PlayfairDisplay_400Regular",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  more: {
    color: "blue",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  button: {
    padding: 10,
  },
  buttonIcon: {
    width: 24,
    height: 24,
  },
  readBy: {
    fontFamily: "PlayfairDisplay_400Regular",
    fontSize: 16,
    marginBottom: 10,
  },
  profileIcons: {
    flexDirection: "row",
    marginBottom: 20,
  },
  profileIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
  comment: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  commentProfileIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  commentText: {
    fontFamily: "PlayfairDisplay_400Regular",
    fontSize: 16,
  },
  commentAuthor: {
    fontFamily: "PlayfairDisplay_700Bold",
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 10,
  },
  bottomBarItem: {
    alignItems: "center",
  },
  bottomBarIcon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  bottomBarText: {
    fontFamily: "PlayfairDisplay_400Regular",
    fontSize: 12,
  },
});
