import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import styled from "styled-components/native";
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

  return (
    <QuoteContainer
      data-width={Dimensions.get("window").width}
      data-height={Dimensions.get("window").height}
    >
      <Card>
        <View style={styles.quoteContent}>
          <QuoteText>
            <Fontisto name="quote-a-right" size={24} color="black" />{" "}
            {data.quote}{" "}
            <Fontisto name="quote-a-left" size={24} color="black" />
          </QuoteText>
          <View style={{ flex: 1 }} />
          {data.character && <CharacterText>~ {data.character}</CharacterText>}
          <BookTitle>{data.book.title}</BookTitle>
          <BookInfo>
            {data.book.author}, {data.book.year}
          </BookInfo>
        </View>

        <ProfileImageContainer>
          <Image
            source={{ uri: data.user.profile_image_url }}
            style={styles.profileImage}
          />
        </ProfileImageContainer>
      </Card>

      <ActionsContainer>
        <ActionButton onPress={handleLike}>
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={32}
            color={liked ? "red" : "black"}
          />
        </ActionButton>
        <ActionButton onPress={handleSaveBook}>
          <Ionicons
            name={bookSaved ? "bookmark" : "bookmark-outline"}
            size={32}
            color={bookSaved ? "orange" : "black"}
          />
        </ActionButton>
      </ActionsContainer>
    </QuoteContainer>
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
      <LoadingContainer>
        <Text>Loading...</Text>
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <FlatList
        ref={flatListRef}
        data={quotes}
        renderItem={({ item }) => (
          <QuoteItem data={item} style={styles.large} />
        )}
        keyExtractor={(item) => item.id}
        horizontal={false}
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.CleanBG};
`;

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const QuoteContainer = styled.View`
  flex: 1;
  height: ${(props) => props["data-height"] * 0.8}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Card = styled.View`
  background-color: ${(props) => props.theme.CleanBG};
  color: ${(props) => props.theme.primaryText};
  border-radius: 20px;
  padding: 30px;
  shadow-color: ${(props) => props.theme.primaryText};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  width: 80%;
  margin-right: 20px;
`;

const QuoteText = styled(Text)`
  font-family: "PlayfairDisplay_400Regular";
  color: ${(props) => props.theme.primaryText};
  font-size: 30px;
  margin-bottom: 20px;
`;

const CharacterText = styled(Text)`
  font-family: "Raleway_400Regular";
  color: ${(props) => props.theme.primaryText};
  font-size: 18px;
  font-style: italic;
  margin-bottom: 10px;
  align-self: flex-end;
`;

const BookTitle = styled(Text)`
  font-family: "PlayfairDisplay_400Regular";
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.red};
  margin-bottom: 5px;
`;

const BookInfo = styled(Text)`
  font-family: "Raleway_400Regular";
  color: ${(props) => props.theme.primaryText};
  font-size: 16px;
`;

const ProfileImageContainer = styled.View`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const ActionsContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  width: 80%;
  color: ${(props) => props.theme.primaryText};
`;

const ActionButton = styled.TouchableOpacity`
  padding: 10px;
  color: ${(props) => props.theme.primaryText};
`;

const styles = StyleSheet.create({
  quoteContent: {
    flex: 1,
    alignItems: "flex-start",
  },
  profileImage: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

export default Quotes;
