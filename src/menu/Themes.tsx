import React, { useContext, useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StatusBar,
  Platform
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import i18n from "../i18n";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext"; // ThemeContext
import { androidStyles } from "./Themes.android.styles";
import {iosStyles} from "./Themes.ios.styles"

const styles = Platform.OS === "ios" ? iosStyles : androidStyles;

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
            <Icon name="chevron-back" size={28} color="#fff" />
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

