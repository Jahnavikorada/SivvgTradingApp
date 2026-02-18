import React from "react";
import { View, Text, Platform } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useTheme } from "../../context/ThemeContext";

import { androidStyles } from "./MetricCard.android.styles";
import { iosStyles } from "./MetricCard.ios.styles";

const styles = Platform.OS === "ios" ? iosStyles : androidStyles;

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
          isDark && { backgroundColor: "#121212" },
        ]}
      >
        <Text
          style={[
            styles.metricTitle,
            isDark && { color: "#E5E7EB" },
          ]}
        >
          {title}
        </Text>

        <Text
          style={[
            styles.metricValue,
            { color: valueColor },
          ]}
        >
          {value}
        </Text>
      </View>
    </LinearGradient>
  );
}
