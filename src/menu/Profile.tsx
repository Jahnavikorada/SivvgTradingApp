import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "../context/ThemeContext";

export default function Profile({ navigation }: any) {
  const [showPassword, setShowPassword] = useState(false);
  const { isDark } = useTheme();

  /* ================= COLORS ================= */

  // Header title → SAME for both themes
  const headerTitleColor = "#FFFFFF";

  // Header icons (back, edit, profile)
  const headerIconColor = isDark ? "rgba(0,0,0,0.7)" : "#FFFFFF";

  return (
    <>
      <StatusBar barStyle={isDark ? "light-content" : "light-content"} />

      <LinearGradient
        colors={["#FF2E4C", "#1E2A78"]}
        style={styles.container}
      >
        {/* ================= HEADER ================= */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back"
              size={26}
              color={headerIconColor}
            />
          </TouchableOpacity>

          <Text style={[styles.headerTitle, { color: headerTitleColor }]}>
            My Profile
          </Text>

          <TouchableOpacity>
            <Ionicons
              name="pencil"
              size={22}
              color={headerIconColor}
            />
          </TouchableOpacity>
        </View>

        {/* ================= PROFILE ICON ================= */}
        <View style={styles.imageWrapper}>
          <Ionicons
            name="person-circle"
            size={120}
            color={headerIconColor}
          />
        </View>

        {/* ================= CARD ================= */}
        <View
          style={[
            styles.card,
            isDark && { backgroundColor: "rgba(0,0,0,0.4)" },
          ]}
        >
          {/* USER ID */}
          <View
            style={[
              styles.inputBox,
              isDark && { backgroundColor: "rgba(0,0,0,0.55)" },
            ]}
          >
            <Ionicons
              name="person"
              size={20}
              color={isDark ? "#E4E8EC" : "#1E2A78"}
            />
            <TextInput
              style={[styles.input, isDark && { color: "#FFFFFF" }]}
              placeholder="John_ID77"
              placeholderTextColor={isDark ? "#94A3B8" : "#777"}
            />
          </View>

          {/* PASSWORD */}
          <View
            style={[
              styles.inputBox,
              isDark && { backgroundColor: "rgba(0,0,0,0.55)" },
            ]}
          >
            <Ionicons
              name="lock-closed"
              size={20}
              color={isDark ? "#E4E8EC" : "#1E2A78"}
            />
            <TextInput
              style={[styles.input, isDark && { color: "#FFFFFF" }]}
              placeholder="********"
              placeholderTextColor={isDark ? "#94A3B8" : "#777"}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye" : "eye-off"}
                size={20}
                color={isDark ? "#E4E8EC" : "#1E2A78"}
              />
            </TouchableOpacity>
          </View>

          {/* EMAIL */}
          <View
            style={[
              styles.inputBox,
              isDark && { backgroundColor: "rgba(0,0,0,0.55)" },
            ]}
          >
            <Ionicons
              name="mail"
              size={20}
              color={isDark ? "#E4E8EC" : "#1E2A78"}
            />
            <TextInput
              style={[styles.input, isDark && { color: "#FFFFFF" }]}
              placeholder="john420@gmail.com"
              placeholderTextColor={isDark ? "#94A3B8" : "#777"}
              keyboardType="email-address"
            />
          </View>

          {/* PHONE */}
          <View
            style={[
              styles.inputBox,
              isDark && { backgroundColor: "rgba(0,0,0,0.55)" },
            ]}
          >
            <Ionicons
              name="call"
              size={20}
              color={isDark ? "#E4E8EC" : "#1E2A78"}
            />
            <TextInput
              style={[styles.input, isDark && { color: "#FFFFFF" }]}
              placeholder="9848321230"
              placeholderTextColor={isDark ? "#94A3B8" : "#777"}
              keyboardType="phone-pad"
            />
          </View>

          {/* ================= BUTTONS ================= */}
          <View style={styles.btnRow}>
            <TouchableOpacity
              style={[
                styles.btn,
                isDark && { backgroundColor: "rgba(0,0,0,0.60)" },
              ]}
            >
              <Text style={[styles.btnText, isDark && { color: "#FFFFFF" }]}>
                Update
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.btn,
                isDark && { backgroundColor: "rgba(0,0,0,0.60) "},
              ]}
            >
              <Text style={[styles.btnText, isDark && { color: "#FFFFFF" }]}>
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
  },

  imageWrapper: {
    marginTop: 50,
    alignSelf: "center",
  },

  card: {
    marginTop: 25,
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.35)",
    backgroundColor: "rgba(255,255,255,0.15)",
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 20,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: "#1E2A78",
  },

  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  btn: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginHorizontal: 5,
  },

  btnText: {
    color: "#1E2A78",
    fontSize: 16,
    fontWeight: "600",
  },
});
