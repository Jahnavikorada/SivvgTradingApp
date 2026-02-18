import { StyleSheet } from "react-native";

export const androidStyles = StyleSheet.create({
  metricBorder: {
    width: "45%",
    marginLeft: 10,
    marginRight: 12,
    borderRadius: 10,
    padding: 2.5,
    top: 10,
    elevation: 4, // Android shadow
  },

  metricCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
  },

  metricTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1E2A78",
    textAlign: "center",
    marginBottom: 6,
  },

  metricValue: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
});
