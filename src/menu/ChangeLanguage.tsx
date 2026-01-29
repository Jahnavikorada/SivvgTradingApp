import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";

import i18n from "../i18n";
import { LanguageContext } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext"; // ✅ theme

export default function ChangeLanguage({ navigation }: any) {
  const { lang, changeLang, reloadKey } = useContext(LanguageContext); // ✅ language
  const { colors, isDark } = useTheme(); // ✅ theme

  const [selected, setSelected] = useState(lang);

  useEffect(() => {
    setSelected(lang);
  }, [lang]);

  const selectLanguage = async (newLang: string) => {
    setSelected(newLang);
    await changeLang(newLang); // ✅ updates entire app
  };

  const isLight = !isDark;

  // helper for dynamic button colors
  const getBtnStyle = (btnLang: string) => ({
    backgroundColor:
      selected === btnLang
        ? isLight
          ? "#1E2A78"
          : "#121212"
        : isLight
        ? "#fff"
        : "#2A2A2A",
    borderColor: isLight ? "#1E2A78" : "#3A3A3A",
  });

  const getBtnTextColor = (btnLang: string) =>
    selected === btnLang
      ? "#fff"
      : isLight
      ? "#1E2A78"
      : "#E0E0E0";

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
            <Icon name="chevron-back" size={28}  color="#fff" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>{i18n.t("change_language")}</Text>
        </View>

        {/* CARD */}
        <View
          style={[
            styles.card,
            { backgroundColor: isLight ? "#fff" : "#1a1a1a" },
          ]}
        >
          <Icon
            name="language-outline"
            size={70}
            style={{ bottom: 60 }}
            color={isLight ? "#1E2A78" : "#E0E0E0"}
          />

          <Text style={[styles.title, { color: isLight ? "#1E2A78" : "#E0E0E0" }]}>
            {i18n.t("choose_language")}
          </Text>

          <Text style={[styles.subtitle, { color: isLight ? "#555" : "#B0B0B0" }]}>
            {i18n.t("select_language_start")}
          </Text>

          {/* ENGLISH */}
          <TouchableOpacity
            style={[styles.btn, getBtnStyle("en")]}
            onPress={() => selectLanguage("en")}
          >
            <Text style={[styles.btnText, { color: getBtnTextColor("en") }]}>
              {i18n.t("lang_english")}
            </Text>
          </TouchableOpacity>

          {/* HINDI */}
          <TouchableOpacity
            style={[styles.btn, getBtnStyle("hi")]}
            onPress={() => selectLanguage("hi")}
          >
            <Text style={[styles.btnText, { color: getBtnTextColor("hi") }]}>
              {i18n.t("lang_hindi")}
            </Text>
          </TouchableOpacity>

          {/* TELUGU */}
          <TouchableOpacity
            style={[styles.btn, getBtnStyle("te")]}
            onPress={() => selectLanguage("te")}
          >
            <Text style={[styles.btnText, { color: getBtnTextColor("te") }]}>
              {i18n.t("lang_telugu")}
            </Text>
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
    top:18
  },

  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    left:30
  },

  card: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: "20%",
    paddingHorizontal: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: 500,
    bottom:30,
    marginBottom:10
  },

  subtitle: {
    fontSize: 16,
    bottom: 25,
    textAlign: "center",
  },

  btn: {
    width: "50%",
    paddingVertical: 10,
    marginVertical: 8,
    borderWidth: 1,
    alignItems: "center",
  },

  btnText: {
    fontSize: 18,
    fontWeight: "600",
  },
});
