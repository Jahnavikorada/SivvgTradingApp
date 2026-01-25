import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import { ThemeContext } from "../context/ThemeContext";

export default function ChangeLanguage({ navigation }: any) {
  const [selected, setSelected] = useState("English");
  const { theme } = useContext(ThemeContext);
  const isLight = theme === "light";

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

        <Text style={styles.headerTitle}>Change Language</Text>
      </View>

      <View
        style={[
          styles.card,
          { backgroundColor: isLight ? "#fff" : "#1a1a1a" },
        ]}
      >
        <Icon
          name="language-outline"
          size={70}
          color={isLight ? "#1E2A78" : "#E0E0E0"}
        />

        <Text style={[styles.title, { color: isLight ? "#1E2A78" : "#E0E0E0" }]}>
          Choose a Language
        </Text>

        <Text
          style={[
            styles.subtitle,
            { color: isLight ? "#555" : "#B0B0B0" },
          ]}
        >
          Please Select a language to get Started
        </Text>

        {/* ENGLISH */}
        <TouchableOpacity
          style={[
            styles.btn,
            {
              backgroundColor: isLight
                ? selected === "English"
                  ? "#1E2A78"
                  : "#fff"
                : selected === "English"
                ? "#121212"
                : "#2A2A2A",
              borderColor: isLight ? "#1E2A78" : "#3A3A3A",
            },
          ]}
          onPress={() => setSelected("English")}
        >
          <Text
            style={[
              styles.btnText,
              {
                color: isLight
                  ? selected === "English"
                    ? "#fff"
                    : "#1E2A78"
                  : selected === "English"
                  ? "#EDEDED"
                  : "#9CA3AF",
              },
            ]}
          >
            English
          </Text>
        </TouchableOpacity>

        {/* HINDI */}
        <TouchableOpacity
          style={[
            styles.btn,
            {
              backgroundColor: isLight
                ? selected === "Hindi"
                  ? "#1E2A78"
                  : "#fff"
                : selected === "Hindi"
                ? "#121212"
                : "#2A2A2A",
              borderColor: isLight ? "#1E2A78" : "#3A3A3A",
            },
          ]}
          onPress={() => setSelected("Hindi")}
        >
          <Text
            style={[
              styles.btnText,
              {
                color: isLight
                  ? selected === "Hindi"
                    ? "#fff"
                    : "#1E2A78"
                  : selected === "Hindi"
                  ? "#EDEDED"
                  : "#9CA3AF",
              },
            ]}
          >
            Hindi
          </Text>
        </TouchableOpacity>

        {/* TELUGU */}
        <TouchableOpacity
          style={[
            styles.btn,
            {
              backgroundColor: isLight
                ? selected === "Telugu"
                  ? "#1E2A78"
                  : "#fff"
                : selected === "Telugu"
                ? "#121212"
                : "#2A2A2A",
              borderColor: isLight ? "#1E2A78" : "#3A3A3A",
            },
          ]}
          onPress={() => setSelected("Telugu")}
        >
          <Text
            style={[
              styles.btnText,
              {
                color: isLight
                  ? selected === "Telugu"
                    ? "#fff"
                    : "#1E2A78"
                  : selected === "Telugu"
                  ? "#EDEDED"
                  : "#9CA3AF",
              },
            ]}
          >
            Telugu
          </Text>
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
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: "10%",
    paddingHorizontal: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },

  subtitle: {
    fontSize: 14,
    marginBottom: 25,
    textAlign: "center",
  },

  btn: {
    width: "70%",
    paddingVertical: 12,
    marginVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    alignItems: "center",
  },

  btnText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
