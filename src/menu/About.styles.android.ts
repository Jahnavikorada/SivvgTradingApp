import { StyleSheet } from "react-native";

export default StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  backIconWrapper: {
    padding: 6,
  },

  headerTitle: {
    fontSize: 22,
    color: "#fff",
    marginLeft: 16,
  },

  card: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: "20%",
    paddingVertical: 16,
    paddingHorizontal: 24,
  },

  scrollContent: {
    paddingBottom: 40,
  },

  sectionTitle: {
    textAlign: "center",
    fontSize: 22,
    marginVertical: 16,
  },

  box: {
    borderRadius: 12,
    padding: 18,
    marginBottom: 14,
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
