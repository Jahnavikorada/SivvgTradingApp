import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function CommonHeader({ title, navigation }: any) {
  return (
    // <LinearGradient
    //   colors={["#FF2E4C", "#1E2A78"]}
    //   style={styles.container}
    //   start={{ x: 0, y: 0.5 }}
    //   end={{ x: 1, y: 0.5 }}
    // >
      <SafeAreaView style={styles.topBar}>
        
        {/* ✅ MENU ICON */}
        <TouchableOpacity
          style={styles.iconCircle}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="menu" size={24} color="#1E2A78" />
        </TouchableOpacity>

        {/* ✅ TITLE */}
        <Text style={styles.header}>{title}</Text>

        {/* ✅ NOTIFICATION ICON */}
        <TouchableOpacity 
        style={styles.iconCircle}
        >
          <Ionicons name="notifications" size={24} color="#1E2A78" />
        </TouchableOpacity>
      </SafeAreaView>
    //</LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 15,
  },

  topBar: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  header: {
    fontSize: 22,
    fontWeight: "500",
    color: "white",
  },

  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
});
