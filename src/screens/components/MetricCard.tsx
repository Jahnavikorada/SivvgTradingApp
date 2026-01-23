import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useTheme } from "../../context/ThemeContext";

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
  const { isDark } = useTheme();

  return (
    <LinearGradient
      colors={["#FF2E4C", "#1E2A78"]}
      style={styles.metricBorder}
    >
      <View
        style={[
          styles.metricCard,
          isDark && {
            backgroundColor: "#121212", // ✅ Dark card
          },
        ]}
      >
        <Text
          style={[
            styles.metricTitle,
            isDark && { color: "#E5E7EB" }, // ✅ Soft white text
          ]}
        >
          {title}
        </Text>

        <Text
          style={[
            styles.metricValue,
            { color: valueColor }, // value color stays SAME
          ]}
        >
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
    backgroundColor: "#FFFFFF", // ✅ Light theme unchanged
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
