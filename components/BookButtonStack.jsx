import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';

const BookButtonStack = ({ bookItem }) => {
  const [liked, setLiked] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const handleLikePress = () => {
    setLiked(!liked);
    likeBook(bookItem.id, !liked);
  };

  const handleCartPress = async () => {
    setIsButtonPressed(true);
    await new Promise((resolve) => setTimeout(resolve, 200));
    setIsButtonPressed(false);

    const userDefaults = await AsyncStorage.getItem('vendorURL');
    if (userDefaults) {
      Linking.openURL(`${userDefaults}${bookItem.title}`);
    } else {
      Linking.openURL(`https://www.amazon.com/s?k=${bookItem.title}`);
    }
  };

  const likeBook = (id, like) => {
    // Implement your like book functionality here
    console.log(`Liked book with ID ${id}: ${like}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: liked ? 'red' : '#fff', shadowOpacity: liked ? 0 : 0.2 },
        ]}
        onPress={handleLikePress}
        onPressIn={() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)}
      >
        <Feather name="bookmark" size={20} color={liked ? '#fff' : '#000'} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          { shadowOpacity: isButtonPressed ? 0 : 0.2, transform: [{ scale: isButtonPressed ? 0.9 : 1 }] },
        ]}
        onPress={handleCartPress}
        onPressIn={() => setIsButtonPressed(true)}
        onPressOut={() => setIsButtonPressed(false)}
      >
        <Feather name="shopping-cart" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 21,
    padding: 16,
    marginHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    elevation: 5,
  },
});

export default BookButtonStack;