import React, { useState, useContext } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  Platform,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";

import { useTheme } from "../../context/ThemeContext";

import { bankData } from "../sectoraldata/bankData";
import { pharmaData } from "../sectoraldata/pharmaData";
import { itData } from "../sectoraldata/itData";
import { moneyData } from "../sectoraldata/monerData";
import { metalData } from "../sectoraldata/metalData";
import { autoData } from "../sectoraldata/autoData";
import { fmcgData } from "../sectoraldata/fmcData";

import i18n from "../../i18n";
import { LanguageContext } from "../../context/LanguageContext";

import { androidStyles } from "./SectoralPanel.android.styles";
import { iosStyles } from "./SectoralPanel.ios.styles";

const styles = Platform.OS === "ios" ? iosStyles : androidStyles;

export default function SectoralPanel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { isDark } = useTheme();
  const { reloadKey } = useContext(LanguageContext);

  const sectorHeadingMap: any = {
    bank: "nifty_bank",
    pharma: "nifty_pharma",
    it: "nifty_it",
    money: "nifty_financial",
    metal: "nifty_metal",
    auto: "nifty_auto",
    fmcg: "nifty_fmcg",
  };

  const icons = [
    { key: "bank", img: require("../../../assets/images/bank.png") },
    { key: "pharma", img: require("../../../assets/images/pharma.png") },
    { key: "it", img: require("../../../assets/images/it.png") },
    { key: "money", img: require("../../../assets/images/moneybag.png") },
    { key: "metal", img: require("../../../assets/images/metal.png") },
    { key: "auto", img: require("../../../assets/images/auto.png") },
    { key: "fmcg", img: require("../../../assets/images/fmcg.png") },
  ];

  const sectorMap: any = {
    bank: bankData,
    pharma: pharmaData,
    it: itData,
    money: moneyData,
    metal: metalData,
    auto: autoData,
    fmcg: fmcgData,
  };

  const activeKey = icons[selectedIndex].key;
  const activeData = sectorMap[activeKey];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View key={reloadKey} style={styles.row}>
        {/* LEFT BAR */}
        <View style={styles.leftBar}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ alignItems: "center", paddingVertical: 20 }}
          >
            {icons.map((item, index) => {
              const isActive = selectedIndex === index;

              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelectedIndex(index)}
                  style={[
                    styles.circleBase,
                    isActive
                      ? isDark
                        ? styles.activeCircleDark
                        : styles.activeCircle
                      : isDark
                      ? styles.inactiveCircleDark
                      : styles.inactiveCircle,
                  ]}
                >
                  <Image source={item.img} style={styles.icon} />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* RIGHT PANEL */}
        <View style={styles.rightSection}>
          <LinearGradient
            colors={["rgba(255,46,76,0.30)", "rgba(30,42,120,0.30)"]}
            style={styles.rightCard}
          >
            <Text style={[styles.heading, isDark && { color: "#fff" }]}>
              {i18n.t(sectorHeadingMap[activeKey])}
            </Text>

            <ScrollView showsVerticalScrollIndicator={false}>
              {activeData.map((item: any, index: number) => (
                <View
                  key={index}
                  style={[
                    styles.bankWhiteCard,
                    isDark && {
                      backgroundColor: "#121212",
                      borderColor: "rgba(255,255,255,0.15)",
                    },
                  ]}
                >
                  <Image source={item.img} style={styles.bankLogo} />
                  <Text style={[styles.bankText, isDark && { color: "#E5E7EB" }]}>
                    {item.name}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </LinearGradient>

          <View style={styles.noteFullWidth}>
            <Text style={styles.noteLabel}>{i18n.t("note_label")} </Text>
            <Text style={styles.noteText}>{i18n.t("note_text")}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
