import { StyleSheet } from "react-native";

export const androidStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },

  card: {
    width: "88%",
    padding: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",

    
  },

  title: {
    fontSize: 30,
    fontFamily: "Lato-Bold",
    textAlign: "center",
    marginTop: 16,
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 18,
    fontFamily: "Lato-Semibold",
    textAlign: "center",
    marginVertical: 15,
    marginBottom: 32,
  },

  otpRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },

  otpBox: {
    width: 46,
    height: 48,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 22,
    fontFamily: "Lato-Bold",
    borderWidth: 2,
    borderColor: "transparent",
    marginBottom: 20,
  },

  successBorder: {
    borderColor: "#28A745",
  },

  errorBorder: {
    borderColor: "#e66868",
  },

  resendRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginBottom: 20,
  },

  resendText: {
    fontSize: 16,
    fontFamily: "Lato-Semibold",
    textDecorationLine: "underline",
    marginBottom: 18,
  },

  timerText: {
    fontSize: 16,
    fontFamily: "Lato-Semibold",
    marginBottom: 18,
  },

  verifyBtn: {
    paddingVertical: 10,
    borderRadius: 40,
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
    marginBottom: 10,
  },

  verifyText: {
    fontSize: 22,
    fontFamily: "Lato-Bold",
  },
});
