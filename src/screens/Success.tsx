import React, { useEffect, useContext } from "react";
import { View, Text, Image, Platform } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import i18n from "../i18n";
import { LanguageContext } from "../context/LanguageContext";

import { androidStyles } from "./Success.android.styles";
import { iosStyles } from "./Success.ios.styles";

const styles = Platform.OS === "ios" ? iosStyles : androidStyles;

export default function SuccessScreen({ navigation }: any) {
  const { reloadKey } = useContext(LanguageContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation?.replace("Login");
    }, 3000000);

    return () => clearTimeout(timer);
  }, );

  return (
    <View key={reloadKey} style={{ flex: 1 }}>
      <LinearGradient
        colors={["#FF2E4C", "#1E2A78"]}
        style={styles.container}
      >
        <View style={styles.content}>
          <Image
            source={require("../../assets/images/success.png")}
            style={styles.icon}
            resizeMode="contain"
          />

          <Text style={styles.message}>
            {i18n.t("password_changed_success")}
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}
