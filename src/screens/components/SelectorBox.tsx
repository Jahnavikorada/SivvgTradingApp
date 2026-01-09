import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SelectorBox({ value }: { value: string }) {
  return (
    <View style={styles.box}>
      <Ionicons name="person" size={18} color="#1e2a78" />
      <Text style={styles.text}>{value}</Text>
      <Ionicons name="chevron-down" size={18} color="#1e2a78" />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3d6e5",
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