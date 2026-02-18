import { StyleSheet } from "react-native";

export default StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  backIconWrapper: {
    padding: 8,
  },

  headerTitle: {
    fontSize: 22,
    color: "#fff",
    marginLeft: 12,
  },

  card: {
    flex: 1,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    marginTop: "12%",
    paddingVertical: 18,
    paddingHorizontal: 22,
    marginBottom:-40
    
  },

  scrollContent: {
    paddingBottom: 50,
  },

  sectionTitle: {
    textAlign: "center",
    fontSize: 22,
    marginVertical: 14,
  },

  box: {
    borderRadius: 14,
    padding: 18,
    marginBottom: 16,
  },

  row: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
});
