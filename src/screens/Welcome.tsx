import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import i18n from "../i18n";

export default function WelcomeOfferScreen({ navigation }:any) {
      // ------------------ AUTO SPLASH NAVIGATION ------------------
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigation.replace("Login"); // Replace prevents coming back
  //   }, 3000); // 3 seconds splash delay

  //   return () => clearTimeout(timer); // Cleanup
  // }, []);
  

  return (
    <LinearGradient
      colors={["#FF2E4C", "#1E2A78"]}
      style={styles.container}
    >
      {/* LOGO */}
      <Image
        source={require("../../assets/images/logo.png")} // Replace with your logo
        style={styles.logo}
        resizeMode="contain"
      />

      {/* HEADING */}
      {/* <Text style={styles.heading}>Unlock Your Potential</Text> */}
      <Text style={styles.heading}>{i18n.t("Unlock Your Potential")}</Text>


      {/* CIRCLE */}
      <LinearGradient
        colors={["#FF5668", "#5B67E1"]}
        style={styles.outerCircle}
      >
        <View style={styles.innerCircle}>
          <Text style={styles.circleText}>20</Text>
        </View>
      </LinearGradient>

      {/* SUB TEXT */}
      <Text style={styles.subText}>
        20Days of Smart Portfolio{"\n"}Tracking
      </Text>

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <LinearGradient
          colors={["#FF2E4C", "#FFFFFF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>START YOUR JOURNEY</Text>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
}

// ------------------ STYLES ------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  logo: {
    width: 130,
    height: 130,
    marginBottom: 15,
  },

  heading: {
    fontSize: 22,
    color: "#FFF",
    //fontWeight: "700",
    fontFamily: "Lato-Bold",
    marginBottom: 25,
  },

  outerCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  innerCircle: {
    width: 130,
    height: 130,
    backgroundColor: "#FFF",
    borderRadius: 65,
    justifyContent: "center",
    alignItems: "center",
  },

  circleText: {
    fontSize: 46,
    fontWeight: "700",
    color: "#1E2A78",
  },

  subText: {
    fontSize: 16,
    color: "#FFF",
    textAlign: "center",
    marginBottom: 40,
    fontFamily: "Lato-Bold",
  },

  buttonContainer: {
    width: "80%",
  },

  button: {
    paddingVertical: 14,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#1E2A78",
    //fontWeight: "700",
    fontSize: 14,
    fontFamily: "Lato-Bold",
  },
});
