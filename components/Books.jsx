import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Share,
  Linking,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Shadow from "react-native-shadow-2";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import Clipboard from "@react-native-community/clipboard";
import * as Font from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import colors from "@/utils/colors";

const bookItem = {
  id: "933952f3-a265-4dc0-b2f6-0179c7e29529",
  title: "Pride and Prejudice",
  author: "Jane Austen",
  year: "1813",
};
const fullText =
  "Mr Bennet, owner of the Longbourn estate in Hertfordshire, has five daughters, but his property is entailed and can only be passed to a male heir. His wife also lacks an inheritance, so his family faces... more";
const bookGenres = ["Classic", "Romance", "Fiction"];
const isbn = "978-0141439518";

const Book = ({ route }) => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [isSheetPresented, setIsSheetPresented] = useState(false);

  const handleBuyPress = () => {
    setIsButtonPressed(true);
    setTimeout(() => setIsButtonPressed(false), 200);

    const amazonSearchURL = `https://www.amazon.com/s?k=${bookItem.title}`;
    Linking.openURL(amazonSearchURL);
  };

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `Check out this book on booklove: ${bookItem.title} by ${bookItem.author}`,
        url: `booklove://book/?id=${bookItem.id}`,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleReport = () => {
    console.log("Report book:", bookItem.id);
  };

  const handleAddQuote = () => {
    navigation.navigate("QuoteAdd", { bookId: bookItem.id });
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        {/* Loading skeleton */}
        <ShimmerPlaceHolder autoRun={true} style={styles.loadingTitle} />
        <ShimmerPlaceHolder autoRun={true} style={styles.loadingAuthor} />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{bookItem.title}</Text>
        <Text
          style={styles.author}
        >{`${bookItem.author}, ${bookItem.year}`}</Text>

        <View style={styles.divider} />

        <TouchableOpacity onPress={() => setIsSheetPresented(true)}>
          <Text style={styles.description}>
            {fullText.length > 200
              ? fullText.substring(0, 200) + "... more"
              : fullText}
          </Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <Shadow
            distance={5}
            startColor={colors.shadowLight}
            endColor={colors.shadowDark}
            offset={[0, 2]}
          >
            <TouchableOpacity
              style={[styles.button, liked && styles.buttonLiked]}
              onPress={handleLikePress}
            >
              <Ionicons
                name="bookmark"
                size={24}
                color={liked ? colors.white : colors.primaryText}
              />
            </TouchableOpacity>
          </Shadow>

          <Shadow
            distance={5}
            startColor={colors.shadowLight}
            endColor={colors.shadowDark}
            offset={[0, 2]}
          >
            <TouchableOpacity style={styles.button} onPress={handleBuyPress}>
              <Ionicons name="cart" size={24} color={colors.primaryText} />
            </TouchableOpacity>
          </Shadow>
        </View>

        <View style={styles.divider} />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.genresContainer}
        >
          {bookGenres.map((genre) => (
            <View key={genre} style={styles.genrePill}>
              <Text style={styles.genreText}>{genre}</Text>
            </View>
          ))}
        </ScrollView>

        <Text style={styles.isbn}>ISBN: {isbn}</Text>

        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.button} onPress={handleAddQuote}>
            <Text style={styles.buttonText}>Add a Quote</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleReport}>
            <Text style={[styles.buttonText, styles.reportText]}>Report</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.comingSoon}>
        <Ionicons
          name="information-circle"
          size={18}
          color={colors.primaryText}
        />{" "}
        More content coming soon
      </Text>{" "}
      {/* Sheet for full text */}
      {isSheetPresented && (
        <View style={styles.sheet}>
          <Text style={styles.sheetText}>{fullText}</Text>
          <TouchableOpacity onPress={() => setIsSheetPresented(false)}>
            <Text style={styles.sheetClose}>Close</Text>
          </TouchableOpacity>
        </View>
      )}
      {/* Top right menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={handleShare}>
          <Ionicons name="share-social" size={24} color={colors.primaryText} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleReport}>
          <Ionicons name="flag" size={24} color={colors.red} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Book;
