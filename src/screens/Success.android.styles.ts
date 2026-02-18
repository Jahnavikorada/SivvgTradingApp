import { StyleSheet } from "react-native";

export const androidStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    alignItems: "center",
    paddingHorizontal: 20,
  },

  icon: {
    width: 220,
    height: 220,
    marginBottom: 50,
  },

  message: {
    fontSize: 28,
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Lato-Bold",
  },
});
