import { StyleSheet } from "react-native";

export default StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: "600",
    color: "#FFFFFF",
    
  },

  avatarSection: {
    alignItems: "center",
    marginTop: 56,
    marginBottom: 58,
  },

  card: {
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.35)",
    backgroundColor: "rgba(255,255,255,0.15)",
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 18,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
    color: "#1E2A78",
  },

  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },

  btn: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    borderRadius: 40,
    alignItems: "center",
    marginHorizontal: 5,
  },

  btnText: {
    color: "#1E2A78",
    fontSize: 20,
    fontWeight: "600",
  },

  backIconWrapper: {
    padding: 8,
  },

  editIconWrapper: {
    padding: 8,
  },

  scrollContent: {
    paddingBottom: 30,
  },
});
