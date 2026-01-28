import React, { useContext } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import CommonHeader from "../components/CommonHeader";
import SectoralPanel from "../components/SectoralPanel";

import { useTheme } from "../../context/ThemeContext";
import { LightColors, DarkColors } from "../../theme/colors";

import i18n from "../../i18n";
import { LanguageContext } from "../../context/LanguageContext";

const { height } = Dimensions.get("window");

export default function Sectoral({ navigation }: any) {
  const { isDark } = useTheme(); // ❌ theme untouched
  const colors = isDark ? DarkColors : LightColors;

  const { reloadKey } = useContext(LanguageContext); // ✅ language refresh

  return (
    <LinearGradient
      colors={[colors.gradientStart, colors.gradientEnd]} // ❌ unchanged
      style={styles.gradient}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <View key={reloadKey} style={styles.container}>
        {/* ✅ Translated Header */}
        <CommonHeader
          title={i18n.t("sectoral_indices")}
          navigation={navigation}
        />

        {/* ✅ Theme-aware Parent Card (unchanged logic) */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: isDark ? "#1a1a1a" : "#FFFFFF",
            },
          ]}
        >
          <SectoralPanel />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1, // ✅ FULL SCREEN
  },

  container: {
    flex: 1,
  },

  card: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 30,
    paddingTop: 15,
    paddingHorizontal: 10,
  },
});
