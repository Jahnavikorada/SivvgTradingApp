import { StyleSheet, Platform } from "react-native";

export const androidStyles = StyleSheet.create({
  container: { flex: 1 },

  safe: { flex: 1 },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "ios" ? 24 : 0,
    paddingBottom: Platform.OS === "ios" ? 36 : 0,
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
    elevation: 4,
  },

  btnInner: {
    paddingHorizontal: 38,
    paddingVertical: 14,
    borderRadius: 37,
    alignItems: "center",
    justifyContent: "center",
  },

  btnText: {
    fontWeight: "800",
    letterSpacing: 1,
    textAlign: "center",
    color: "#FF2E4C",
  },
});
