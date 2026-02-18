import { StyleSheet } from "react-native";

export const iosStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  card: {
    marginHorizontal: 25,
    padding: 25,
    borderRadius: 22,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 24,
    marginTop: 10,
    color: "#fff",
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    paddingHorizontal: 15,
    marginBottom: 20,
    height: 50,
    borderWidth: 2,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
  },

  genderBox: {
    padding: 15,
    borderRadius: 20,
    borderWidth: 2,
    marginBottom: 18,
  },

  genderLabel: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
    color: "#5A6BA0",
  },

  genderRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  radioRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  radioText: {
    fontSize: 18,
    marginLeft: 5,
    color: "#5A6BA0",
  },

  errorText: {
    color: "#FACC15",
    marginLeft: 10,
    marginBottom: 8,
  },

  loginTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },

  accountText: {
    fontSize: 18,
    color: "#ffffff",
  },

  loginLink: {
    color: "#01d5ff",
    fontSize: 18,
    textDecorationLine: "underline",
  },

  loginBtn: {
    paddingVertical: 10,
    borderRadius: 40,
    alignItems: "center",
    marginTop: 25,
    width: "80%",
    alignSelf: "center",
    marginBottom: 10,
  },

  loginBtnText: {
    fontSize: 22,
    fontWeight: "700",
  },
});
