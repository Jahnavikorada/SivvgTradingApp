import { StyleSheet } from "react-native";

export const iosStyles = StyleSheet.create({
  container: { flex: 1 },

  safe: { flex: 1 },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 24,
    paddingBottom: 36,
  },

  logo: {
    marginBottom: 16,
  },

  title: {
    fontWeight: "600",
    marginBottom: 35,
    textAlign: "center",
  },

  progressWrap: {
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  progressCenter: {
    position: "absolute",
  },

  progressNumber: {
    fontWeight: "700",
  },

  subtitle: {
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 55,
  },


  btnBorder: {
    padding: 4,
    borderRadius: 40,

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  btnInner: {
    paddingHorizontal: 38,
    paddingVertical: 10,
    borderRadius: 44,
    alignItems: "center",
    justifyContent: "center",
  },

  btnText: {
    fontWeight: "700",
    letterSpacing: 0.8,
    textAlign: "center",
    top:10,
    left:50
  },
});
