import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import i18n from "../i18n";
import { LanguageContext } from "../context/LanguageContext";

export default function ChangePasswordScreen({ navigation }: any) {
  const { reloadKey } = useContext(LanguageContext); // ✅ refresh on language change

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const [passError, setPassError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const [isPassTouched, setIsPassTouched] = useState(false);
  const [isConfirmTouched, setIsConfirmTouched] = useState(false);

  // --------------------------------------------------------
  // VALIDATION FUNCTION — SMART RULE CHECKS
  // --------------------------------------------------------
  const validateAndSubmit = () => {
    let valid = true;

    setIsPassTouched(true);
    setIsConfirmTouched(true);

    // Reset previous errors
    setPassError("");
    setConfirmError("");

    // ------------------------------------
    // 1. EMPTY FIELD VALIDATION
    // ------------------------------------
    if (!password.trim()) {
      setPassError(i18n.t("err_password_required"));
      valid = false;
    }

    if (!confirm.trim()) {
      setConfirmError(i18n.t("err_confirm_password_required"));
      valid = false;
    }

    if (!valid) return;

    // ------------------------------------
    // 2. MINIMUM LENGTH CHECK
    // ------------------------------------
    if (password.length < 6) {
      setPassError(i18n.t("err_password_min_6"));
      return;
    }

    // ------------------------------------
    // 3. SMART DYNAMIC RULE VALIDATION
    // ------------------------------------
    const missingRules: string[] = [];

    if (!/[A-Z]/.test(password)) missingRules.push(i18n.t("rule_uppercase"));
    if (!/[a-z]/.test(password)) missingRules.push(i18n.t("rule_lowercase"));
    if (!/\d/.test(password)) missingRules.push(i18n.t("rule_number"));
    if (!/[@$!%*?&]/.test(password))
      missingRules.push(i18n.t("rule_special_character"));

    if (missingRules.length > 0) {
      setPassError(i18n.t("err_must_include") + " " + missingRules.join(", "));
      return;
    }

    // ------------------------------------
    // 4. CONFIRM MATCH CHECK
    // ------------------------------------
    if (password !== confirm) {
      setConfirmError(i18n.t("err_passwords_do_not_match"));
      return;
    }

    // ------------------------------------
    // 5. SUCCESS → NAVIGATE
    // ------------------------------------
    navigation.navigate("Success");
  };

  return (
    <View key={reloadKey} style={{ flex: 1 }}>
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

          {/* CARD */}
          <View style={styles.card}>
            <Text style={styles.title}>{i18n.t("change_password_title")}</Text>
            <Text style={styles.subtitle}>
              {i18n.t("change_password_subtitle")}
            </Text>

            {/* PASSWORD FIELD */}
            <View
              style={[
                styles.inputBox,
                isPassTouched && {
                  borderWidth: 2,
                  borderColor: passError ? "#e66868ff" : "green",
                },
              ]}
            >
              <Ionicons name="lock-closed" size={20} color="#1E2A78" />
              <TextInput
                placeholder={i18n.t("new_password")}
                placeholderTextColor="#1E2A78"
                secureTextEntry={!showPass}
                style={styles.textInput}
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
                  size={20}
                  color="#1E2A78"
                />
              </TouchableOpacity>
            </View>

            {passError ? <Text style={styles.errorText}>{passError}</Text> : null}

            {/* CONFIRM PASSWORD FIELD */}
            <View
              style={[
                styles.inputBox,
                isConfirmTouched && {
                  borderWidth: 2,
                  borderColor: confirmError ? "#e66868ff" : "green",
                },
              ]}
            >
              <Ionicons name="lock-closed" size={20} color="#1E2A78" />
              <TextInput
                placeholder={i18n.t("confirm_password")}
                placeholderTextColor="#1E2A78"
                secureTextEntry={!showConfirmPass}
                style={styles.textInput}
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
                  size={20}
                  color="#1E2A78"
                />
              </TouchableOpacity>
            </View>

            {confirmError ? (
              <Text style={styles.errorText}>{confirmError}</Text>
            ) : null}

            {/* BUTTON */}
            <TouchableOpacity style={styles.button} onPress={validateAndSubmit}>
              <Text style={styles.buttonText}>
                {i18n.t("update_password")}
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

// --------------------------------------------------------
// STYLES
// --------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },

  card: {
    width: "85%",
    padding: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    backgroundColor: "rgba(255,255,255,0.15)",
  },

  title: {
    fontSize: 26,
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Lato-Bold",
  },

  subtitle: {
    fontSize: 14,
    color: "#FFF",
    opacity: 0.8,
    textAlign: "center",
    marginVertical: 20,
    fontFamily: "Lato-Semibold",
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 8,
  },

  textInput: {
    flex: 1,
    color: "#1E2A78",
    marginLeft: 10,
    fontFamily: "Lato-Medium",
  },

  errorText: {
    color: "yellow",
    fontSize: 13,
    marginBottom: 12,
    marginLeft: 10,
  },

  button: {
    marginTop: 25,
    backgroundColor: "#fff",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
  },

  buttonText: {
    fontSize: 16,
    color: "#1E2A78",
    fontFamily: "Lato-Bold",
  },
});
