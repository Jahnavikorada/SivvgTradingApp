import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";

import i18n from "../i18n";
import { LanguageContext } from "../context/LanguageContext";

export default function ChangeLanguage({ navigation }: any) {
  const { lang, changeLang, reloadKey } = useContext(LanguageContext);

  const [selected, setSelected] = useState("en");

  useEffect(() => {
    setSelected(lang);
  }, [lang]);

  const selectLanguage = async (newLang: string) => {
    setSelected(newLang);
    await changeLang(newLang); // ✅ updates whole app
  };

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

          <Text style={styles.headerTitle}>{i18n.t("change_language")}</Text>
        </View>

        <View style={styles.card}>
          <Icon name="language-outline" size={70} color="#1E2A78" />

          <Text style={styles.title}>{i18n.t("choose_language")}</Text>
          <Text style={styles.subtitle}>{i18n.t("select_language_start")}</Text>

          {/* ENGLISH */}
          <TouchableOpacity
            style={[styles.btn, selected === "en" && styles.activeBtn]}
            onPress={() => selectLanguage("en")}
          >
            <Text
              style={[
                styles.btnText,
                selected === "en" && styles.activeText,
              ]}
            >
              {i18n.t("lang_english")}
            </Text>
          </TouchableOpacity>

          {/* HINDI */}
          <TouchableOpacity
            style={[styles.btn, selected === "hi" && styles.activeBtn]}
            onPress={() => selectLanguage("hi")}
          >
            <Text
              style={[
                styles.btnText,
                selected === "hi" && styles.activeText,
              ]}
            >
              {i18n.t("lang_hindi")}
            </Text>
          </TouchableOpacity>

          {/* TELUGU */}
          <TouchableOpacity
            style={[styles.btn, selected === "te" && styles.activeBtn]}
            onPress={() => selectLanguage("te")}
          >
            <Text
              style={[
                styles.btnText,
                selected === "te" && styles.activeText,
              ]}
            >
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
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: "10%",
    paddingHorizontal: 10,
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
});
