import React, { useState } from "react";
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
import { useTheme } from "../context/ThemeContext"; // ✅ ThemeContext

export default function ChangePasswordScreen({ navigation }: any) {
  const { theme } = useTheme();
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
      setPassError("Password is required");
      valid = false;
    }
    if (!confirm.trim()) {
      setConfirmError("Confirm password is required");
      valid = false;
    }
    if (!valid) return;

    if (password.length < 6) {
      setPassError("Password must be at least 6 characters");
      return;
    }

    const missingRules = [];
    if (!/[A-Z]/.test(password)) missingRules.push("uppercase");
    if (!/[a-z]/.test(password)) missingRules.push("lowercase");
    if (!/\d/.test(password)) missingRules.push("number");
    if (!/[@$!%*?&]/.test(password)) missingRules.push("special character");

    if (missingRules.length > 0) {
      setPassError("Must include " + missingRules.join(", "));
      return;
    }

    if (password !== confirm) {
      setConfirmError("Passwords do not match");
      return;
    }

    navigation.navigate("Success");
  };

  return (
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
        <View style={[
          styles.card,
          { backgroundColor: isLight ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.5)" }
        ]}>
          <Text style={[styles.title, { color: "#FFF" }]}>Change Password</Text>
          <Text style={[styles.subtitle, { color: "#FFF", opacity: 0.8 }]}>
            Please enter your new password
          </Text>

          {/* PASSWORD FIELD */}
          <View style={[
            styles.inputBox,
            isPassTouched && {
              borderWidth: 2,
              borderColor: passError ? "#e66868ff" : "green",
            },
            { backgroundColor: isLight ? "#FFF" : "rgba(0,0,0,0.55)" }
          ]}>
            <Ionicons name="lock-closed" size={20} color={isLight ? "#1E2A78" : "#e4e8ec"} />
            <TextInput
              placeholder="New Password"
              placeholderTextColor={isLight ? "#1E2A78" : "#94A3B8"}
              secureTextEntry={!showPass}
              style={[styles.textInput, { color: isLight ? "#1E2A78" : "#F8FAFC" }]}
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
                color={isLight ? "#1E2A78" : "#e4e8ec"}
              />
            </TouchableOpacity>
          </View>
          {passError ? <Text style={styles.errorText}>{passError}</Text> : null}

          {/* CONFIRM PASSWORD FIELD */}
          <View style={[
            styles.inputBox,
            isConfirmTouched && {
              borderWidth: 2,
              borderColor: confirmError ? "#e66868ff" : "green",
            },
            { backgroundColor: isLight ? "#FFF" : "rgba(0,0,0,0.55)" }
          ]}>
            <Ionicons name="lock-closed" size={20} color={isLight ? "#1E2A78" : "#e4e8ec"} />
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor={isLight ? "#1E2A78" : "#94A3B8"}
              secureTextEntry={!showConfirmPass}
              style={[styles.textInput, { color: isLight ? "#1E2A78" : "#F8FAFC" }]}
              value={confirm}
              onChangeText={(text) => {
                setConfirm(text);
                setConfirmError("");
                setIsConfirmTouched(false);
              }}
            />
            <TouchableOpacity onPress={() => setShowConfirmPass(!showConfirmPass)}>
              <Ionicons
                name={showConfirmPass ? "eye" : "eye-off"}
                size={20}
                color={isLight ? "#1E2A78" : "#e4e8ec"}
              />
            </TouchableOpacity>
          </View>
          {confirmError ? <Text style={styles.errorText}>{confirmError}</Text> : null}

          {/* BUTTON */}
          <TouchableOpacity
            style={[styles.button, { backgroundColor: isLight ? "#FFF" : "#1a1a1a", opacity: 0.9 }]}
            onPress={validateAndSubmit}
          >
            <Text style={[styles.buttonText, { color: isLight ? "#1E2A78" : "#F8FAFC" }]}>
              Update Password
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

// ------------------- STYLES -------------------
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

  title: { fontSize: 26, textAlign: "center", fontFamily: "Lato-Bold" },

  subtitle: { fontSize: 14, textAlign: "center", marginVertical: 20, fontFamily: "Lato-Semibold" },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 8,
  },

  textInput: { flex: 1, marginLeft: 10, fontFamily: "Lato-Medium" },

  errorText: { color: "yellow", fontSize: 13, marginBottom: 12, marginLeft: 10 },

  button: { marginTop: 25, paddingVertical: 14, borderRadius: 25, alignItems: "center" },

  buttonText: { fontSize: 16, fontFamily: "Lato-Bold" },
});
