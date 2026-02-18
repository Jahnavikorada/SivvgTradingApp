import { StyleSheet } from "react-native";
export const iosStyles = StyleSheet.create({
  outerPinkCard: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: "center",
  },

  tabContainer: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 45,
    justifyContent: "space-between",
    width: "100%",
    borderWidth: 1,
    borderColor: "#ffffff",
    elevation: 6,
  },

  tabButton: {
    alignItems: "center",
    justifyContent: "center",
  },

  activeTab: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 100,
    gap: 6,
  },

  activeText: {
    fontWeight: "700",
    fontSize: 18,
    textAlign: "center",
    lineHeight: 17,
  },

  inactiveCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});