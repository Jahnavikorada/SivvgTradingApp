import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TipsCard from "../components/TipsCard";
import { useTheme } from "../../context/ThemeContext";
import i18n from "../../i18n"; // ✅ language import

type DurationType = "1D" | "1W" | "1M";

export default function Futures({ duration }: { duration: DurationType }) {
  const { isDark } = useTheme(); // ✅ theme untouched

  const futuresData: Record<DurationType, any[]> = {
    "1D": [
      { symbol: "BANKNIFTY", t1: 47850, t2: 47980, t3: 48120 },
    ],

    "1W": [
      { symbol: "BANKNIFTY", t1: 48200, t2: 48500, t3: 48850 },
      { symbol: "NIFTY", t1: 21980, t2: 22150, t3: 22300 },
    ],

    "1M": [
      { symbol: "BANKNIFTY", t1: 49000, t2: 49500, t3: 50100 },
      { symbol: "NIFTY", t1: 22500, t2: 22900, t3: 23300 },
    ],
  };

  const data = futuresData[duration];

  return (
    <View>
      {/* ✅ THEME + LANGUAGE (NO THEME MODIFIED) */}
      <Text
        style={[
          styles.title,
          { color: isDark ? "#FFFFFF" : "#1e27a8" },
        ]}
      >
        {i18n.t("futures")} ({duration})
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
