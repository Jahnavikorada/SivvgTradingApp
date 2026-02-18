import React, { useState, useContext } from "react";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Platform,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";

import { useFont } from "../context/FontContext";
import { getFontFamily } from "../context/fontHelper";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import i18n from "../i18n";
import { androidStyles } from "./Fonts.android.styles";
import { iosStyles } from "./Fonts.ios.styles";

const styles = Platform.OS === "ios" ? iosStyles : androidStyles;


const FONT_STYLES = ["Lato", "Poppins", "Arial"];
const FONT_SIZES = ["Small", "Medium", "Large"];

const FONT_SIZE_MAP: any = {
  Small: 14,
  Medium: 16,
  Large: 18,
};

export default function Fonts({ navigation }: any) {
  const { reloadKey } = useContext(LanguageContext); // Language refresh
  const { theme } = useContext(ThemeContext); // Theme
  const isLight = theme === "light";

  const { fontFamily, fontSize, setFontFamily, setFontSize } = useFont();

  const [openStyle, setOpenStyle] = useState(false);
  const [openSize, setOpenSize] = useState(false);

  // Translations for font sizes
  const getTranslatedSizeLabel = (sizeKey: string) => {
    if (sizeKey === "Small") return i18n.t("font_small");
    if (sizeKey === "Medium") return i18n.t("font_medium");
    if (sizeKey === "Large") return i18n.t("font_large");
    return sizeKey;
  };

  // Translations for font styles
  const getTranslatedFontStyleLabel = (styleKey: string) => {
    if (styleKey === "Lato") return i18n.t("font_lato");
    if (styleKey === "Poppins") return i18n.t("font_poppins");
    if (styleKey === "Arial") return i18n.t("font_arial");
    return styleKey;
  };

  const renderDropdown = (
    title: string,
    open: boolean,
    setOpen: any,
    data: string[],
    selected: string,
    onSelect: (item: string) => void,
    type: "style" | "size"
  ) => (
    <View style={styles.dropdownWrapper}>
      <Pressable
        style={styles.dropdownHeader}
        onPress={() => setOpen(!open)}
      >
        <Text
          style={[
            styles.dropdownHeaderText,
            {
              fontFamily: getFontFamily(fontFamily, "medium"),
              fontSize: fontSize + 2,
            },
          ]}
        >
          {title}
        </Text>
        <Icon
          name={open ? "chevron-up" : "chevron-down"}
          size={20}
          color="#fff"
        />
      </Pressable>

      <View
        style={[
          styles.dropdownBody,
          !open && styles.dropdownHidden,
          {
            backgroundColor: isLight ? "#fff" : "#1a1a1a",
            borderColor: isLight ? "#1E2A78" : "#121212",
          },
        ]}
        pointerEvents={open ? "auto" : "none"}
      >
        {data.map((item) => {
          const displayText =
            type === "size"
              ? getTranslatedSizeLabel(item)
              : type === "style"
              ? getTranslatedFontStyleLabel(item)
              : item;

          return (
            <Pressable
              key={item}
              style={[
                styles.option,
                item === selected && styles.selectedOption,
                item === data[data.length - 1] && styles.lastOption,
                item === selected &&
                  item === data[data.length - 1] &&
                  styles.lastSelectedOption,
              ]}
              onPress={() => {
                onSelect(item);
                setOpen(false);
              }}
            >
              <Text
                style={[
                  styles.optionText,
                  {
                    fontFamily: getFontFamily(fontFamily, "bold"),
                    fontSize,
                    color:
                      item === selected
                        ? "#fff"
                        : isLight
                        ? "#1E2A78"
                        : "#E0E0E0",
                  },
                ]}
              >
                {displayText}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );

  return (
    <View key={reloadKey} style={{ flex: 1 }}>
      <LinearGradient
        colors={["#FF2E4C", "#1E2A78"]}
        style={styles.gradient}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back" size={28} color="#fff" />
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
            {i18n.t("fonts")}
          </Text>
        </View>

        {/* Card */}
        <View
          style={[
            styles.card,
            { backgroundColor: isLight ? "#fff" : "#1a1a1a" },
          ]}
        >
          <Text
            style={[
              styles.title,
              {
                fontFamily: getFontFamily(fontFamily, "semibold"),
                fontSize: 24,
                color: isLight ? "#1E2A78" : "#E0E0E0",
              },
            ]}
          >
            {i18n.t("font_style_and_size")}
          </Text>

          {/* Font Style Dropdown */}
          {renderDropdown(
            i18n.t("font_style"),
            openStyle,
            setOpenStyle,
            FONT_STYLES,
            fontFamily,
            (item) => setFontFamily(item as "Lato" | "Poppins" | "Arial"),
            "style"
          )}

          {/* Font Size Dropdown */}
          {renderDropdown(
            i18n.t("font_size"),
            openSize,
            setOpenSize,
            FONT_SIZES,
            Object.keys(FONT_SIZE_MAP).find(
              (key) => FONT_SIZE_MAP[key] === fontSize
            ) || "Medium",
            (item) => setFontSize(FONT_SIZE_MAP[item]),
            "size"
          )}
        </View>
      </LinearGradient>
    </View>
  );
}

