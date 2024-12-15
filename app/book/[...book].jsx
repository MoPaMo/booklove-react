import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "@/utils/colors";
import HeaderTitle from "@/components/headerTitle";
import BookButtonStack from "@/components/BookButtonStack";
import Container from "@/components/DefaultBGProvider";
import Text from "@/components/utils/text";
import UserStack from "@/components/userStack";
export default function Book() {
  return (
    <Container>
      <HeaderTitle color={colors.blue}>Pride and Prejudice</HeaderTitle>
      <Text style={styles.author}>Jane Austen, 1813</Text>
      <View style={styles.divider} />
      <Text style={styles.description}>
        Mr Bennet, owner of the Longbourn estate in Hertfordshire, has five
        daughters, but his property is entailed and can only be passed to a male
        heir. His wife also lacks an inheritance, so his family faces...{" "}
        <Text style={styles.more}>more</Text>
      </Text>

      <BookButtonStack></BookButtonStack>
      <View style={styles.divider} />

      <Text style={styles.readBy}>Read by</Text>
      <UserStack />

      <View style={styles.comment}>
        <Ionicons name="person-circle-outline" size={40} color="black" />
        <Text style={styles.commentText}>
          <Text style={styles.commentAuthor}>Amazing! ~</Text> Jane
        </Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
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
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
    marginTop: 10,
    width: "80%",
    alignSelf: "center",
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
    fontFamily: "Raleway_300Light",
    fontSize: 16,
    marginBottom: 10,
  },
  description: {
    fontFamily: "PlayfairDisplay_400Regular",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  more: {
    color: "blue",
    fontWeight: "800",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
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
