import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Linking } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const BookButtonStack = ({ bookItem }) => {
  const [liked, setLiked] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const handleLikePress = () => {
    setLiked(!liked);
    //likeBook(bookItem.id, !liked);
  };

  const handleCartPress = async () => {
    setIsButtonPressed(true);
    await new Promise((resolve) => setTimeout(resolve, 200));
    setIsButtonPressed(false);

    /*const userDefaults = await AsyncStorage.getItem('vendorURL');
        if (userDefaults) {
            Linking.openURL(`${userDefaults}${bookItem.title}`);
        } else {
            Linking.openURL(`https://www.amazon.com/s?k=${bookItem.title}`);
        }*/
  };

  const likeBook = (id, like) => {
    console.log(`Liked book with ID ${id}: ${like}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: liked ? "red" : "#fffa",
            shadowOpacity: liked ? 0 : 0.2,
          },
        ]}
        onPress={handleLikePress}
      >
        <Ionicons name={liked ? "bookmark" : "bookmark-outline" } size={20} color={liked ? "#fff" : "#000"} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          {
            shadowOpacity: isButtonPressed ? 0 : 0.2,
            transform: [{ scale: isButtonPressed ? 0.9 : 1 }],
          },
        ]}
        onPress={handleCartPress}
        onPressIn={() => setIsButtonPressed(true)}
        onPressOut={() => setIsButtonPressed(false)}
      >
        <Ionicons name="cart-outline" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
  },
  button: {
    flex: 1,
    height: 53,
    alignItems: "center",
    backgroundColor: "#fffe",
    borderRadius: 21,
    padding: 16,
    marginHorizontal: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 1,
    elevation: 5,
  },
});

export default BookButtonStack;
