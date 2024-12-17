import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const fetchQuotes = async () => {
  return [
    {
      id: "1",
      quote:
        "You must allow me to tell you how ardently I admire and love you.",
      character: "Mr. Darcy",
    },
    {
      id: "2",
      quote: "There is no charm equal to tenderness of heart.",
      character: "Jane Austen",
    },
  ];
};

const QuoteItem = ({ data }) => {
  return (
    <View style={styles.quoteContainer}>
      <Text style={styles.quoteText}>{data.quote}</Text>
      <Text style={styles.characterText}>~ {data.character}</Text>
    </View>
  );
};

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const loadQuotes = async () => {
      const fetchedQuotes = await fetchQuotes();
      setQuotes(fetchedQuotes);
    };

    loadQuotes();
  }, []);

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
  },
});

export default Quotes;
