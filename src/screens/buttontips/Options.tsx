import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TipsCard from "../components/TipsCard";

import { useTheme } from "../../context/ThemeContext";
import i18n from "../../i18n";

type DurationType = "1D" | "1W" | "1M";

export default function Options({ duration }: { duration: DurationType }) {
  const { isDark } = useTheme(); // 🌙 theme (unchanged)

  const optionsData: Record<DurationType, any[]> = {
    "1D": [
      { symbol: "ACC-DEC", t1: 2310, t2: 2340, t3: 2390 },
    ],

    "1W": [
      { symbol: "ACC-DEC", t1: 2350, t2: 2400, t3: 2460 },
    ],

    "1M": [
      { symbol: "ACC-DEC", t1: 2480, t2: 2550, t3: 2620 },
      { symbol: "RELIANCE-DEC", t1: 2450, t2: 2490, t3: 2550 },
    ],
  };

  const data = optionsData[duration];

  return (
    <View>
      {/* ✅ THEME + LANGUAGE AWARE TITLE */}
      <Text
        style={[
          styles.title,
          { color: isDark ? "#FFFFFF" : "#1e27a8" },
        ]}
      >
        {i18n.t("options")} ({duration})
      </Text>

      {data.map((item, index) => (
        <TipsCard
          key={index}
          symbol={item.symbol}
          t1={item.t1}
          t2={item.t2}
          t3={item.t3}
          isBuy
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
   title: {
    marginLeft:10,
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    
  },
});
