import { StyleSheet } from "react-native";

export const androidStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 120,          
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 10,       
    textAlign: "center",
    fontFamily: "Lato-Bold",
  },

  subtitle: {
    fontSize: 20,
    marginBottom: 50,        
    textAlign: "center",
    fontFamily: "Lato-Semibold",
  },

  option: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.6,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 25,
  },

  optionCode: {
    fontSize: 24,
    width: 35,
    textAlign: "center",
  },

  optionLabel: {
    fontSize: 22,
    marginLeft: 10,
    fontFamily: "Lato-Semibold",
  },

  continueBtn: {
  marginTop: "auto",
  marginBottom: 100,
  paddingVertical: 10,
  borderRadius: 25,
  alignItems: "center",
  width: "80%",         
  alignSelf: "center",  
},


  continueText: {
    fontSize: 24,
    fontFamily: "Lato-Semibold",
  },
});

