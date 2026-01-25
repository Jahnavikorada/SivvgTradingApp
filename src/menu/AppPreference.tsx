import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";

import { useFont } from "../context/FontContext";
import { getFontFamily } from "../context/fontHelper";
import { ThemeContext } from "../context/ThemeContext"; // ✅ Theme Context

export default function AppPreference({ navigation }: any) {
  const { fontFamily, fontSize } = useFont();
  const { theme } = useContext(ThemeContext);

  const isLight = theme === "light";
  const [selected, setSelected] = useState("None");

  return (
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
          App Preferences
        </Text>
      </View>

      <View
        style={[
          styles.card,
          { backgroundColor: isLight ? "#fff" : "#1a1a1a" }, // ✅ theme
        ]}
      >
        {/* Change Language */}
        <TouchableOpacity
          style={[
            styles.row,
            selected === "lang" && styles.activeRow,
          ]}
          onPress={() => {
            setSelected("lang");
            navigation.navigate("ChangeLanguage");
          }}
        >
          <Icon
            name="language"
            size={22}
            color={
              selected === "lang"
                ? "#fff"
                : isLight
                ? "#1E2A78"
                : "#E0E0E0"
            }
          />
          <Text
            style={[
              styles.rowText,
              selected === "lang" && styles.activeText,
              {
                fontFamily: getFontFamily(fontFamily, "semibold"),
                fontSize,
                color:
                  selected === "lang"
                    ? "#fff"
                    : isLight
                    ? "#1E2A78"
                    : "#E0E0E0",
              },
            ]}
          >
            Change Language
          </Text>
          <Icon
            name="chevron-forward"
            size={22}
            color={
              selected === "lang"
                ? "#fff"
                : isLight
                ? "#1E2A78"
                : "#E0E0E0"
            }
          />
        </TouchableOpacity>

        {/* Themes */}
        <TouchableOpacity
          style={[
            styles.row,
            selected === "theme" && styles.activeRow,
          ]}
          onPress={() => {
            setSelected("theme");
            navigation.navigate("Themes");
          }}
        >
          <Icon
            name="moon"
            size={22}
            color={
              selected === "theme"
                ? "#fff"
                : isLight
                ? "#1E2A78"
                : "#E0E0E0"
            }
          />
          <Text
            style={[
              styles.rowText,
              selected === "theme" && styles.activeText,
              {
                fontFamily: getFontFamily(fontFamily, "semibold"),
                fontSize,
                color:
                  selected === "theme"
                    ? "#fff"
                    : isLight
                    ? "#1E2A78"
                    : "#E0E0E0",
              },
            ]}
          >
            Themes
          </Text>
          <Icon
            name="chevron-forward"
            size={22}
            color={
              selected === "theme"
                ? "#fff"
                : isLight
                ? "#1E2A78"
                : "#E0E0E0"
            }
          />
        </TouchableOpacity>

        {/* Fonts */}
        <TouchableOpacity
          style={[
            styles.row,
            selected === "fonts" && styles.activeRow,
          ]}
          onPress={() => {
            setSelected("fonts");
            navigation.navigate("Fonts");
          }}
        >
          <Icon
            name="text"
            size={22}
            color={
              selected === "fonts"
                ? "#fff"
                : isLight
                ? "#1E2A78"
                : "#E0E0E0"
            }
          />
          <Text
            style={[
              styles.rowText,
              selected === "fonts" && styles.activeText,
              {
                fontFamily: getFontFamily(fontFamily, "semibold"),
                fontSize,
                color:
                  selected === "fonts"
                    ? "#fff"
                    : isLight
                    ? "#1E2A78"
                    : "#E0E0E0",
              },
            ]}
          >
            Fonts
          </Text>
          <Icon
            name="chevron-forward"
            size={22}
            color={
              selected === "fonts"
                ? "#fff"
                : isLight
                ? "#1E2A78"
                : "#E0E0E0"
            }
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
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
    fontWeight: "500",
  },

  activeText: {
    color: "#fff",
  },
});
