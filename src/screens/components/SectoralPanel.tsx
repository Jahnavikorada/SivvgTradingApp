import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { bankData } from "../sectoraldata/bankData";
import { pharmaData } from "../sectoraldata/pharmaData";
import { itData } from "../sectoraldata/itData";
import { moneyData } from "../sectoraldata/monerData";
import { metalData } from "../sectoraldata/metalData";
import { autoData } from "../sectoraldata/autoData";
import { fmcgData } from "../sectoraldata/fmcData";

import i18n from "../../i18n";
import { LanguageContext } from "../../context/LanguageContext";

export default function SectoralPanel() {
  const { reloadKey } = useContext(LanguageContext); // ✅ refresh heading on language change
  const [selectedIndex, setSelectedIndex] = useState(0);

  // ✅ Heading translation keys (ONLY TEXT CHANGED)
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
    <View key={reloadKey} style={styles.row}>
      {/* ✅ LEFT BLUE CARD */}
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
                style={isActive ? styles.activeCircle : styles.inactiveCircle}
              >
                <Image
                  source={item.img}
                  style={isActive ? styles.activeIcon : styles.inactiveIcon}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* ✅ RIGHT SECTOR LIST CARD */}
      <LinearGradient
        colors={["rgba(255,46,76,0.30)", "rgba(30,42,120,0.30)"]}
        style={styles.rightCard}
      >
        {/* ✅ Translated Sector Heading */}
        <Text style={styles.heading}>{i18n.t(sectorHeadingMap[activeKey])}</Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          {activeData.map((item: any, index: number) => (
            <View key={index} style={styles.bankWhiteCard}>
              <Image source={item.img} style={styles.bankLogo} />
              <Text style={styles.bankText}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flex: 1,
    marginTop: 10,
    justifyContent: "space-between",
  },

  leftBar: {
    marginTop: 20,
    width: "20%",
    height: "85%",
    backgroundColor: "#1E3A8A",
    borderRadius: 40,
    alignItems: "center",
    overflow: "hidden",
  },

  /* ACTIVE ICON */
  activeCircle: {
    height: 70,
    width: 70,
    borderRadius: 60,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },

  /* INACTIVE ICON */
  inactiveCircle: {
    height: 70,
    width: 70,
    borderRadius: 50,
    backgroundColor: "rgba(255,255,255,0.15)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    borderWidth: 1.5,
    borderColor: "rgba(255,255,255,0.4)",
  },

  activeIcon: {
    height: 50,
    width: 50,
    resizeMode: "contain",
    opacity: 1,
  },

  inactiveIcon: {
    height: 50,
    width: 50,
    resizeMode: "contain",
    opacity: 0.9,
  },

  rightCard: {
    marginTop: 20,
    width: "75%",
    height: "85%",
    borderRadius: 40,
    borderWidth: 1.5,
    borderColor: "#1E3A8A",
    paddingHorizontal: 15,
    paddingVertical: 18,
    overflow: "hidden",
  },

  heading: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E2A78",
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 20,
    letterSpacing: 0.5,
  },

  bankWhiteCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 18,
    marginBottom: 16,
    borderWidth: 1.2,
    borderColor: "#1E2A78",
  },

  bankLogo: {
    width: 30,
    height: 35,
    resizeMode: "contain",
    marginRight: 12,
  },

  bankText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1E2A78",
  },
});
