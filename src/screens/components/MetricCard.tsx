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
    width: "45%",
    marginLeft:10,
    marginRight:12,
    borderRadius: 10,
    padding: 2.5,
    top:10
    
  },

  metricCard: {
    backgroundColor: "#FFFFFF", 
    borderRadius: 8,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
  },

  metricTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1E2A78",
    textAlign: "center",
    marginBottom: 6,
  },

  metricValue: {
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
  },
});
