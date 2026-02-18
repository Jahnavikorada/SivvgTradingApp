import { StyleSheet } from "react-native";
export const iosStyles = StyleSheet.create({
  gradient: {
    flex: 1,
  },

  container: {
    flex: 1,
  },

  card: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 10,
    paddingTop: 15,
    paddingHorizontal: 25,
  },

  tabs: {
    flexDirection: "row",
    borderWidth: 1.5,
    overflow: "hidden",
    width: "100%",
    marginBottom: 24,
    marginTop: 14,
    height: 45,
   
  },

  tab: {
    flex: 1,
    
  },

  tabText: {
    fontWeight: "600",
    fontSize: 20,
  },

  activeTabText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 20,
  },

  activeGradient: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  inactiveTab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
