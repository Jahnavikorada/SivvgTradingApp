import { StyleSheet } from "react-native";

export const iosStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  card: {
    marginHorizontal: 25,
    padding: 25,
    borderRadius: 22,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },

  title: {
    marginTop: 10,
    fontSize: 30,
    textAlign: "center",
    fontFamily: "Lato-Bold",
    marginBottom: 8,
  },

  brand: {
    fontSize: 32,
    fontFamily: "Lemon-Regular",
  },

  subtitle: {
    fontSize: 18,
    marginBottom: 32,
    textAlign: "center",
    fontFamily: "Lato-Semibold",
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 22,
    borderWidth: 2,
    borderColor: "transparent",
  },

  input: {
    fontSize: 18,
    flex: 1,
    marginLeft: 10,
    fontFamily: "Lato-Medium",
  },

  errorBorder: { borderColor: "#E57373" },
  successBorder: { borderColor: "#22C55E" },

  errorText: {
    color: "#FACC15",
    fontSize: 13,
    marginBottom: 12,
    bottom: 10,
    marginLeft: 10,
  },

  forgot: {
    fontSize: 18,
    fontFamily: "Lato-Semibold",
    bottom: 12,
    right: 12,
    textDecorationLine: "underline",
  },

  loginBtn: {
    paddingVertical: 10,
    borderRadius: 40,
    alignItems: "center",
    marginTop: 25,
    width: "80%",
    alignSelf: "center",
    marginBottom: 18,
  },

  loginText: {
    fontSize: 22,
    fontWeight:600,
    fontFamily: "Lato-Bold",
  },

  footerText: {
    fontSize: 18,
    marginTop: 15,
    textAlign: "center",
    fontFamily: "Lato-Semibold",
    marginBottom: 18,
  },

  signup: {
    fontFamily: "Lato-Semibold",
    textDecorationLine: "underline",
  },
});
