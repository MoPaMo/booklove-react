import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const fetchQuotes = async () => {
  return [
    {
      id: "1",
      quote:
        "You must allow me to tell you how ardently I admire and love you.",
      character: "Mr. Darcy",
      liked: false,
      bookSaved: false,
    },
    {
      id: "2",
      quote: "There is no charm equal to tenderness of heart.",
      character: "Jane Austen",
      liked: true,
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

  return (
    <View style={styles.quoteContainer}>
      <Text style={styles.quoteText}>{data.quote}</Text>
      <Text style={styles.characterText}>~ {data.character}</Text>
      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={handleLike} style={styles.actionButton}>
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={24}
            color={liked ? "red" : "black"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSaveBook} style={styles.actionButton}>
          <Ionicons
            name={bookSaved ? "bookmark" : "bookmark-outline"}
            size={24}
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

  useEffect(() => {
    const loadQuotes = async () => {
      const fetchedQuotes = await fetchQuotes();
      setQuotes(fetchedQuotes);
      setIsLoading(false);
    };

    loadQuotes();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={quotes}
        renderItem={({ item }) => <QuoteItem data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  quoteContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  quoteText: {
    fontSize: 18,
    marginBottom: 10,
  },
  characterText: {
    fontSize: 16,
    textAlign: "right",
    fontStyle: "italic",
    marginBottom: 10,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  actionButton: {
    marginLeft: 15,
  },
});

export default Quotes;
