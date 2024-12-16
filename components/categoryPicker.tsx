import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CategoryButtons = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [
    "Non-Fiction",
    "Romance",
    "Mystery",
    "Thriller",
    "Young Adults",
    "Fantasy",
    "Classics",
    "Sci-Fi",
    "Adventure",
    "Comedy",
    "Horror",
    "Historical",
    "Self-Help",
    "Biography",
    "LGBT+",
    "Philosophy",
  ];

  const handleCategoryPress = (category) => {
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(category)) {
        return prevSelected.filter((c) => c !== category);
      } else {
        return [...prevSelected, category];
      }
    });
  };

  return (
    <View style={styles.container}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          style={[
            styles.button,
            selectedCategories.includes(category) && styles.selectedButton,
          ]}
          onPress={() => handleCategoryPress(category)}
        >
          <Text
            style={[
              styles.buttonText,
              selectedCategories.includes(category) &&
                styles.selectedButtonText,
            ]}
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "black",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
  },
  selectedButton: {
    backgroundColor: "white",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  selectedButtonText: {
    color: "black",
  },
});

export default CategoryButtons;
