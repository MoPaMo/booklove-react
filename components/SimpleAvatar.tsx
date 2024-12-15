import { Image } from "react-native";

import { ImageSourcePropType } from "react-native";
import colors from "@/utils/colors";
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
        backgroundColor: colors.lightGray,
        shadowColor: colors.BG,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        ...style,
      }}
    />
  );
};

export default SimpleAvatar;
