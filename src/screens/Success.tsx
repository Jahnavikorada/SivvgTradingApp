import React, { useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import i18n from "../i18n";
import { LanguageContext } from "../context/LanguageContext";

export default function SuccessScreen({ navigation }: any) {
  const { reloadKey } = useContext(LanguageContext); 

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation?.replace("Login");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  
  return (
    <View key={reloadKey} style={{ flex: 1 }}>
      <LinearGradient colors={["#FF2E4C", "#1E2A78"]} style={styles.container}>
        <View style={styles.content}>
          {/* Success Icon */}
          <Image
            source={require("../../assets/images/success.png")}
            style={styles.icon}
            resizeMode="contain"
          />

          {/* Success Text */}
          <Text style={styles.message}>{i18n.t("password_changed_success")}</Text>
        </View>
      </LinearGradient>
    </View>
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
    width: 220,
    height: 220,
    marginBottom: 50,
  },

  message: {
    fontSize: 28,
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Lato-Bold",
  },
});