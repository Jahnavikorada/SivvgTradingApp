import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";

import { useFont } from "../context/FontContext";
import { getFontFamily } from "../context/fontHelper";
import { useTheme } from "../context/ThemeContext";
import i18n from "../i18n";
import { LanguageContext } from "../context/LanguageContext";

export default function AppPreference({ navigation }: any) {
  const { fontFamily,  } = useFont();
  const { reloadKey } = useContext(LanguageContext); // ✅ language refresh
  const { colors, isDark } = useTheme(); // ✅ theme

  const [selected, setSelected] = useState("None");

  const textColor = (row: string) =>
    selected === row
      ? "#fff"
      : isDark
      ? colors.textSecondary
      : "#1E2A78";

  const iconColor = (row: string) =>
    selected === row
      ? "#fff"
      : isDark
      ? colors.textSecondary
      : "#1E2A78";

  return (
    <View key={reloadKey} style={{ flex: 1 }}>
      <LinearGradient
        colors={[colors.gradientStart, colors.gradientEnd]}
        style={styles.gradient}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        {/* HEADER */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back" size={28} color="#fff"  style={{ top: 20 }} />
          </TouchableOpacity>

          <Text
            style={[
              styles.headerTitle,
              {
                fontFamily: getFontFamily(fontFamily, "bold"),
                //fontSize: fontSize+6,
              },
            ]}
          >
            {i18n.t("app_preferences")}
          </Text>
        </View>

        {/* CARD */}
        <View
          style={[
            styles.card,
            { backgroundColor: isDark ? "#1a1a1a" : "#fff" },
          ]}
        >
          {/* Change Language */}
          <TouchableOpacity
            style={[styles.row, selected === "lang" && styles.activeRow]}
            onPress={() => {
              setSelected("lang");
              navigation.navigate("ChangeLanguage");
            }}
          >
            <Icon name="language" size={30} color={iconColor("lang")}  />
            <Text
              style={[
                styles.rowText,
                { fontFamily: getFontFamily(fontFamily, "semibold"), fontSize: 22, left:14,color: textColor("lang") },
                selected === "lang" && styles.activeText,
              ]}
            >
              {i18n.t("change_language")}
            </Text>
            <Icon name="chevron-forward" size={26} color={iconColor("lang")} />
          </TouchableOpacity>

          {/* Themes */}
          <TouchableOpacity
            style={[styles.row, selected === "theme" && styles.activeRow]}
            onPress={() => {
              setSelected("theme");
              navigation.navigate("Themes");
            }}
          >
            <Icon name="moon" size={30} color={iconColor("theme")} />
            <Text
              style={[
                styles.rowText,
                { fontFamily: getFontFamily(fontFamily, "semibold"), fontSize: 22,left:14, color: textColor("theme") },
                selected === "theme" && styles.activeText,
              ]}
            >
              {i18n.t("themes")}
            </Text>
            <Icon name="chevron-forward" size={26} color={iconColor("theme")} />
          </TouchableOpacity>

          {/* Fonts */}
          <TouchableOpacity
            style={[styles.row, selected === "fonts" && styles.activeRow]}
            onPress={() => {
              setSelected("fonts");
              navigation.navigate("Fonts");
            }}
          >
            <Icon name="text" size={30} color={iconColor("fonts")} />
            <Text
              style={[
                styles.rowText,
                { fontFamily: getFontFamily(fontFamily, "semibold"), fontSize:22, left:14, color: textColor("fonts") },
                selected === "fonts" && styles.activeText,
              ]}
            >
              {i18n.t("fonts")}
            </Text>
            <Icon name="chevron-forward" size={26} color={iconColor("fonts")} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 20,
    gap: 10,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    left:30,
    top:18
  },

  card: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: "20%",
    paddingTop: 15,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 15,
    marginTop: 15,
  },

  activeRow: {
    backgroundColor: "#1E2A78",
  },

  rowText: {
    flex: 1,
    marginLeft: 15,
    fontSize:28,
    fontWeight: "500",
    
  },

  activeText: {
    color: "#fff",
  },
});
