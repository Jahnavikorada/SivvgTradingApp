import React from "react";
import {  Text, StyleSheet, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { useTheme } from "../../context/ThemeContext";

export default function CommonHeader({ title }: any) {
  const navigation = useNavigation<any>();
  const { isDark } = useTheme();

  // Icon and title colors based on theme
  const iconColor = isDark ? "#FFF" : "#1E2A78";
  const titleColor = isDark ? "#FFF" : "white";
  const iconBgColor = isDark ? "#1a1a1a" : "#FFF";

  // Gradient is always the same
  const gradientColors = ["#FF2E4C", "#1E2A78"];

  return (
    <LinearGradient
      colors={gradientColors}
      style={styles.container}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <SafeAreaView style={styles.topBar}>
        {/* ✅ MENU ICON */}
        <TouchableOpacity
          style={[styles.iconCircle, { backgroundColor: iconBgColor }]}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          activeOpacity={0.8}
        >
          <Ionicons name="menu" size={30} color={iconColor} />
        </TouchableOpacity>

        {/* ✅ TITLE */}
        <Text style={[styles.header, { color: titleColor }]}>{title}</Text>

        {/* ✅ NOTIFICATION ICON */}
        <TouchableOpacity
          style={[styles.iconCircle, { backgroundColor: iconBgColor }]}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Notifications")}
        >
          <Ionicons name="notifications" size={28} color={iconColor} />
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 2,
   
  },

  topBar: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  header: {
    fontSize: 26,
    fontWeight: "700",
    alignSelf:"center"
  },

  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
});
