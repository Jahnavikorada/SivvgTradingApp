import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import i18n from "../i18n";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {
  navigation: any;
};

const LanguageScreen: React.FC<Props> = ({ navigation }) => {
  const [selected, setSelected] = useState<string>("en");

  const languages = [
    { code: "A", label: "English", value: "en" },
    { code: "अ", label: "Hindi", value: "hi" },
    { code: "అ", label: "Telugu", value: "te" },
  ];

  // const selectLanguage = (lang: string) => {
  //   setSelected(lang);
  //   i18n.locale = lang; // ✅ CLI compatible
  // };

  const selectLanguage = async (lang: string) => {
  setSelected(lang);
  i18n.locale = lang;

  // ✅ Save language permanently
  await AsyncStorage.setItem("APP_LANG", lang);
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t("title")}</Text>
      <Text style={styles.subtitle}>{i18n.t("subtitle")}</Text>

      {languages.map((item) => (
        <TouchableOpacity
          key={item.value}
          style={[
            styles.option,
            selected === item.value && styles.selectedOption,
          ]}
          onPress={() => selectLanguage(item.value)}
        >
          <Text style={styles.optionCode}>{item.code}</Text>
          <Text style={styles.optionLabel}>{item.label}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.continueBtn}
        onPress={() => navigation.navigate("Welcome")}
      >
        <Text style={styles.continueText}>
          {i18n.t("continue")}
        </Text>
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
    //fontFamily: "Lato-Bold",
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
    //fontWeight: "600",
    fontFamily: "Lato-Semibold",
  },
});
