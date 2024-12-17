import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import * as Font from "expo-font";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Ionicons } from "@expo/vector-icons";

const fetchQuotes = async () => {
  return [
    {
      id: "1",
      quote:
        "You must allow me to tell you how ardently I admire and love you.",
      character: "Mr. Darcy",
      book: {
        id: "101",
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
      },
      liked: false,
      user: {
        id: "user1",
        name: "User One",
        profile_image_url: "https://via.placeholder.com/150",
      },
      bookSaved: false,
    },
    {
      id: "2",
      quote: "There is no charm equal to tenderness of heart.",
      character: "Jane Austen",
      book: {
        id: "102",
        title: "Emma",
        author: "Jane Austen",
        year: 1815,
      },
      liked: true,
      user: {
        id: "user2",
        name: "User Two",
        profile_image_url: "https://via.placeholder.com/150",
      },
      bookSaved: true,
    },
  ];
};

const QuoteItem = ({ data }) => {
  const [liked, setLiked] = useState(data.liked);
  const [bookSaved, setBookSaved] = useState(data.bookSaved);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleSaveBook = () => {
    setBookSaved(!bookSaved);
  };

  let [fontsLoaded] = useFonts({
    PlayfairDisplay: require("./assets/fonts/PlayfairDisplay-Regular.ttf"),
    RobotoMono: require("./assets/fonts/RobotoMono-Regular.ttf"),
    Raleway: require("./assets/fonts/Raleway-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.quoteContainer}>
      <View style={styles.card}>
        <View style={styles.quoteContent}>
          <Text style={styles.quoteText}>
            <Ionicons name="quote-opening" size={24} color="black" />
            {data.quote}
            <Ionicons name="quote-closing" size={24} color="black" />
          </Text>
          {data.character && (
            <Text style={styles.characterText}>~ {data.character}</Text>
          )}
          <Text style={styles.bookTitle}>{data.book.title}</Text>
          <Text style={styles.bookInfo}>
            {data.book.author}, {data.book.year}
          </Text>
        </View>

        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: data.user.profile_image_url }}
            style={styles.profileImage}
          />
        </View>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={handleLike} style={styles.actionButton}>
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={32}
            color={liked ? "red" : "black"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSaveBook} style={styles.actionButton}>
          <Ionicons
            name={bookSaved ? "bookmark" : "bookmark-outline"}
            size={32}
            color={bookSaved ? "orange" : "black"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const flatListRef = useRef(null);

  useEffect(() => {
    const loadQuotes = async () => {
      const fetchedQuotes = await fetchQuotes();
      setQuotes(fetchedQuotes);
      setIsLoading(false);
    };

    loadQuotes();
  }, []);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    console.log("Visible items:", viewableItems);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={quotes}
        renderItem={({ item }) => <QuoteItem data={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  quoteContainer: {
    flex: 1,
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 20,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "80%",
    height: "80%",
  },
  quoteContent: {
    flex: 1,
    alignItems: "flex-start",
  },
  quoteText: {
    fontFamily: "PlayfairDisplay",
    fontSize: 30,
    marginBottom: 20,
  },
  characterText: {
    fontFamily: "Raleway",
    fontSize: 18,
    fontStyle: "italic",
    marginBottom: 10,
    alignSelf: "flex-end",
  },
  bookTitle: {
    fontFamily: "RobotoMono",
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
    marginBottom: 5,
  },
  bookInfo: {
    fontFamily: "RobotoMono",
    fontSize: 16,
  },
  profileImageContainer: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  actionsContainer: {
    position: "absolute",
    bottom: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  actionButton: {
    padding: 10,
  },
});

export default Quotes;
