import styled, {useTheme} from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-horizontal: 10px;
`;

const Button = styled.TouchableOpacity`
  flex: 1;
  height: 53px;
  align-items: center;
  background-color: ${(props) => props.theme.CleanBG}fe;
  border-radius: 21px;
  padding: 16px;
  margin-horizontal: 8px;
  shadow-color: #000;
  shadow-offset: 4px 4px;
  shadow-radius: 1px;
  elevation: 5;
  background-color: ${(props) => props.theme.CleanBG}fe;
`;

const BookButtonStack = ({ bookItem }) => {
  const [liked, setLiked] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);
    const colorTheme = useTheme();
  const handleLikePress = () => {
    setLiked(!liked);
    //likeBook(bookItem.id, !liked);
  };

  const handleCartPress = async () => {
    setIsButtonPressed(true);
    await new Promise((resolve) => setTimeout(resolve, 200));
    setIsButtonPressed(false);

    /*const userDefaults = await AsyncStorage.getItem('vendorURL');
        if (userDefaults) {
            Linking.openURL(`${userDefaults}${bookItem.title}`);
        } else {
            Linking.openURL(`https://www.amazon.com/s?k=${bookItem.title}`);
        }*/
  };

  const likeBook = (id, like) => {
    console.log(`Liked book with ID ${id}: ${like}`);
  };

  return (
    <Container>
      <Button
        style={{
          backgroundColor: (liked ? colorTheme.red : colorTheme.CleanBG),
          shadowOpacity: (liked ? 0 : 0.2),
        }}
        onPress={handleLikePress}
      >
        <Ionicons
          name={liked ? "bookmark" : "bookmark-outline"}
          size={20}
          color={liked ? colorTheme.CleanBG : colorTheme.black}
        />
      </Button>
      <Button
        style={{
          shadowOpacity: isButtonPressed ? 0 : 0.2,
          transform: [{ scale: isButtonPressed ? 0.9 : 1 }],
        }}
        onPress={handleCartPress}
        onPressIn={() => setIsButtonPressed(true)}
        onPressOut={() => setIsButtonPressed(false)}
      >
        <Ionicons
          name="cart-outline"
          size={20}
          color={colorTheme.black}
        />
      </Button>
    </Container>
  );
};

export default BookButtonStack;