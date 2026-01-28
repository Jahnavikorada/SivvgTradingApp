import React, { useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import i18n from "../i18n";
import { LanguageContext } from "../context/LanguageContext";

export default function SuccessScreen({ navigation }: any) {
  const { reloadKey } = useContext(LanguageContext); // ✅ refresh text on language change

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation?.replace("Login");
    }, 2000);

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
    width: 160,
    height: 160,
    marginBottom: 20,
  },

  message: {
    fontSize: 18,
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Lato-Bold",
  },
});