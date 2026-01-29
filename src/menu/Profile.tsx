import React, { useState, useContext } from "react";
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

import i18n from "../i18n";
import { LanguageContext } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

export default function Profile({ navigation }: any) {
  const { reloadKey } = useContext(LanguageContext); // ✅ refresh texts
  const [showPassword, setShowPassword] = useState(false);

  const { theme } = useTheme();
  const isDark = theme === "dark";

  /* ================= COLORS ================= */
  const headerTitleColor = "#FFFFFF"; // header title always white
  const headerIconColor = isDark ? "rgba(0,0,0,0.7)" : "#FFFFFF";

  return (
    <View key={reloadKey} style={{ flex: 1 }}>
      <StatusBar barStyle={isDark ? "light-content" : "light-content"} />

      <LinearGradient
        colors={["#FF2E4C", "#1E2A78"]}
        style={styles.container}
      >
        {/* ================= HEADER ================= */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={28} color={headerIconColor} />
          </TouchableOpacity>

          <Text style={[styles.headerTitle, { color: headerTitleColor }]}>
            {i18n.t("my_profile")}
          </Text>

          <TouchableOpacity>
            <Ionicons name="pencil" size={22} color={headerIconColor} />
          </TouchableOpacity>
        </View>

        {/* ================= PROFILE ICON ================= */}
        <View style={styles.imageWrapper}>
          <Ionicons name="person-circle" size={120} color={headerIconColor} />
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
            style={[styles.inputBox, isDark && { backgroundColor: "rgba(0,0,0,0.55)" }]}
          >
            <Ionicons
              name="person"
              size={22}
              color={isDark ? "#E4E8EC" : "#1E2A78"}
            />
            <TextInput
              style={[styles.input, isDark && { color: "#FFFFFF" }]}
              placeholder={i18n.t("user_id")}
              placeholderTextColor={isDark ? "#94A3B8" : "#777"}
              defaultValue="John_ID77"
            />
          </View>

          {/* PASSWORD */}
          <View
            style={[styles.inputBox, isDark && { backgroundColor: "rgba(0,0,0,0.55)" }]}
          >
            <Ionicons
              name="lock-closed"
              size={22}
              color={isDark ? "#E4E8EC" : "#1E2A78"}
            />
            <TextInput
              style={[styles.input, isDark && { color: "#FFFFFF" }]}
              placeholder={i18n.t("password")}
              placeholderTextColor={isDark ? "#94A3B8" : "#777"}
              secureTextEntry={!showPassword}
              defaultValue="********"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye" : "eye-off"}
                size={22}
                color={isDark ? "#E4E8EC" : "#1E2A78"}
              />
            </TouchableOpacity>
          </View>

          {/* EMAIL */}
          <View
            style={[styles.inputBox, isDark && { backgroundColor: "rgba(0,0,0,0.55)" }]}
          >
            <Ionicons
              name="mail"
              size={22}
              color={isDark ? "#E4E8EC" : "#1E2A78"}
            />
            <TextInput
              style={[styles.input, isDark && { color: "#FFFFFF" }]}
              placeholder={i18n.t("email")}
              placeholderTextColor={isDark ? "#94A3B8" : "#777"}
              defaultValue="john420@gmail.com"
              keyboardType="email-address"
            />
          </View>

          {/* PHONE */}
          <View
            style={[styles.inputBox, isDark && { backgroundColor: "rgba(0,0,0,0.55)" }]}
          >
            <Ionicons
              name="call"
              size={22}
              color={isDark ? "#E4E8EC" : "#1E2A78"}
            />
            <TextInput
              style={[styles.input, isDark && { color: "#FFFFFF" }]}
              placeholder={i18n.t("phone_number")}
              placeholderTextColor={isDark ? "#94A3B8" : "#777"}
              defaultValue="9848321230"
              keyboardType="phone-pad"
            />
          </View>

          {/* ================= BUTTONS ================= */}
          <View style={styles.btnRow}>
            <TouchableOpacity
              style={[styles.btn, isDark && { backgroundColor: "rgba(0,0,0,0.60)" }]}
            >
              <Text style={[styles.btnText, isDark && { color: "#FFFFFF" }]}>
                {i18n.t("update")}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.btn, isDark && { backgroundColor: "rgba(0,0,0,0.60)" }]}
            >
              <Text style={[styles.btnText, isDark && { color: "#FFFFFF" }]}>
                {i18n.t("delete")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
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
    fontSize: 24,
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
    top:10
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
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
    paddingVertical: 10,
    borderRadius: 40,
    alignItems: "center",
    marginHorizontal: 5,
    marginBottom:30,
    top:18
  },

  btnText: {
    color: "#1E2A78",
    fontSize: 20,
    fontWeight: "600",
  },
});
