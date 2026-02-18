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
    zIndex: 10,
  },

  card: {
    width: "85%",
    padding: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",

   
  },

  title: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 8,
    marginTop: 10,
    fontFamily: "Lato-Bold",
  },

  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 32,
    fontFamily: "Lato-Semibold",
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 20,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
    fontFamily: "Lato-Medium",
  },

  errorText: {
    color: "yellow",
    fontSize: 13,
    marginLeft: 10,
    marginBottom: 12,
  },

  sendOtpBtn: {
    paddingVertical: 10,
    borderRadius: 40,
    alignItems: "center",
    marginTop: 10,
    width: "80%",
    alignSelf: "center",
  },

  sendOtpText: {
    fontSize: 22,
    fontFamily: "Lato-Bold",
  },
});
