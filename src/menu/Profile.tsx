import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";

import i18n from "../i18n";
import { LanguageContext } from "../context/LanguageContext";

export default function Profile({ navigation }: any) {
  const { reloadKey } = useContext(LanguageContext); // ✅ refresh texts
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View key={reloadKey} style={{ flex: 1 }}>
      <LinearGradient
        colors={["#FF2E4C", "#1E2A78"]}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* HEADER */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={26} color="white" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>{i18n.t("my_profile")}</Text>

          <TouchableOpacity onPress={() => navigation.navigate("")}>
            <Ionicons name="pencil" size={22} color="white" />
          </TouchableOpacity>
        </View>

        {/* PROFILE IMAGE */}
        <View style={styles.imageWrapper}>
          <Ionicons name="person-circle" size={120} color="white" />
        </View>

        {/* WHITE CARD */}
        <View style={styles.card}>
          {/* USER ID */}
          <View style={styles.inputBox}>
            <Ionicons name="person" size={20} color="#1E2A78" />
            <TextInput
              style={styles.input}
              placeholder={i18n.t("user_id")}
              placeholderTextColor="#777"
              defaultValue="John_ID77"
            />
          </View>

          {/* PASSWORD */}
          <View style={styles.inputBox}>
            <Ionicons name="lock-closed" size={20} color="#1E2A78" />
            <TextInput
              style={styles.passwordInput}
              placeholder={i18n.t("password")}
              placeholderTextColor="#777"
              secureTextEntry={!showPassword}
              defaultValue="********"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye" : "eye-off"}
                size={20}
                color="#1E2A78"
              />
            </TouchableOpacity>
          </View>

          {/* EMAIL */}
          <View style={styles.inputBox}>
            <Ionicons name="mail" size={20} color="#1E2A78" />
            <TextInput
              style={styles.input}
              placeholder={i18n.t("email")}
              placeholderTextColor="#777"
              defaultValue="john420@gmail.com"
            />
          </View>

          {/* PHONE */}
          <View style={styles.inputBox}>
            <Ionicons name="call" size={20} color="#1E2A78" />
            <TextInput
              style={styles.input}
              placeholder={i18n.t("phone_number")}
              placeholderTextColor="#777"
              keyboardType="phone-pad"
              defaultValue="9848321230"
            />
          </View>

          {/* BUTTON ROW */}
          <View style={styles.btnRow}>
            <TouchableOpacity
              style={styles.updateBtn}
              onPress={() => navigation.navigate("")}
            >
              <Text style={styles.updateText}>{i18n.t("update")}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.deleteBtn}
              onPress={() => navigation.navigate("")}
            >
              <Text style={styles.deleteText}>{i18n.t("delete")}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

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
    gap: 10,
  },

  headerTitle: {
    fontSize: 20,
    color: "white",
    fontWeight: "600",
  },

  imageWrapper: {
    marginTop: 50,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    marginTop: 25,
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    backgroundColor: "rgba(255,255,255,0.15)",
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 25,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: "#1E2A78",
  },

  passwordInput: {
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

  updateBtn: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginRight: 10,
  },

  deleteBtn: {
    flex: 1,
    backgroundColor: "#FFf",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginLeft: 10,
  },

  updateText: {
    color: "#1E2A78",
    fontSize: 16,
    fontWeight: "600",
  },

  deleteText: {
    color: "#1E2A78",
    fontSize: 16,
    fontWeight: "600",
  },
});
