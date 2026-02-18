import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Platform,
} from "react-native";

import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";

import { useTheme } from "../context/ThemeContext";
import i18n from "../i18n";
import { LanguageContext } from "../context/LanguageContext";

import { androidStyles } from "./ChangePassword.android.styles";
import { iosStyles } from "./ChangePassword.ios.styles";

export default function ChangePassword({ navigation }: any) {
  // ✅ Hooks — always first
  const { theme } = useTheme();
  useContext(LanguageContext);

  const styles = Platform.OS === "ios" ? iosStyles : androidStyles;
  const isLight = theme === "light";

  // ---------------- STATE ----------------
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const [passError, setPassError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const [isPassTouched, setIsPassTouched] = useState(false);
  const [isConfirmTouched, setIsConfirmTouched] = useState(false);

  // ---------------- VALIDATION ----------------
  const validateAndSubmit = () => {
    let valid = true;

    setIsPassTouched(true);
    setIsConfirmTouched(true);
    setPassError("");
    setConfirmError("");

    if (!password.trim()) {
      setPassError(i18n.t("err_password_required"));
      valid = false;
    }

    if (!confirm.trim()) {
      setConfirmError(i18n.t("err_confirm_password_required"));
      valid = false;
    }

    if (!valid) return;

    if (password.length < 6) {
      setPassError(i18n.t("err_password_min_6"));
      return;
    }

    const missingRules: string[] = [];

    if (!/[A-Z]/.test(password))
      missingRules.push(i18n.t("rule_uppercase"));

    if (!/[a-z]/.test(password))
      missingRules.push(i18n.t("rule_lowercase"));

    if (!/\d/.test(password))
      missingRules.push(i18n.t("rule_number"));

    if (!/[@$!%*?&]/.test(password))
      missingRules.push(i18n.t("rule_special_character"));

    if (missingRules.length > 0) {
      setPassError(
        i18n.t("err_must_include") + " " + missingRules.join(", ")
      );
      return;
    }

    if (password !== confirm) {
      setConfirmError(i18n.t("err_passwords_do_not_match"));
      return;
    }

    navigation.navigate("Success");
  };

  // ---------------- UI ----------------
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/images/change.png")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["rgba(255,46,76,0.8)", "rgba(30,42,120,0.8)"]}
          style={styles.container}
        >
          {/* Back Button */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={28} color="#FFF" />
          </TouchableOpacity>

          {/* Card */}
          <View
            style={[
              styles.card,
              {
                backgroundColor: isLight
                  ? "rgba(255,255,255,0.15)"
                  : "rgba(0,0,0,0.5)",
              },
            ]}
          >
            <Text style={[styles.title, { color: "#FFF" }]}>
              {i18n.t("change_password_title")}
            </Text>

            <Text style={[styles.subtitle, { color: "#FFF", opacity: 0.8 }]}>
              {i18n.t("change_password_subtitle")}
            </Text>

            {/* PASSWORD */}
            <View
              style={[
                styles.inputBox,
                isPassTouched && {
                  borderWidth: 2,
                  borderColor: passError ? "#e66868" : "green",
                },
                {
                  backgroundColor: isLight
                    ? "#FFF"
                    : "rgba(0,0,0,0.55)",
                },
              ]}
            >
              <Ionicons
                name="lock-closed"
                size={22}
                color={isLight ? "#1E2A78" : "#e4e8ec"}
              />

              <TextInput
                placeholder={i18n.t("new_password")}
                placeholderTextColor={isLight ? "#1E2A78" : "#94A3B8"}
                secureTextEntry={!showPass}
                style={[
                  styles.textInput,
                  { color: isLight ? "#1E2A78" : "#F8FAFC" },
                ]}
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  setPassError("");
                  setIsPassTouched(false);
                }}
              />

              <TouchableOpacity onPress={() => setShowPass(!showPass)}>
                <Ionicons
                  name={showPass ? "eye" : "eye-off"}
                  size={22}
                  color={isLight ? "#1E2A78" : "#e4e8ec"}
                />
              </TouchableOpacity>
            </View>

            {passError ? (
              <Text style={styles.errorText}>{passError}</Text>
            ) : null}

            {/* CONFIRM PASSWORD */}
            <View
              style={[
                styles.inputBox,
                isConfirmTouched && {
                  borderWidth: 2,
                  borderColor: confirmError ? "#e66868" : "green",
                },
                {
                  backgroundColor: isLight
                    ? "#FFF"
                    : "rgba(0,0,0,0.55)",
                },
              ]}
            >
              <Ionicons
                name="lock-closed"
                size={22}
                color={isLight ? "#1E2A78" : "#e4e8ec"}
              />

              <TextInput
                placeholder={i18n.t("confirm_password")}
                placeholderTextColor={isLight ? "#1E2A78" : "#94A3B8"}
                secureTextEntry={!showConfirmPass}
                style={[
                  styles.textInput,
                  { color: isLight ? "#1E2A78" : "#F8FAFC" },
                ]}
                value={confirm}
                onChangeText={(text) => {
                  setConfirm(text);
                  setConfirmError("");
                  setIsConfirmTouched(false);
                }}
              />

              <TouchableOpacity
                onPress={() => setShowConfirmPass(!showConfirmPass)}
              >
                <Ionicons
                  name={showConfirmPass ? "eye" : "eye-off"}
                  size={22}
                  color={isLight ? "#1E2A78" : "#e4e8ec"}
                />
              </TouchableOpacity>
            </View>

            {confirmError ? (
              <Text style={styles.errorText}>{confirmError}</Text>
            ) : null}

            {/* BUTTON */}
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: isLight ? "#FFF" : "#1a1a1a",
                },
              ]}
              onPress={validateAndSubmit}
            >
              <Text
                style={[
                  styles.buttonText,
                  { color: isLight ? "#1E2A78" : "#F8FAFC" },
                ]}
              >
                {i18n.t("update_password")}
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
