import { StyleSheet } from "react-native";

export const androidStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    width: "85%",
    padding: 30,
    alignItems: "center",
    gap: 6,
  },

  title: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "600",
  },

  user: {
    marginTop: 18,
    fontWeight: 500,
    fontSize: 20,
  },

  msg: {
    marginTop: 2,
    fontSize: 16,
    opacity: 0.9,
    textAlign: "center",
    marginBottom:10
  },

  row: {
    flexDirection: "row",
    marginTop: 20,
  },

  yes: {
    paddingHorizontal: 30,
    paddingVertical: 8,
    marginRight: 10,
    
  },

  yesText: {
    fontSize: 16,
    fontWeight: "500",
  },

  no: {
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 8,
    
  },

  noText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
