import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import i18n from "../i18n";
import { LanguageContext } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { androidStyles } from "./LanguageScreen.android.styles";
import { iosStyles } from "./LanguageScreen.ios.styles";

const styles = Platform.OS === "ios" ? iosStyles : androidStyles;

type Props = {
  navigation: any;
};

const LanguageScreen: React.FC<Props> = ({ navigation }) => {
  const { lang, changeLang } = useContext(LanguageContext);
  const { theme } = useTheme();
  const isLight = theme === "light";

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
    await changeLang(newLang); 
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isLight ? "#FFFFFF" : "#1a1a1a" },
      ]}
    >

      <Text
        style={[
          styles.title,
          { color: isLight ? "#162F7A" : "#EDEDED" },
        ]}
      >
        {i18n.t("choose_language")}
      </Text>

      <Text
        style={[
          styles.subtitle,
          { color: isLight ? "#5A5A5A" : "#B0B0B0" },
        ]}
      >
        {i18n.t("subtitle_language")}
      </Text>


      {languages.map((item) => {
        const isSelected = selected === item.value;

        return (
          <TouchableOpacity
            key={item.value}
            style={[
              styles.option,
              {
                backgroundColor: isLight
                  ? isSelected
                    ? "#E6ECFF"
                    : "#FFFFFF"
                  : isSelected
                  ? "#121212"
                  : "#2A2A2A",
                borderColor: isLight ? "#162F7A" : "#3A3A3A",
              },
            ]}
            onPress={() => selectLanguage(item.value)}
            activeOpacity={0.85}
          >
            <Text
              style={[
                styles.optionCode,
                {
                  color: isLight
                    ? "#162F7A"
                    : isSelected
                    ? "#EDEDED"
                    : "#9CA3AF",
                },
              ]}
            >
              {item.code}
            </Text>

            <Text
              style={[
                styles.optionLabel,
                {
                  color: isLight
                    ? "#162F7A"
                    : isSelected
                    ? "#EDEDED"
                    : "#9CA3AF",
                },
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}

      <TouchableOpacity
        style={[
          styles.continueBtn,
          {
            backgroundColor: isLight ? "#162F7A" : "#121212",
            borderColor: isLight ? "transparent" : "#3A3A3A",
            borderWidth: isLight ? 0 : 1,
          },
        ]}
        onPress={() => navigation.navigate("Welcome")}
        activeOpacity={0.85}
      >
        <Text
          style={[
            styles.continueText,
            { color: isLight ? "#FFFFFF" : "#EDEDED" },
          ]}
        >
          {i18n.t("continue")}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LanguageScreen;

