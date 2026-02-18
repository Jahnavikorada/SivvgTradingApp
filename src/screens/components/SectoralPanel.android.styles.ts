import { StyleSheet } from "react-native";

export const androidStyles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flex: 1,
    marginTop: 10,
    justifyContent: "space-between",
  },

  leftBar: {
    marginTop: 10,
    bottom:40,
    width: "26%",
    height: "90%",
    backgroundColor: "#1E3A8A",
    borderRadius: 40,
    alignItems: "center",
    overflow: "hidden",
    elevation: 6,
  },

  rightSection: {
    width: "70%",
    alignItems: "center",
  },

  circleBase: {
    height: 70,
    width: 70,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },

  activeCircle: { backgroundColor: "#ffffff" },

  inactiveCircle: {
    backgroundColor: "rgba(255,255,255,0.15)",
    borderWidth: 1.5,
    borderColor: "rgba(255,255,255,0.4)",
  },

  activeCircleDark: { backgroundColor: "#1a1a1a" },

  inactiveCircleDark: {
    backgroundColor: "rgba(0,0,0,0.35)",
    borderWidth: 1.5,
    borderColor: "rgba(255,255,255,0.15)",
  },

  icon: {
    height: 50,
    width: 50,
    resizeMode: "contain",
    opacity: 0.95,
  },

  rightCard: {
    marginTop: 10,
    bottom:40,
    width: "100%",
    height: "90%",
    borderRadius: 40,
    //borderWidth: 1.5,
    //borderColor: "#1E3A8A",
    paddingHorizontal: 15,
    paddingVertical: 18,
    //overflow: "hidden",
    //elevation: 5,
  },

  heading: {
    fontSize: 22,
    fontWeight: "600",
    color: "#1E2A78",
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 20,
  },

  bankWhiteCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 18,
    marginBottom: 16,
    borderWidth: 1.2,
    borderColor: "#1E2A78",
    elevation: 2,
  },

  bankLogo: {
    width: 30,
    height: 35,
    resizeMode: "contain",
    marginRight: 12,
  },

  bankText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1E2A78",
  },

  noteFullWidth: {
    flexDirection: "row",
    right: "22%",
    marginTop: 20,
    alignItems: "flex-start",
  },

  noteLabel: {
    color: "red",
    fontSize: 18,
    fontWeight: "700",
    bottom:20,
  },

  noteText: {
    bottom:20,
    color: "#1E40AF",
    fontSize: 18,
    fontWeight:500
  },
});
