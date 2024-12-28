import React from "react";
import { Dimensions } from "react-native";
import { BlurView } from "expo-blur";
import styled from "styled-components/native";
import colors from "@/utils/colors";
const { width, height } = Dimensions.get("window");

const Container = styled.View`
  ${StyleSheet.absoluteFillObject}
  z-index: 0;
  flex: 1;
  background-color: ${(props) => props.theme.CleanBG};
  color: ${(props) => props.theme.primaryText};
`;

const OriginalBG1 = styled.Image`
  position: absolute;
  width: ${(props) => props.width * 0.61}px;
  top: 0;
  right: ${(props) => props.width * -0.1}px;
`;

const OriginalBG2 = styled.Image`
  position: absolute;
  width: ${(props) => props.width * 0.79}px;
  left: ${(props) => props.width * -0.2}px;
  bottom: 28px;
`;

const BlurredView = styled(BlurView)`
  ${StyleSheet.absoluteFill}
`;

const BackgroundBlurElement = () => {
  return (
    <Container>
      <OriginalBG1 source={require("@/assets/images/backgrounds/blur3.png")} />
      <OriginalBG2 source={require("@/assets/images/backgrounds/blur_hex.png")} />
      <BlurredView intensity={8} />
    </Container>
  );
};

export default BackgroundBlurElement;
