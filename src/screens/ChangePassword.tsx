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
import { useTheme } from "../context/ThemeContext"; // ✅ Theme
import i18n from "../i18n"; // ✅ Language
import { LanguageContext } from "../context/LanguageContext"; // ✅ Language reload

export default function ChangePasswordScreen({ navigation }: any) {
  const { theme } = useTheme();
  const { reloadKey } = useContext(LanguageContext); // ✅ re-render on language change
  const isLight = theme === "light";

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
    if (!/[A-Z]/.test(password)) missingRules.push(i18n.t("rule_uppercase"));
    if (!/[a-z]/.test(password)) missingRules.push(i18n.t("rule_lowercase"));
    if (!/\d/.test(password)) missingRules.push(i18n.t("rule_number"));
    if (!/[@$!%*?&]/.test(password))
      missingRules.push(i18n.t("rule_special_character"));

    if (missingRules.length > 0) {
      setPassError(i18n.t("err_must_include") + " " + missingRules.join(", "));
      return;
    }

    if (password !== confirm) {
      setConfirmError(i18n.t("err_passwords_do_not_match"));
      return;
    }

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

            {/* PASSWORD FIELD */}
            <View
              style={[
                styles.inputBox,
                isPassTouched && {
                  borderWidth: 2,
                  borderColor: passError ? "#e66868ff" : "green",
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

            {/* CONFIRM PASSWORD FIELD */}
            <View
              style={[
                styles.inputBox,
                isConfirmTouched && {
                  borderWidth: 2,
                  borderColor: confirmError ? "#e66868ff" : "green",
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
                  opacity: 0.9,
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

// ------------------- STYLES (UNCHANGED) -------------------
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },

  backButton: { position: "absolute", top: 40, left: 20 },

  card: {
    width: "85%",
    padding: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
  },

  title: { 
    fontSize: 30,
     textAlign: "center", 
     fontFamily: "Lato-Bold",
     marginBottom:8,
     marginTop:10
    },

  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 20,
    fontFamily: "Lato-Semibold",
    marginBottom:32,
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 20,
  },

  textInput: { 
    flex: 1, 
    marginLeft: 10,
    fontFamily: "Lato-Medium" ,
    fontSize:18,
    },

  errorText: {
    color: "yellow",
    fontSize: 13,
    marginBottom: 12,
    marginLeft: 10,
    bottom:10
  },

  button: {
    marginTop: 25,
    paddingVertical: 10,
    borderRadius: 40,
    alignItems: "center",
    width:"80%",
    alignSelf:"center",
    marginBottom:10,
  },

  buttonText: { 
    fontSize: 22, 
    fontFamily: "Lato-Bold" ,

  },
});
