import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";
import colors from "@/utils/colors";

const AvatarImage = styled.Image`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-color: ${(props) => props.theme.primaryText};
  border-width: 1px;
  border-radius: 9999px;
  background-color: ${(props) => props.theme.lightGray};
  shadow-color: ${(props) => props.theme.BG};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.5;
  shadow-radius: 3px;
  elevation: 5;
  ${(props) => props.style}
`;

const SimpleAvatar = ({
  source,
  size = 50,
  style = {},
}: {
  source: ImageSourcePropType;
  size?: number;
  style?: any;
}) => {
  return <AvatarImage source={source} size={size} style={style} />;
};

export default SimpleAvatar;
