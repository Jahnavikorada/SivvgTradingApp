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
    width: "85%",
    padding: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    
  },

  title: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "Lato-Bold",
    marginTop: 10,
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 20,
    fontFamily: "Lato-Semibold",
    marginBottom: 32,
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 20,
  },

  textInput: {
    flex: 1,
    marginLeft: 10,
    fontFamily: "Lato-Medium",
    fontSize: 18,
  },

  errorText: {
    color: "yellow",
    fontSize: 13,
    marginBottom: 12,
    marginLeft: 10,
    bottom: 10,
  },

  button: {
    marginTop: 25,
    paddingVertical: 10,
    borderRadius: 40,
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
    marginBottom: 10,
  },

  buttonText: {
    fontSize: 22,
    fontFamily: "Lato-Bold",
  },
});
