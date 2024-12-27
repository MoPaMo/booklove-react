import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Text } from "react-native";

interface ButtonProps {
  onPress: () => void;
  children: string;
}

const StyledButton = styled(TouchableOpacity)`
  border-width: 2px;
  border-color: ${(props) => props.theme.blue};
  padding-vertical: 12px;
  padding-horizontal: 32px;
  border-radius: 8px;
  align-items: center;
`;

const ButtonText = styled(Text)`
  color: ${(props) => props.theme.CleanBG};
  font-size: 16px;
  font-weight: 600;
`;

const Button: React.FC<ButtonProps> = ({ onPress, children }) => {
  return (
    <StyledButton onPress={onPress}>
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  );
};

export default Button;
