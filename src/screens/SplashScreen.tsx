import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default function SplashScreen({ navigation }: any) {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("LanguageScreen"); // Auto navigate after 2 sec
    }, 3000);
  }, []);

  return (
    // <View style={styles.container}>
    //   <Image
    //     source={require("../../assets/images/logo.png")}
    //     style={styles.logo}
    //     resizeMode="contain"
    //   />
    // </View>
    <LinearGradient
      colors={["#FF2E4C", "#1E2A78"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
     
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 250,
    height: 250,
  },
});
