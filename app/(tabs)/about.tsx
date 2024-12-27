import { Text, View, SafeAreaView, ScrollView } from "react-native";
import styled from "styled-components/native";
import Container from "@/components/DefaultBGProvider";
import colors from "@/utils/colors";
import { Dimensions } from "react-native";
import FeedbackComponent from "@/components/feed/FeedbackComponent";
import HeaderTitle from "@/components/headerTitle";
let { width, height } = Dimensions.get("window");

const Header = styled(HeaderTitle)`
  color: ${(props) => props.theme.orange};
`;

const ContainerStyled = styled(Container)`
  flex: 1;
  padding: 16px;
`;

const AboutScreen = () => {
  return (
    <ContainerStyled>
      <Header>Your Books</Header>
      <FeedbackComponent />
    </ContainerStyled>
  );
};

export default AboutScreen;
