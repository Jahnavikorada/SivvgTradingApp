import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: { flex: 1 },

  map: { width, height: height * 0.45 },

  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },

  backGradient: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    position: "absolute",
    bottom: 80,
    width: 372,
    alignSelf: "center",
    borderRadius: 20,
    padding: 40,
    height: 565,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    color: "#fff",
  },

  titleUnderline: {
    width: 65,
    height: 2,
    backgroundColor: "#fff",
    alignSelf: "center",
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 30,
    color: "#f2f2f2",
  },

  shadowWrapper: {
    width: 300,
    height: 81,
    borderRadius: 15,
    marginBottom: 35,
  },

  button: {
    flex: 1,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderWidth: 1.5,
  },

  btnTextContainer: { flex: 1, marginLeft: 12 },

  btnTitle: { fontSize: 16, fontWeight: "600" },

  btnSubtitle: { fontSize: 10 },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: { width: "85%", borderRadius: 20, padding: 24 },

  modalTitle: { fontSize: 20, fontWeight: "700", textAlign: "center" },

  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 14,
  },

  sendBtn: {
    paddingVertical: 6,
    borderRadius: 18,
    alignItems: "center",
    backgroundColor: "#1e2a78",
  },

  sendText: { color: "#fff", fontWeight: "600" },

  closeText: {
    textAlign: "center",
    marginTop: 14,
    color: "red",
  },
});
