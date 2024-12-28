import styled from "styled-components/native";
import { Text, Dimensions } from "react-native";

const TopSection = styled.View`
  padding-top: ${(props) =>
    props.width < 700 ? props.height * 2 : props.height}px;
  justify-content: flex-end; 
  padding-bottom: 10px;
`;

const HeaderText = styled(Text)`
  font-size: 48px;
  color: ${(props) => props.color};
  text-align: left;
  line-height: 50px;
  font-family: "PlayfairDisplay_900Black";
`;

export default function HeaderTitle({ children, color, height: h = 0.1 }) {
  let { width, height } = Dimensions.get("window");
  return (
      <HeaderText color={color}>{children}</HeaderText>
  );
}
