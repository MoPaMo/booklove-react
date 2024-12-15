import { Image } from "react-native";

const SimpleAvatar = ({ source, size = 50 }) => {
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
      }}
    />
  );
};
