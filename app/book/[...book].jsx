import React, { useState, useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import colors from "@/utils/colors";
import HeaderTitle from "@/components/headerTitle";
import BookButtonStack from "@/components/BookButtonStack";
import Container from "@/components/DefaultBGProvider";
import Text from "@/components/utils/text";
import UserStack from "@/components/userStack";
import styled, { useTheme } from "styled-components/native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";

// Enable LayoutAnimation on Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const StyledContainer = styled(Container)`
  flex: 1;
`;

const AuthorText = styled(Text)`
  font-family: "Raleway_300Light";
  font-size: 16px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.primaryText};
`;

const Divider = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.gray};
  margin-bottom: 10px;
  margin-top: 10px;
  width: 80%;
  align-self: center;
`;

const Description = styled(Text)`
  font-family: "PlayfairDisplay_400Regular";
  font-size: 16px;
  color: ${(props) => props.theme.primaryText};
  max-height: ${(props) => (props.isExpanded ? "500px" : "100px")};
  background-color: ${(props) =>
    props.isExpanded ? props.theme.CleanBG + "5f" : "transparent"};
  padding: ${(props) => (props.isExpanded ? "5px" : "0px")};
  margin-bottom: ${(props) => (props.isExpanded ? "5px" : "0px")};
  border-radius: 10px;
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

const MoreText = styled(Text)`
  color: ${(props) => props.theme.blue};
  font-weight: 800;
`;

const ReadByGroup = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

const ReadByText = styled(Text)`
  font-size: 16px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.primaryText};
`;

const Comment = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const CommentText = styled(Text)`
  font-family: "PlayfairDisplay_400Regular";
  font-size: 16px;
  color: ${(props) => props.theme.primaryText};
`;

const CommentAuthor = styled(Text)`
  font-family: "PlayfairDisplay_700Bold";
`;

const Book = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const color = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { book } = route.params || {};
  const text =
    'Mr Bennet, owner of the Longbourn estate in Hertfordshire, has five daughters, but his property is entailed and can only be passed to a male heir. His wife also lacks an inheritance, so his family faces becoming poor upon his death. Thus, it is imperative that at least one of the daughters marry well to support the others, which is a primary motivation driving the plot. Pride and Prejudice has consistently appeared near the top of lists of "most-loved books" among literary scholars and the reading public. It has become one of the most popular novels in English literature, with over 20 million copies sold, and has inspired many derivatives in modern literature.[1][2] For more than a century, dramatic adaptations, reprints, unofficial sequels, films, and TV versions of Pride and Prejudice have portrayed the memorable characters and themes of the novel, reaching mass audiences';

  useLayoutEffect(() => {
    navigation.setOptions({
      title: book?.title || "Book Details",
      headerBackTitle: "Back",
    });
  }, [navigation, book]);

  const toggleExpansion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };

  return (
    <StyledContainer>
      <HeaderTitle color={color.cyan}>Pride and Prejudice</HeaderTitle>
      <AuthorText>Jane Austen, 1813</AuthorText>
      <Divider />
      <Description isExpanded={isExpanded} onPress={toggleExpansion}>
        {isExpanded ? text + " " : `${text.substring(0, 100)}... `}
        <MoreText>{isExpanded ? " less" : " more"}</MoreText>
      </Description>

      <BookButtonStack />
      <Divider />

      <ReadByGroup>
        <ReadByText>Read by </ReadByText>
        <UserStack />
      </ReadByGroup>

      <Text design="sansSerif" weight="bold">
        Comments
      </Text>
      <Comment>
        <Ionicons name="person-circle-outline" size={40} color="black" />
        <CommentText>
          <CommentAuthor>Amazing!</CommentAuthor> Jane
        </CommentText>
      </Comment>
    </StyledContainer>
  );
};

export default Book;
