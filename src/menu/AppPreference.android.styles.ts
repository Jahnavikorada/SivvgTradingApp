import { StyleSheet } from "react-native";

export const androidStyles = StyleSheet.create({
  gradient: {
    flex: 1,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 20,
    gap: 10,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    left:30,
    top:18
  },

  card: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: "20%",
    paddingTop: 15,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 15,
    marginTop: 15,
  },

  activeRow: {
    backgroundColor: "#1E2A78",
  },

  rowText: {
    flex: 1,
    marginLeft: 15,
    fontSize:28,
    fontWeight: "500",
    
  },

  activeText: {
    color: "#fff",
  },
});
