import { StyleSheet } from "react-native";
export const androidStyles = StyleSheet.create({
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
    marginBottom: 22,
  },

  tabBtn: {
    paddingVertical: 4,
    paddingHorizontal: 24,
    borderRadius: 0,
    backgroundColor: "#1E2A78",
  
  },

  tabActive: {
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderColor: "#1E2A78",
  },

  tabText: {
    fontSize:18,
    color: "#FFF",
    fontWeight: "500",
  },

  tabTextActive: {
    color: "#1E2A78",
  },

  filterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  leftRow: {
    flexDirection: "row",
    gap: 6,
    marginLeft: 8,
    paddingRight: 6,
  },

  durationBtn: {
    width: 36,
    height: 30,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E2A78",
     marginHorizontal: 2,
  },

  durationActive: {
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderColor: "#1E2A78",
  },

  durationText: {
    color: "#FFF",
    fontWeight: "500",
  },

  durationTextActive: {
    color: "#1E2A78",
  },

  rightRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginRight: 6,
  },

  dateBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 96,
    height: 30,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#1E2A78",
  },

  dateText: {
    color: "#1E2A78",
    fontWeight: "500",
  },
});
