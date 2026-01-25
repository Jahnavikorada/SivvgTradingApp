import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import CommonHeader from "../components/CommonHeader";
import SectoralPanel from "../components/SectoralPanel";

import { useTheme } from "../../context/ThemeContext";
import { LightColors, DarkColors } from "../../theme/colors";

const { height } = Dimensions.get("window");

export default function Sectoral({ navigation }: any) {
  const { isDark } = useTheme();
  const colors = isDark ? DarkColors : LightColors;

  return (
    <LinearGradient
      colors={[colors.gradientStart, colors.gradientEnd]}
      style={styles.gradient}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <View style={styles.container}>
        {/* ✅ TOP HEADER (UNCHANGED) */}
        <CommonHeader title="Sectoral Indices" navigation={navigation} />

        {/* ✅ THEME AWARE PARENT CARD */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: isDark
                ? "#1a1a1a"
                : "#FFFFFF",
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
