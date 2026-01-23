import React, { useState, useContext } from "react";
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

export default function Themes({ navigation }: any) {
  const { reloadKey } = useContext(LanguageContext); // ✅ refresh texts
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Theme colors (LOCAL)
  const colors =
    theme === "light"
      ? {
          background: "#FFFFFF",
          text: "#1E2A78",
          card: "#FFFFFF",
          border: "#1E2A78",
        }
      : {
          background: "#0F172A",
          text: "#FFFFFF",
          card: "#0F172A",
          border: "#FFFFFF",
        };

  return (
    <View key={reloadKey} style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar
        barStyle={theme === "light" ? "dark-content" : "light-content"}
      />

      <LinearGradient
        colors={["#FF2E4C", "#1E2A78"]}
        style={styles.gradient}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={26} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>{i18n.t("themes")}</Text>
        </View>

        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <Text style={[styles.title, { color: colors.text }]}>
            {i18n.t("choose_theme")}
          </Text>

          <View style={styles.row}>
            {/* LIGHT THEME */}
            <TouchableOpacity
              style={[
                styles.preview,
                {
                  backgroundColor: "#FFFFFF",
                  borderColor: theme === "light" ? "#1E2A78" : "#CBD5E1",
                },
              ]}
              onPress={() => setTheme("light")}
            >
              <View style={[styles.line, { backgroundColor: "#E5E7EB" }]} />
              <View style={[styles.line, { backgroundColor: "#CBD5E1" }]} />
              <Text style={styles.previewText}>{i18n.t("light")}</Text>
              {theme === "light" && <View style={styles.dot} />}
            </TouchableOpacity>

            {/* DARK THEME */}
            <TouchableOpacity
              style={[
                styles.preview,
                {
                  backgroundColor: "#0F172A",
                  borderColor: theme === "dark" ? "#FFFFFF" : "#334155",
                },
              ]}
              onPress={() => setTheme("dark")}
            >
              <View style={[styles.line, { backgroundColor: "#334155" }]} />
              <View style={[styles.line, { backgroundColor: "#475569" }]} />
              <Text style={[styles.previewText, { color: "#FFFFFF" }]}>
                {i18n.t("dark")}
              </Text>
              {theme === "dark" && (
                <View style={[styles.dot, { backgroundColor: "#FFFFFF" }]} />
              )}
            </TouchableOpacity>
          </View>

          {/* DONE BUTTON */}
          <TouchableOpacity
            style={[styles.button, { borderColor: colors.border }]}
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
    fontWeight: "bold",
  },

  container: {
    flex: 1,
  },

  card: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: "10%",
    paddingTop: 15,
    paddingHorizontal: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: "#E5E5E5",
  },

  rowText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: "#1E2A78",
    fontWeight: "500",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E2A78",
    marginTop: 10,
  },

  subtitle: {
    fontSize: 14,
    color: "#777",
    marginBottom: 25,
    textAlign: "center",
  },

  btn: {
    width: "70%",
    paddingVertical: 12,
    marginVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#1E2A78",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  activeBtn: {
    backgroundColor: "#1E2A78",
  },

  btnText: {
    color: "#1E2A78",
    fontSize: 16,
    fontWeight: "600",
  },

  activeText: {
    color: "#fff",
  },

  preview: {
    width: 120,
    height: 140,
    borderRadius: 14,
    borderWidth: 2,
    padding: 12,
    justifyContent: "center",
  },

  line: {
    height: 10,
    borderRadius: 6,
    marginBottom: 8,
  },

  previewText: {
    textAlign: "center",
    marginTop: 12,
    fontWeight: "600",
    color: "#1E2A78",
  },

  dot: {
    alignSelf: "center",
    marginTop: 8,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#1E2A78",
  },

  button: {
    marginTop: 40,
    alignSelf: "center",
    borderWidth: 1.5,
    borderRadius: 25,
    paddingHorizontal: 40,
    paddingVertical: 10,
  },

  buttonText: {
    fontWeight: "600",
    fontSize: 14,
  },
});
