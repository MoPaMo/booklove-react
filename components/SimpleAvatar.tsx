import { Image } from "react-native";

import { ImageSourcePropType } from "react-native";

const SimpleAvatar = ({
  source,
  size = 50,
  style = {},
}: {
  source: ImageSourcePropType;
  size?: number;
  style?: any;
}) => {
  return (
    <Image
      source={source}
      style={{
        width: size,
        height: size,
        borderColor: "#333",
        borderWidth: 1,
        borderRadius: 5000,
        backgroundColor: "#fff",
        ...style,
      }}
    />
  );
};

export default SimpleAvatar;
