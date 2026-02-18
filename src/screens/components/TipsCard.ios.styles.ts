import { StyleSheet } from "react-native";
 export const iosStyles = StyleSheet.create({

  card: {
    backgroundColor: "#EEF0F6",
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1.5,
    borderColor: "#1E2A78",
    paddingBottom: 14,
  },

  cardDark: {
    backgroundColor: "#rgba(0,0,0,0.2)",
    borderColor: "rgba(0,0,0,0.30)",
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  symbolStrip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E2A78",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    paddingHorizontal: 24,
    paddingVertical: 6,
  },

  symbolText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    marginRight: 10,
  },

  graphIcon: {
    backgroundColor: "#6B74A6",
    padding: 6,
    borderRadius: 8,
  },

  buyBtn: {
    borderRadius: 22,
    marginRight: 14,
    marginTop: 4,
    paddingHorizontal: 20,
    paddingVertical: 6,
  },

  buyText: {
    color: "#fff",
    fontWeight: "700",
  },

  targetsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
    marginHorizontal: 10,
  },

  targetBox: {
    width: "32%",
    backgroundColor: "#565E92",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 6,
  },

  targetBoxDark: {
    backgroundColor: "#1a1a1a",
  },

  targetBoxActive: {
    backgroundColor: "#1E2A78",
  },

  targetBoxActiveDark: {
    backgroundColor: "rgba(0,0,0,0.3)",
  },

  targetLabel: {
    color: "#fff",
    fontWeight: "700",
  },

  valuesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 6,
  },

  targetValue: {
    width: "32%",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    color: "#1E2A78",
  },

  targetValueDark: {
    color: "#ffffff",
  },

  progressContainer: {
    height: 26,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginTop: 18,
    marginHorizontal: 14,
    borderWidth: 2,
    borderColor: "#B0B0B0",
    position: "relative",
    overflow: "hidden",
  },

  progressContainerDark: {
    backgroundColor: "#1a1a1a",
    borderColor: "rgba(0,0,0,0.30)",
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#3E8E5B",
    borderRadius: 20,
  },

  progressThumb: {
    position: "absolute",
    top: -2,
    marginLeft: -14,
    width: 24,
    height: 24,
    backgroundColor: "#fff",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#3E8E5B",
    elevation: 4,
  },

  progressThumbDark: {
    backgroundColor: "#1a1a1a",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 10,
    marginRight: 12,
  },

  yahoo: {
    color: "#6A0DAD",
    fontWeight: "700",
    textDecorationLine: "underline",
  },

  nse: {
    color: "#FF7A00",
    fontWeight: "700",
    textDecorationLine: "underline",
  },

  divider: {
    marginHorizontal: 6,
    fontWeight: "700",
  },

  dividerDark: {
    color: "#ffffff",
  },
});
