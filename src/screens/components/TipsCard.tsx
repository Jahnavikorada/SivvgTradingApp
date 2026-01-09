import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

interface Props {
  symbol: string;
  t1: number;
  t2: number;
  t3: number;
  achievedCount?: number; // 🔥 0 | 1 | 2 | 3
  isBuy?: boolean;
}

export default function TipsCard({
  symbol,
  t1,
  t2,
  t3,
  achievedCount = 1,
  isBuy = true,
}: Props) {
  const targets = [t1, t2, t3];

  /* 📊 PROGRESS % */
  const progressPercent = Math.min(
    (achievedCount / targets.length) * 100,
    100
  );

  const openYahoo = () =>
    Linking.openURL(`https://finance.yahoo.com/quote/${symbol}.NS`);

  const openNSE = () =>
    Linking.openURL(
      `https://www.nseindia.com/get-quotes/equity?symbol=${symbol}`
    );

  return (
    <View style={styles.card}>
      {/* 🔷 HEADER */}
      <View style={styles.topRow}>
        <View style={styles.symbolStrip}>
          <Text style={styles.symbolText}>{symbol}</Text>
          <View style={styles.graphIcon}>
            <Ionicons name="trending-up" size={18} color="#fff" />
          </View>
        </View>

        <TouchableOpacity
          style={[
            styles.buyBtn,
            { backgroundColor: isBuy ? "#3E8E5B" : "#E53935" },
          ]}
        >
          <Text style={styles.buyText}>{isBuy ? "BUY" : "SELL"}</Text>
        </TouchableOpacity>
      </View>

      {/* 🎯 TARGET LABELS */}
      <View style={styles.targetsRow}>
        {["T1", "T2", "T3"].map((label, index) => (
          <View
            key={label}
            style={[
              styles.targetBox,
              achievedCount > index && styles.targetBoxActive,
            ]}
          >
            <Text style={styles.targetLabel}>{label}</Text>
          </View>
        ))}
      </View>

      {/* 🎯 TARGET VALUES */}
      <View style={styles.valuesRow}>
        {targets.map((value, index) => (
          <Text key={index} style={styles.targetValue}>
            {value}
          </Text>
        ))}
      </View>

      {/* 📊 PROGRESS BAR */}
      <View style={styles.progressContainer}>
        <View
          style={[
            styles.progressFill,
            { width: `${progressPercent}%` },
          ]}
        />

        {progressPercent > 0 && (
          <View
            style={[
              styles.progressThumb,
              { left: `${progressPercent}%` },
            ]}
          >
            <Feather name="check" size={16} color="#2E7D32" />
          </View>
        )}
      </View>

      {/* 🔗 FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.yahoo} onPress={openYahoo}>
          Yahoo!
        </Text>
        <Text style={styles.divider}> | </Text>
        <Text style={styles.nse} onPress={openNSE}>
          NSE
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#EEF0F6",
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1.5,
    borderColor: "#1E2A78",
    paddingBottom: 14,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  symbolStrip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E2A78",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    paddingHorizontal: 24,
    paddingVertical: 6,
  },

  symbolText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    marginRight: 10,
  },

  graphIcon: {
    backgroundColor: "#6B74A6",
    padding: 6,
    borderRadius: 8,
  },

  buyBtn: {
    borderRadius: 22,
    marginRight: 14,
    marginTop: 4,
    paddingHorizontal: 20,
    paddingVertical: 6,
  },

  buyText: {
    color: "#fff",
    fontWeight: "700",
  },

  targetsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
    marginHorizontal: 10,
  },

  targetBox: {
    width: "32%",
    backgroundColor: "#565E92",
    paddingVertical: 10,
    alignItems: "center",
  },

  targetBoxActive: {
    backgroundColor: "#1E2A78",
  },

  targetLabel: {
    color: "#fff",
    fontWeight: "700",
  },

  valuesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 6,
  },

  targetValue: {
    width: "32%",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    color: "#1E2A78",
  },

  progressContainer: {
    height: 26,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginTop: 18,
    marginHorizontal: 14,
    borderWidth: 2,
    borderColor: "#B0B0B0",
    position: "relative",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#3E8E5B",
    borderRadius: 20,
  },

  progressThumb: {
    position: "absolute",
    top: -2,
    marginLeft: -14,
    width: 24,
    height: 24,
    backgroundColor: "#fff",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#3E8E5B",
    elevation: 4,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 10,
    marginRight: 12,
  },

  yahoo: {
    color: "#6A0DAD",
    fontWeight: "700",
    textDecorationLine: "underline",
  },

  nse: {
    color: "#FF7A00",
    fontWeight: "700",
    textDecorationLine: "underline",
  },

  divider: {
    marginHorizontal: 6,
    fontWeight: "700",
  },
});
