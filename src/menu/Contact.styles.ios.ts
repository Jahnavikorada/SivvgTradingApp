import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  /* ---------- MAP ---------- */
  map: {
    width: "100%",
    height: height * 0.48,
  },

  backButton: {
    position: "absolute",
    top: 70,
    left: 30,
  },

  backGradient: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },

  /* ---------- CARD ---------- */
  card: {
    position: "absolute",
    bottom: 25, // ⭐ safe area spacing
    width: width * 0.92,
    height:550,
    alignSelf: "center",
    borderRadius: 24,
    paddingTop: 28,
    paddingBottom: 36,
    paddingHorizontal: 22,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },

  /* ---------- TITLE ---------- */
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    right:16
  },

  titleUnderline: {
    width: 60,
    height: 2,
    right:18,
    backgroundColor: "#fff",
    borderRadius: 2,
    marginVertical: 10,
  },

  subtitle: {
    fontSize: 16,
    right:18,
    textAlign: "center",
    color: "#f2f2f2",
    marginBottom: 22,
  },

  /* ---------- BUTTON CARDS ---------- */
  shadowWrapper: {
    width: "80%",
    right:18,
    borderRadius: 16,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },

  button: {
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1.5,
  },

  btnTextContainer: {
    flex: 1,
    marginLeft: 12,
  },

  btnTitle: {
    fontSize: 15,
    fontWeight: "600",
  },

  btnSubtitle: {
    fontSize: 12,
    marginTop: 2,
  },

  /* ---------- MODAL ---------- */
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: "90%",
    borderRadius: 20,
    padding: 22,
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 14,
  },

  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 14,
    textAlignVertical: "top",
  },

  sendBtn: {
    paddingVertical: 8,
    borderRadius: 18,
    alignItems: "center",
    backgroundColor: "#1e2a78",
  },

  sendText: {
    color: "#fff",
    fontWeight: "600",
  },

  closeText: {
    textAlign: "center",
    marginTop: 12,
    color: "red",
    fontWeight: "600",
  },
});
