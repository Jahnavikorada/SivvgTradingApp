import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";

import { useFont } from "../context/FontContext";
import { getFontFamily } from "../context/fontHelper";

import i18n from "../i18n";
import { LanguageContext } from "../context/LanguageContext";

export default function AppPreference({ navigation }: any) {
  const { fontFamily, fontSize } = useFont();
  const { reloadKey } = useContext(LanguageContext); // ✅ refresh texts

  const [selected, setSelected] = useState("None");

  return (
    <View key={reloadKey} style={{ flex: 1 }}>
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

          <Text
            style={[
              styles.headerTitle,
              {
                fontFamily: getFontFamily(fontFamily, "bold"),
                fontSize: fontSize + 6,
              },
            ]}
          >
            {i18n.t("app_preferences")}
          </Text>
        </View>

        <View style={styles.card}>
          {/* Change Language */}
          <TouchableOpacity
            style={[styles.row, selected === "lang" && styles.activeRow]}
            onPress={() => {
              setSelected("lang");
              navigation.navigate("ChangeLanguage");
            }}
          >
            <Icon
              name="language"
              size={22}
              color={selected === "lang" ? "#fff" : "#1E2A78"}
            />
            <Text
              style={[
                styles.rowText,
                selected === "lang" && styles.activeText,
                {
                  fontFamily: getFontFamily(fontFamily, "semibold"),
                  fontSize,
                },
              ]}
            >
              {i18n.t("change_language")}
            </Text>
            <Icon
              name="chevron-forward"
              size={22}
              color={selected === "lang" ? "#fff" : "#1E2A78"}
            />
          </TouchableOpacity>

          {/* Themes */}
          <TouchableOpacity
            style={[styles.row, selected === "theme" && styles.activeRow]}
            onPress={() => {
              setSelected("theme");
              navigation.navigate("Themes");
            }}
          >
            <Icon
              name="moon"
              size={22}
              color={selected === "theme" ? "#fff" : "#1E2A78"}
            />
            <Text
              style={[
                styles.rowText,
                selected === "theme" && styles.activeText,
                {
                  fontFamily: getFontFamily(fontFamily, "semibold"),
                  fontSize,
                },
              ]}
            >
              {i18n.t("themes")}
            </Text>
            <Icon
              name="chevron-forward"
              size={22}
              color={selected === "theme" ? "#fff" : "#1E2A78"}
            />
          </TouchableOpacity>

          {/* Fonts */}
          <TouchableOpacity
            style={[styles.row, selected === "fonts" && styles.activeRow]}
            onPress={() => {
              setSelected("fonts");
              navigation.navigate("Fonts");
            }}
          >
            <Icon
              name="text"
              size={22}
              color={selected === "fonts" ? "#fff" : "#1E2A78"}
            />
            <Text
              style={[
                styles.rowText,
                selected === "fonts" && styles.activeText,
                {
                  fontFamily: getFontFamily(fontFamily, "semibold"),
                  fontSize,
                },
              ]}
            >
              {i18n.t("fonts")}
            </Text>
            <Icon
              name="chevron-forward"
              size={22}
              color={selected === "fonts" ? "#fff" : "#1E2A78"}
            />
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
    fontSize: 20,
    fontWeight: "bold",
  },

  card: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: "10%",
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
    fontSize: 16,
    color: "#1E2A78",
    fontWeight: "500",
  },

  activeText: {
    color: "#fff",
  },
});
