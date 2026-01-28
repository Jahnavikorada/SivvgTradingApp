import React, { useContext } from "react";
import { View, StyleSheet, Dimensions, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CommonHeader from "../components/CommonHeader";
import { useTheme } from "../../context/ThemeContext";

import i18n from "../../i18n";
import { LanguageContext } from "../../context/LanguageContext";

const { height } = Dimensions.get("window");

export default function Home({ navigation }: any) {
  const { isDark } = useTheme();
  const { reloadKey } = useContext(LanguageContext); // ✅ language re-render

  return (
    <LinearGradient
      colors={["#FF2E4C", "#1E2A78"]} // ❌ NOT CHANGED
      style={styles.gradient}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <View key={reloadKey} style={styles.container}>
        {/* ✅ Translated Header */}
        <CommonHeader
          title={i18n.t("intraday_tips")}
          navigation={navigation}
        />

        <View
          style={[
            styles.card,
            { backgroundColor: isDark ? "#1a1a1a" : "white" }, // ❌ NOT CHANGED
          ]}
        >
          <Image
            source={require("../../../assets/images/disclaimer.png")}
            style={{ width: 200, height: 200 }}
            resizeMode="contain"
          />

          {/* ✅ Translated Title */}
          <Text style={styles.header}>
            {i18n.t("disclaimer")}
          </Text>

          {/* ✅ Translated Message */}
          <Text
            style={[
              styles.text,
              { color: isDark ? "#FFF" : "#1E2A78" }, // ❌ NOT CHANGED
            ]}
          >
            {i18n.t("no_tips_today")}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },

  container: {
    flex: 1,
  },

  card: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 10,
    paddingTop: 15,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    color: "#DC3545", // ❌ SAME for both themes
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 1,
  },

  text: {
    marginTop: 14,
    fontSize: 16,
    textAlign: "center",
    alignSelf: "center",
    maxWidth: 220,
    lineHeight: 22,
    fontWeight: "500",
  },
});
