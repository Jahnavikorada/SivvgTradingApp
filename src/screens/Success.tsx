import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default function SuccessScreen({ navigation }: any) {
    useEffect(() => {
  const timer = setTimeout(() => {
    navigation?.replace("Login");
  }, 2000);

  return () => clearTimeout(timer);
}, []);
  return (
    <LinearGradient
      colors={["#FF2E4C", "#1E2A78"]}
      style={styles.container}
    >
      <View style={styles.content}>
        {/* Success Icon */}
        <Image
          source={require("../../assets/images/success.png")}
          style={styles.icon}
          resizeMode="contain"
        />

        {/* Success Text */}
        <Text style={styles.message}>
          Your password has been{"\n"}changed successfully
        </Text>
      </View>
    </LinearGradient>
  );
}

// ------------------ STYLES ------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    alignItems: "center",
    paddingHorizontal: 20,
  },

  icon: {
    width: 160,
    height: 160,
    marginBottom: 20,
  },

  message: {
    fontSize: 18,
    color: "#FFF",
    textAlign: "center",
    //fontWeight: "600",
    fontFamily: "Lato-Bold",
  },
});
