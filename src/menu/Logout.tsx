// Logout.tsx

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { useTheme } from "../context/ThemeContext";

export default function LogoutScreen({ navigation }: any) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? "#1a1a1a" : "#ffffff" },
      ]}
    >
      <View
        style={[
          styles.box,
          {
            backgroundColor: isDark ? "#1a1a1a" : "transparent",
            borderRadius: isDark ? 16 : 0,
          },
        ]}
      >
        <MaterialIcons
          name="logout"
          size={60}
          color={isDark ? "#E5E7EB" : "#1E2A78"}
        />

        <Text
          style={[
            styles.title,
            { color: isDark ? "#E5E7EB" : "#1E2A78" },
          ]}
        >
          Logout
        </Text>

        <Text
          style={[
            styles.user,
            { color: isDark ? "#e5e7eb" : "#1E2A78" },
          ]}
        >
          Hi John
        </Text>

        <Text
          style={[
            styles.msg,
            { color: isDark ? "#e5e7eb" : "#1E2A78" },
          ]}
        >
          Are you sure you want to logout?
        </Text>

        <View style={styles.row}>
          <TouchableOpacity
            style={[
              styles.yes,
              { backgroundColor: isDark ? "#E5E7EB" : "#1E2A78" },
            ]}
            onPress={() => navigation.goBack()}
          >
            <Text
              style={[
                styles.yesText,
                { color: isDark ? "#020617" : "#ffffff" },
              ]}
            >
              Yes
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.no,
              { borderColor: isDark ? "#E5E7EB" : "#1E2A78" },
            ]}
            onPress={() => navigation.goBack()}
          >
            <Text
              style={[
                styles.noText,
                { color: isDark ? "#E5E7EB" : "#1E2A78" },
              ]}
            >
              No
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    width: "85%",
    padding: 30,
    //borderWidth: 1,
   // borderColor: "#999",
    alignItems: "center",
    gap: 6
  },

  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "600",
    color: "#1E2A78",
  },

  user: {
    marginTop: 18,
    color: "#1E2A78",
    fontWeight: "bold",
    fontSize: 18
  },

  msg: {
    marginTop: 2,
    fontSize: 14,
    color: "#1E2A78",
    opacity: 0.9,
    textAlign: "center",
  },

  row: {
    flexDirection: "row",
    marginTop: 20,
  },

  yes: {
    backgroundColor: "#1E2A78",
    paddingHorizontal: 30,
    paddingVertical: 8,
    marginRight: 10,
  },

  yesText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500"
  },

  no: {
    borderWidth: 1,
    borderColor: "#1E2A78",
    paddingHorizontal: 30,
    paddingVertical: 8,
  },

  noText: {
    color: "#1E2A78",
    fontSize: 16,
    fontWeight: "500"
  },
});
