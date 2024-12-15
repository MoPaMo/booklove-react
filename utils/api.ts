import { Platform } from "react-native";

const baseURL = Platform.OS === "ios" || Platform.OS === "android" ? "https://api.getbooklove.app" : "https://cors-anywhere.herokuapp.com/https://api.getbooklove.app";
// against CORS policy, dev fix for now

export {baseURL};
