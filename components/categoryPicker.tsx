import React, { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Button = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.selected ? props.theme.white : props.theme.black};
  border-radius: 10px;
  padding-vertical: 10px;
  padding-horizontal: 20px;
  margin: 5px;
`;

const ButtonText = styled(Text)`
  color: ${(props) => (props.selected ? props.theme.black : props.theme.white)};
  font-size: 16px;
  text-align: center;
`;

const CategoryButtons: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories: string[] = [
    "Non-Fiction",
    "Romance",
    "Mystery",
    "Thriller",
    "Young Adults",
    "Fantasy",
    "Classics",
    "Sci-Fi",
    "Adventure",
    "Comedy",
    "Horror",
    "Historical",
    "Self-Help",
    "Biography",
    "LGBT+",
    "Philosophy",
  ];

  const handleCategoryPress = (category: string) => {
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(category)) {
        return prevSelected.filter((c) => c !== category);
      } else {
        return [...prevSelected, category];
      }
    });
  };

  return (
    <Container>
      {categories.map((category) => (
        <Button
          key={category}
          selected={selectedCategories.includes(category)}
          onPress={() => handleCategoryPress(category)}
        >
          <ButtonText selected={selectedCategories.includes(category)}>
            {category}
          </ButtonText>
        </Button>
      ))}
    </Container>
  );
};

export default CategoryButtons;
