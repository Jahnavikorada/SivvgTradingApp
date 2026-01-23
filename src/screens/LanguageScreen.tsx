import React, { useContext, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import i18n from "../i18n";
import { LanguageContext } from "../context/LanguageContext";

type Props = {
  navigation: any;
};

const LanguageScreen: React.FC<Props> = ({ navigation }) => {
  const { lang, changeLang } = useContext(LanguageContext);

  const [selected, setSelected] = useState<string>(lang);

  useEffect(() => {
    setSelected(lang);
  }, [lang]);

  const languages = [
    { code: "A", label: i18n.t("lang_english"), value: "en" },
    { code: "अ", label: i18n.t("lang_hindi"), value: "hi" },
    { code: "అ", label: i18n.t("lang_telugu"), value: "te" },
  ];

  const selectLanguage = async (newLang: string) => {
    setSelected(newLang);
    await changeLang(newLang); // ✅ updates i18n.locale from context
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t("choose_language")}</Text>

      <Text style={styles.subtitle}>{i18n.t("subtitle_language")}</Text>

      {languages.map((item) => (
        <TouchableOpacity
          key={item.value}
          style={[
            styles.option,
            selected === item.value && styles.selectedOption,
          ]}
          onPress={() => selectLanguage(item.value)}
          activeOpacity={0.8}
        >
          <Text style={styles.optionCode}>{item.code}</Text>
          <Text style={styles.optionLabel}>{item.label}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.continueBtn}
        onPress={() => navigation.navigate("Welcome")}
        activeOpacity={0.8}
      >
        <Text style={styles.continueText}>{i18n.t("continue")}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#162F7A",
    marginBottom: 5,
    textAlign: "center",
    fontFamily: "Lato-Bold",
  },

  subtitle: {
    fontSize: 14,
    color: "#5A5A5A",
    marginBottom: 25,
    textAlign: "center",
    fontFamily: "Lato-Semibold",
  },

  option: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.6,
    borderColor: "#162F7A",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  selectedOption: {
    backgroundColor: "#E6ECFF",
    borderColor: "#162F7A",
  },

  optionCode: {
    fontSize: 22,
    color: "#162F7A",
    width: 35,
    textAlign: "center",
  },

  optionLabel: {
    fontSize: 18,
    color: "#162F7A",
    marginLeft: 10,
    fontFamily: "Lato-Semibold",
  },

  continueBtn: {
    marginTop: 20,
    backgroundColor: "#162F7A",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
  },

  continueText: {
    color: "white",
    fontSize: 20,
    fontFamily: "Lato-Semibold",
  },
});
