import { StyleSheet } from "react-native";

export const iosStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },

  message: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
