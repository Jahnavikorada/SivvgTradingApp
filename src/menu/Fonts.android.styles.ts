import { StyleSheet } from "react-native";

export const androidStyles = StyleSheet.create({
  gradient: {
    flex: 1,
    
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
    gap: 10,
    top:18,
    
  },

  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    left:30
  },

  card: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: "20%",
    padding: 30,
  },

  title: {
    textAlign: "center",
    marginBottom: 35,
    marginTop:20
  },

  dropdownWrapper: {
    marginBottom: 30,
  },

  dropdownHeader: {
    height: 50,
    backgroundColor: "#1E2A78",
    borderRadius: 10,
    width: "95%",
    alignSelf: "center",
    paddingHorizontal: 26,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 2,
  },

  dropdownHeaderText: {
    color: "#fff",
    flex: 1,
    textAlign: "center",
   
    
  },

  dropdownHidden: {
    height: 0,
    overflow: "hidden",
  },

  dropdownBody: {
    marginTop: -2,
    alignSelf: "center",
    width: "83%",
    borderWidth: 1,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    zIndex: 1,
  },

  option: {
    height: 42,
    justifyContent: "center",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },

  lastOption: {
    borderBottomWidth: 0,
  },

  lastSelectedOption: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },

  optionText: {
    textAlign: "center",
  },

  selectedOption: {
    backgroundColor: "rgba(30,42,120,0.54)",
  },
});









