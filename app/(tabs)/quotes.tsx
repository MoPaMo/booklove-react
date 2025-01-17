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
import Container from "@/components/DefaultBGProvider";
import { Ionicons } from "@expo/vector-icons";
import styled, { useTheme } from "styled-components/native";
import BackgroundBlurElement from "@/components/BackgroundBlurElement";
import SimpleAvatar from "@/components/SimpleAvatar";
import QuoteOpen from "@/assets/icons/quoteOpen";
import QuoteClose from "@/assets/icons/quoteClose";
import { Link } from "expo-router";

const Background = styled(BackgroundBlurElement)`
  flex: 1;
  overflow: hidden;
`;

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
    {
      id: "3",
      quote: "I declare after all there is no enjoyment like reading!",
      character: "Caroline Bingley",
      book: {
        id: "103",
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
      },
      liked: false,
      user: {
        id: "user3",
        name: "User Three",
        profile_image_url: "https://via.placeholder.com/150",
      },
      bookSaved: false,
    },
  ];
};

const QuoteItem = ({ data }) => {
  const [liked, setLiked] = useState(data.liked);
  const [bookSaved, setBookSaved] = useState(data.bookSaved);
  const theme = useTheme();
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
      <Link href={`/book/${data.book.id}`}>
        <Card>
          <View style={styles.quoteContent}>
            <QuoteText>
              <QuoteOpen fill={theme.primaryText} height={24} width={24} />{" "}
              {data.quote}{" "}
              <QuoteClose fill={theme.primaryText} height={24} width={24} />
            </QuoteText>
            <View style={{ flex: 1, flexGrow: 1 }} />
            {data.character && (
              <CharacterText>~ {data.character}</CharacterText>
            )}
            <BookTitle>{data.book.title}</BookTitle>
            <BookInfo>
              {data.book.author}, {data.book.year}
            </BookInfo>
          </View>
        </Card>
      </Link>

      <ActionsContainer>
        <ProfileImageContainer href={`/u/${data.user.id}`}>
          <SimpleAvatar
            size={60}
            source={{ uri: data.user.profile_image_url }}
            style={styles.profileImage}
          />
        </ProfileImageContainer>
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
    <>
      <Background />
      <SafeArea>
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
      </SafeArea>
    </>
  );
};
const Container2 = styled(Container)`
  flex: 1;
  flexgrow: 1;
  background-color: ${(props) => props.theme.CleanBG};
`;

const LoadingContainer = styled.View`
  flex: 1;
  flexgrow: 1;

  justify-content: center;
  align-items: center;
`;

const QuoteContainer = styled.View`
  flex: 1;
  flexgrow: 1;
  height: ${(props) => props["data-height"] * 0.8}px;
  min-height: 80vh;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const SafeArea = styled.SafeAreaView`
  flex: 1;
  flexgrow: 1;
`;

const Card = styled.View`
  background-color: ${(props) => props.theme.CleanBG}6f;
  color: ${(props) => props.theme.primaryText};
  border-radius: 20px;
  padding: 30px;
  shadow-color: ${(props) => props.theme.primaryText};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  flexgrow: 1;
  flex: 1;
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

const ProfileImageContainer = styled(Link)`
  z-index: 10;
`;

const ActionsContainer = styled.View`
  flexgrow: 1;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.primaryText};
`;

const ActionButton = styled.TouchableOpacity`
  padding: 10px;
  color: ${(props) => props.theme.primaryText};
`;

const styles = StyleSheet.create({
  quoteContent: {
    flex: 1,
    flexGrow: 1,

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
