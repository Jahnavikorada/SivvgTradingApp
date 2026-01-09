import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";


interface MetricCardProps {
  title: string;
  value: string;
  valueColor: string;
}

export default function MetricCard({
  title,
  value,
  valueColor,
}: MetricCardProps) {
  return (
    <LinearGradient
      colors={["#FF2E4C", "#1E2A78"]}
      style={styles.metricBorder}
    >
      <View style={styles.metricCard}>
        <Text style={styles.metricTitle}>{title}</Text>
        <Text style={[styles.metricValue, { color: valueColor }]}>
          {value}
        </Text>
      </View>
    </LinearGradient>
  );
}


/* ✅ STYLES */
const styles = StyleSheet.create({
  metricBorder: {
    width: "47%",
    borderRadius: 18,
    padding: 2, // gradient thickness
  },

  metricCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  metricTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1E2A78",
    textAlign: "center",
    marginBottom: 6,
  },

  metricValue: {
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
  },
});