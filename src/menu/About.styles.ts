import { Platform } from "react-native";

const styles =
  Platform.OS === "ios"
    ? require("./About.styles.ios").default
    : require("./About.styles.android").default;

export default styles;
