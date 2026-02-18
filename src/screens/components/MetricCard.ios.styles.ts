import { StyleSheet } from "react-native";

export const iosStyles = StyleSheet.create({
  metricBorder: {
    width: "45%",
    marginLeft: 10,
    marginRight: 12,
    borderRadius: 10,
    padding: 2.5,
    top: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  metricCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    height: 94,
    marginBottom:6,
    marginRight:6,
    justifyContent: "center",
    alignItems: "center",
  },

  metricTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1E2A78",
    textAlign: "center",
    marginBottom: 8,
  },

  metricValue: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
});
