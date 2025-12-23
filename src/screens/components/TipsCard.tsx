import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface Props {
  symbol: string;
  t1: number;
  t2: number;
  t3: number;
  isBuy?: boolean;
}

export default function TipsCard({
  symbol,
  t1,
  t2,
  t3,
  isBuy = true,
}: Props) {
  return (
    <View style={styles.card}>
      {/* TOP ROW */}
      <View style={styles.topRow}>
        <View style={styles.symbolBox}>
          <Text style={styles.symbolText}>{symbol}</Text>
          <Ionicons name="trending-up" size={18} color="white" />
        </View>

        <TouchableOpacity
          style={[
            styles.buyBtn,
            { backgroundColor: isBuy ? "#1FA463" : "#E53935" },
          ]}
        >
          <Text style={styles.buyText}>{isBuy ? "BUY" : "SELL"}</Text>
        </TouchableOpacity>
      </View>

      {/* T1 T2 T3 */}
      <View style={styles.tRow}>
        <View style={styles.tBox}>
          <Text style={styles.tLabel}>T1</Text>
          <Text style={styles.tValue}>{t1}</Text>
        </View>

        <View style={styles.tBox}>
          <Text style={styles.tLabel}>T2</Text>
          <Text style={styles.tValue}>{t2}</Text>
        </View>

        <View style={styles.tBox}>
          <Text style={styles.tLabel}>T3</Text>
          <Text style={styles.tValue}>{t3}</Text>
        </View>
      </View>

      {/* PROGRESS */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar} />
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.yahoo}>Yahoo!</Text>
        <Text style={styles.nse}>NSE</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F3F4F8",
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  symbolBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E2A78",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10,
    gap: 6,
  },

  symbolText: {
    color: "white",
    fontWeight: "700",
  },

  buyBtn: {
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 16,
  },

  buyText: {
    color: "white",
    fontWeight: "700",
  },

  tRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  tBox: {
    width: "32%",
    backgroundColor: "#3E4A99",
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: "center",
  },

  tLabel: {
    color: "white",
    fontSize: 12,
  },

  tValue: {
    color: "white",
    fontWeight: "700",
    marginTop: 2,
  },

  progressContainer: {
    height: 8,
    backgroundColor: "#E0E0E0",
    borderRadius: 6,
    marginTop: 10,
    overflow: "hidden",
  },

  progressBar: {
    width: "60%", // you can control this later
    height: "100%",
    backgroundColor: "#1FA463",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 6,
    gap: 10,
  },

  yahoo: {
    color: "#6A1B9A",
    fontWeight: "600",
  },

  nse: {
    color: "#E65100",
    fontWeight: "600",
  },
});
