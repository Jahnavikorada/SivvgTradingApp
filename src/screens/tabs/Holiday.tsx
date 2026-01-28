import React, { useContext } from "react";
import { View, StyleSheet, Dimensions, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CommonHeader from "../components/CommonHeader";
import { useTheme } from "../../context/ThemeContext";

import i18n from "../../i18n";
import { LanguageContext } from "../../context/LanguageContext";

const { height } = Dimensions.get("window");

export default function Holiday({ navigation }: any) {
  const { isDark } = useTheme(); // ❌ theme logic untouched
  const { reloadKey } = useContext(LanguageContext); // ✅ language re-render

  return (
    <LinearGradient
      colors={["#FF2E4C", "#1E2A78"]} // ❌ SAME gradient
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
            { backgroundColor: isDark ? "#1a1a1a" : "white" }, // ❌ unchanged
          ]}
        >
          <Image
            source={require("../../../assets/images/holiday.png")}
            style={{ width: 140, height: 140 }}
            resizeMode="contain"
          />

          {/* ✅ Translated Text */}
          <Text
            style={[
              styles.header,
              { color: isDark ? "#FFFFFF" : "#1E2A78" }, // ❌ unchanged
            ]}
          >
            {i18n.t("market_closed_today")}
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
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 1,
    marginTop: 16,
  },
});
