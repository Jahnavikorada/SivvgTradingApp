import { StyleSheet } from "react-native";

export default StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  headerTitle: {
    marginTop:30,
    fontSize: 24,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  avatarSection: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40,
  },

  card: {
    marginHorizontal: 20,
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
    marginBottom: 20,
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
    marginTop: 10,
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
    padding: 10,
    marginTop:30,

  },

  editIconWrapper: {
    padding: 10,
    marginTop:30,
  },

  scrollContent: {
    paddingBottom: 20,
  },
});
