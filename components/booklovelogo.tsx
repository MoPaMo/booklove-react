import styled from "styled-components/native";

const LogoContainer = styled.View`
  font-family: "PlayfairDisplay_900Black";
  color: ${(props) => props.theme.primaryText};
  text-align: center;
  font-size: 5vw;
`;

const BookLoveLogo: React.FC = () => {
  return (
    <LogoContainer>
      <Text>booklove </Text>
    </LogoContainer>
  );
};

export default BookLoveLogo;
