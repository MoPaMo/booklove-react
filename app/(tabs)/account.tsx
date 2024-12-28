import styled, {useTheme} from "styled-components/native";
import {Text} from "react-native";
import Container from "@/components/DefaultBGProvider";
import { Link } from 'expo-router';
import HeaderTitle from "@/components/headerTitle";

const ContainerStyled = styled(Container)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.CleanBG};
`;



const TextStyled = styled(Text)`
  font-size: 18px;
  color: ${(props) => props.theme.primaryText};
`; 

const Account = () => {
    const color = useTheme();
  return (
    <ContainerStyled>
        <HeaderTitle color={color.green}>Your Account</HeaderTitle>
      <Link href="/book/a">a book</Link>
    </ContainerStyled>
  ); 
};

export default Account;
