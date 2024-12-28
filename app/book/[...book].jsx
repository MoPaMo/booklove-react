import React from "react";
import { Ionicons } from "@expo/vector-icons";
import colors from "@/utils/colors";
import HeaderTitle from "@/components/headerTitle";
import BookButtonStack from "@/components/BookButtonStack";
import Container from "@/components/DefaultBGProvider";
import Text from "@/components/utils/text";
import UserStack from "@/components/userStack";
import styled from "styled-components/native";

const StyledContainer = styled(Container)`
  flex: 1;
`;

const Header = styled(HeaderTitle)`
  color: ${(props) => props.theme.cyan};
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
  line-height: 24px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.primaryText};
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
  return (
    <StyledContainer>
      <Header>Pride and Prejudice</Header>
      <AuthorText>Jane Austen, 1813</AuthorText>
      <Divider />
      <Description>
        Mr Bennet, owner of the Longbourn estate in Hertfordshire, has five
        daughters, but his property is entailed and can only be passed to a male
        heir. His wife also lacks an inheritance, so his family faces...{" "}
        <MoreText>more</MoreText>
      </Description>

      <BookButtonStack />
      <Divider />

      <ReadByGroup>
        <ReadByText>Read by </ReadByText>
        <UserStack />
      </ReadByGroup>

      <Text design="sansSerif" weight="bold" style={styles.readBy}>
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
