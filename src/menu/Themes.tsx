import React, { useContext, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  StatusBar,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";

import i18n from "../i18n";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext"; // ThemeContext

export default function Themes({ navigation }: any) {
  const { lang, reloadKey } = useContext(LanguageContext); // Language support
  const { theme, setTheme } = useContext(ThemeContext); // Theme support
  const isLight = theme === "light";

  const [selectedLang, setSelectedLang] = useState(lang);

  useEffect(() => {
    setSelectedLang(lang);
  }, [lang]);

  // Theme colors
  const colors = {
    background: isLight ? "#fff" : "#1A1A1A",
    card: isLight ? "#fff" : "#1a1a1a",
    text: isLight ? "#1E2A78" : "#E0E0E0",
    border: isLight ? "#1E2A78" : "#E0E0E0",
  };

  // Helper for language button colors (optional for future)
  const getBtnTextColor = (btnLang: string) =>
    selectedLang === btnLang ? (isLight ? "#1E2A78" : "#E0E0E0") : colors.text;

  return (
    <View key={reloadKey} style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar barStyle={isLight ? "dark-content" : "light-content"} />

      <LinearGradient
        colors={["#FF2E4C", "#1E2A78"]}
        style={styles.gradient}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        {/* HEADER */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={26} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{i18n.t("themes")}</Text>
        </View>

        {/* CARD */}
        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <Text style={[styles.title, { color: colors.text }]}>
            {i18n.t("choose_theme")}
          </Text>

          <View style={styles.row}>
            {/* LIGHT THEME */}
            <View style={styles.themeWrapper}>
              <View
                style={[
                  styles.previewOuter,
                  { backgroundColor: "#D3D6E0" },
                  isLight && styles.selectedBorder,
                ]}
              >
                <View style={styles.innerLightCard}>
                  <View style={styles.previewRow}>
                    <View style={styles.previewDot} />
                    <View style={styles.previewLineLight} />
                  </View>
                  <View style={styles.previewRow}>
                    <View style={styles.previewDot} />
                    <View style={styles.previewLineLight} />
                  </View>
                </View>
              </View>

              <Text style={[styles.previewLabel, { color: colors.text }]}>
                {i18n.t("light")}
              </Text>

              <TouchableOpacity onPress={() => setTheme("light")}>
                <View style={styles.radioOuter}>
                  {isLight && <View style={styles.radioInner} />}
                </View>
              </TouchableOpacity>
            </View>

            {/* DARK THEME */}
            <View style={styles.themeWrapper}>
              <View
                style={[
                  styles.previewOuter,
                  { backgroundColor: "#D3D6E0" },
                  !isLight && styles.selectedBorder,
                ]}
              >
                <View style={styles.innerDarkCard}>
                  <View style={styles.previewRow}>
                    <View style={styles.previewDot} />
                    <View style={styles.previewLineDark} />
                  </View>
                  <View style={styles.previewRow}>
                    <View style={styles.previewDot} />
                    <View style={styles.previewLineDark} />
                  </View>
                </View>
              </View>

              <Text style={[styles.previewLabel, { color: colors.text }]}>
                {i18n.t("dark")}
              </Text>

              <TouchableOpacity onPress={() => setTheme("dark")}>
                <View style={styles.radioOuter}>
                  {!isLight && <View style={styles.radioInner} />}
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* DONE BUTTON */}
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: isLight ? "#fff" : "#1E1E1E",
                borderColor: colors.border,
              },
            ]}
            onPress={() => navigation.goBack()}
          >
            <Text style={[styles.buttonText, { color: colors.text }]}>
              {i18n.t("done")}
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  gradient: {
    flex: 1,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
    gap: 10,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },

  card: {
    flex: 1,
    marginTop: "20%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: "center",
    paddingTop: 40,
  },

  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 40,
    marginTop: 120,
  },

  row: {
    flexDirection: "row",
    gap: 40,
  },

  themeWrapper: {
    alignItems: "center",
  },

  previewOuter: {
    width: 140,
    height: 100,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#B9BCC6",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },

  selectedBorder: {
    borderColor: "#1E2A78",
  },

  innerLightCard: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    padding: 10,
    justifyContent: "center",
  },

  innerDarkCard: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: "#bfbbbbff",
    padding: 10,
    justifyContent: "center",
  },

  previewRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  previewDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#1E2A78",
    marginRight: 8,
  },

  previewLineLight: {
    height: 8,
    borderRadius: 4,
    flex: 1,
    backgroundColor: "#E0E2EA",
  },

  previewLineDark: {
    height: 8,
    borderRadius: 4,
    flex: 1,
    backgroundColor: "#8F95A6",
  },

  previewLabel: {
    marginTop: 8,
    fontWeight: "500",
    fontSize: 20,
  },

  radioOuter: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#1E2A78",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    zIndex: 10,
    backgroundColor: "#FFFFFF",
  },

  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#1E2A78",
  },

  button: {
    marginTop: 60,
    borderWidth: 1.5,
    borderRadius: 30,
    transform: [{ translateY: -4 }],
    paddingHorizontal: 50,
    paddingVertical: 5,
    borderColor: "#1E2A78",
    backgroundColor: "#fff",
  },

  buttonText: {
    fontWeight: "700",
    fontSize: 18,
  },
});
