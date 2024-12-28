import styled from "styled-components/native";
import {Text, Dimensions} from "react-native";

const TopSection = styled.View`
  padding-top: ${(props) =>
    props.width < 700 ? props.height * 2 : props.height}px;
  justify-content: flex-end;
  padding-bottom: 10px;
`;

const HeaderText = styled(Text)`
  flex-wrap: wrap;
  font-size: 48px;
  color: ${(props) => props.color};
  text-align: left;
  line-height: 48px;
  font-family: "PlayfairDisplay_900Black";
  flex: 1;
`;

export default function HeaderTitle({ children, color, height: h = 0.1 }) {
  let { width, height } = Dimensions.get("window");
  return (
    <TopSection width={width} height={height * h}>
      <HeaderText color={color}>{children}</HeaderText>
    </TopSection>
  );
}
