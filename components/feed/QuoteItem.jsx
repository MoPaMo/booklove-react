import React, { useState } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled, { useTheme } from "styled-components/native";
import SimpleAvatar from "@/components/SimpleAvatar";
import QuoteOpen from "@/assets/icons/quoteOpen";
import QuoteClose from "@/assets/icons/quoteClose";
import { Link } from "expo-router";

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
  flex-grow: 1;
  flex: 1;
  margin-right: 20px;
`;

const QuoteText = styled.Text`
  font-family: "PlayfairDisplay_400Regular";
  color: ${(props) => props.theme.primaryText};
  font-size: 30px;
  margin-bottom: 20px;
`;

const CharacterText = styled.Text`
  font-family: "Raleway_400Regular";
  color: ${(props) => props.theme.primaryText};
  font-size: 18px;
  font-style: italic;
  margin-bottom: 10px;
  align-self: flex-end;
`;

const BookTitle = styled.Text`
  font-family: "PlayfairDisplay_400Regular";
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.red};
  margin-bottom: 5px;
`;

const BookInfo = styled.Text`
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
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-around;
  color: ${(props) => props.theme.primaryText};
`;

const ActionButton = styled.TouchableOpacity`
  padding: 10px;
  color: ${(props) => props.theme.primaryText};
`;

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
      <Link to={`/book/${data.id}`}>
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

          <ProfileImageContainer>
            <SimpleAvatar
              size={60}
              source={{ uri: data.user.profile_image_url }}
              style={styles.profileImage}
            />
          </ProfileImageContainer>
        </Card>
      </Link>

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

export default QuoteItem;
