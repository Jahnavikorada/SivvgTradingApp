import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "../context/ThemeContext";

type Props = {
  navigation: any;
};

const LanguageScreen: React.FC<Props> = ({ navigation }) => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const [selected, setSelected] = useState<string>("en");

  const languages = [
    { code: "A", label: "English", value: "en" },
    { code: "अ", label: "Hindi", value: "hi" },
    { code: "అ", label: "Telugu", value: "te" },
  ];

  const selectLanguage = async (lang: string) => {
    setSelected(lang);
    await AsyncStorage.setItem("APP_LANG", lang);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isLight ? "#FFFFFF" : "#1a1a1a" },
      ]}
    >
      {/* Title */}
      <Text
        style={[
          styles.title,
          { color: isLight ? "#162F7A" : "#EDEDED" },
        ]}
      >
        Choose your language
      </Text>

      {/* Subtitle */}
      <Text
        style={[
          styles.subtitle,
          { color: isLight ? "#5A5A5A" : "#B0B0B0" },
        ]}
      >
        Select a language to continue
      </Text>

      {/* Language Options */}
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

      {/* Continue Button */}
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
      >
        <Text
          style={[
            styles.continueText,
            { color: isLight ? "#FFFFFF" : "#EDEDED" },
          ]}
        >
          Continue
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
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 5,
    textAlign: "center",
    fontFamily: "Lato-Bold",
  },

  subtitle: {
    fontSize: 14,
    marginBottom: 25,
    textAlign: "center",
    fontFamily: "Lato-Semibold",
  },

  option: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.6,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  optionCode: {
    fontSize: 22,
    width: 35,
    textAlign: "center",
  },

  optionLabel: {
    fontSize: 18,
    marginLeft: 10,
    fontFamily: "Lato-Semibold",
  },

  continueBtn: {
    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
  },

  continueText: {
    fontSize: 20,
    fontFamily: "Lato-Semibold",
  },
});
