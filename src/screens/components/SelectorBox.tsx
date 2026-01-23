import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "../../context/ThemeContext";

export default function SelectorBox({ value }: { value: string }) {
  const { isDark } = useTheme();

  return (
    <View
      style={[
        styles.box,
        isDark && {
          backgroundColor: "rgba(0,0,0,0.55)", // ✅ dark theme background
        },
      ]}
    >
      <Ionicons
        name="person"
        size={18}
        color={isDark ? "#E5E7EB" : "#1e2a78"}
      />

      <Text
        style={[
          styles.text,
          isDark && { color: "#E5E7EB" }, // ✅ soft white text
        ]}
      >
        {value}
      </Text>

      <Ionicons
        name="chevron-down"
        size={18}
        color={isDark ? "#E5E7EB" : "#1e2a78"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3d6e5", // ✅ light theme unchanged
    borderRadius: 22,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },

  text: {
    flex: 1,
    marginLeft: 10,
    fontWeight: "600",
    color: "#1e2a78",
  },
});
