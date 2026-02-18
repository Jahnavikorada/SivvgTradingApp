import { StyleSheet } from "react-native";
export const iosStyles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff", 
    borderBottomLeftRadius: 30,
    width: "86%",
    alignSelf: "center",
    marginTop: 10,
    borderWidth: 0.7,
    borderColor: "#fff",
    overflow: "hidden",
    paddingBottom: 20,
  },

  cardDark: {
    backgroundColor: "#121212",
    borderColor: "rgba(0,0,0,0.60)",
  },

  textbg: {
    backgroundColor: "#1E2A78",
    width: "100%",
    paddingVertical: 16,
    alignItems: "center",
  },

  textbgDark: {
    backgroundColor: "#1e2a78",
  },

  title: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: 500,
  },

  chartWrapper: {
    flexDirection: "row",
    paddingHorizontal: 25,
    paddingTop: 30,
    justifyContent: "space-between",
  },

  chartRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: 110,
    gap: 24,
    marginLeft: 10,
  },

  barContainer: {
    alignItems: "center",
  },

  valueText: {
    color: "#1E2A78",
    marginBottom: 4,
    fontSize: 14,
    fontWeight: 600,
  },

  bar: {
    width: 30,
  },

  legend: {
    justifyContent: "center",
    marginRight: 10,
  },

  legendRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  colorDot: {
    width: 15,
    height: 13,
    borderRadius: 3,
    marginRight: 5,
  },

  legendText: {
    color: "#1E2A78",
    fontSize: 15,
    fontWeight: "500",
  },

  footer: {
    textAlign: "center",
    color: "#1E2A78",
    marginTop: 10,
    marginBottom:6,
    top:10,
    fontSize: 16,
    fontWeight: "700",
  },

  /* 🌙 COMMON DARK TEXT */
  textDark: {
    color: "rgba(255,255,255,0.85)",
  },
});
