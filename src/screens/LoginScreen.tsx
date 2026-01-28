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
import { useTheme } from "../context/ThemeContext"; // ✅ Theme
import i18n from "../i18n"; // ✅ Language

export default function LoginScreen({ navigation }: any) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const [showPassword, setShowPassword] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({ userId: "", password: "" });
  const [isUserIdValid, setIsUserIdValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  // =================== VALIDATION ===================
  const handleLogin = () => {
    let valid = true;
    let newErrors: any = { userId: "", password: "" };

    // USER ID
    if (!userId.trim()) {
      newErrors.userId = i18n.t("err_userid_required");
      valid = false;
      setIsUserIdValid(false);
    } else if (userId.includes(" ")) {
      newErrors.userId = i18n.t("err_userid_no_spaces");
      valid = false;
      setIsUserIdValid(false);
    } else if (userId.length < 5) {
      newErrors.userId = i18n.t("err_userid_min_5");
      valid = false;
      setIsUserIdValid(false);
    } else {
      setIsUserIdValid(true);
    }

    // PASSWORD
    const regex = {
      uppercase: /[A-Z]/,
      lowercase: /[a-z]/,
      number: /[0-9]/,
      special: /[@$!%*?&^#()_+\-=<>]/,
      whitespace: /\s/,
    };

    if (!password.trim()) {
      newErrors.password = i18n.t("err_password_required");
      valid = false;
      setIsPasswordValid(false);
    } else if (password.length < 5) {
      newErrors.password = i18n.t("err_password_min_5");
      valid = false;
      setIsPasswordValid(false);
    } else if (regex.whitespace.test(password)) {
      newErrors.password = i18n.t("err_whitespace_not_allowed");
      valid = false;
      setIsPasswordValid(false);
    } else if (!regex.uppercase.test(password)) {
      newErrors.password = i18n.t("err_uppercase_required");
      valid = false;
      setIsPasswordValid(false);
    } else if (!regex.lowercase.test(password)) {
      newErrors.password = i18n.t("err_lowercase_required");
      valid = false;
      setIsPasswordValid(false);
    } else if (!regex.number.test(password)) {
      newErrors.password = i18n.t("err_number_required");
      valid = false;
      setIsPasswordValid(false);
    } else if (!regex.special.test(password)) {
      newErrors.password = i18n.t("err_special_required");
      valid = false;
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }

    setErrors(newErrors);

    if (valid) navigation.navigate("OtpVerification1");
  };

  return (
    <ImageBackground
      source={require("../../assets/images/login.png")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <LinearGradient
        colors={["rgba(255,46,76,0.75)", "rgba(30,42,120,0.75)"]}
        style={styles.container}
      >
        <View
          style={[
            styles.card,
            {
              backgroundColor: isLight
                ? "rgba(250,250,250,0.2)"
                : "rgba(30,41,59,0.5)",
              borderColor: isLight
                ? "rgba(255,255,255,0.4)"
                : "rgba(148,163,184,0.4)",
            },
          ]}
        >
          {/* TITLE */}
          <Text style={[styles.title, { color: "#fff" }]}>
            {i18n.t("welcome_to")}{" "}
            <Text style={[styles.brand, { color: "#fff" }]}>SIVVG</Text>
          </Text>

          <Text style={[styles.subtitle, { color: "#E5E7EB" }]}>
            {i18n.t("login_subtitle")}
          </Text>

          {/* USER ID */}
          <View
            style={[
              styles.inputBox,
              {
                backgroundColor: isLight ? "#FAFAFA" : "rgba(0,0,0,0.55)",
              },
              errors.userId && styles.errorBorder,
              isUserIdValid && styles.successBorder,
            ]}
          >
            <Ionicons
              name="person"
              size={22}
              color={isLight ? "#162F7A" : "#E5E7EB"}
            />
            <TextInput
              placeholder={i18n.t("user_id")}
              placeholderTextColor={isLight ? "#5A6BA0" : "#94A3B8"}
              style={[
                styles.input,
                { color: isLight ? "#1E2A78" : "#F8FAFC" },
              ]}
              value={userId}
              onChangeText={(t) => {
                setUserId(t);
                setErrors((p) => ({ ...p, userId: "" }));
                setIsUserIdValid(false);
              }}
            />
          </View>
          {errors.userId && (
            <Text style={styles.errorText}>{errors.userId}</Text>
          )}

          {/* PASSWORD */}
          <View
            style={[
              styles.inputBox,
              {
                backgroundColor: isLight ? "#FAFAFA" : "rgba(0,0,0,0.55)",
              },
              errors.password && styles.errorBorder,
              isPasswordValid && styles.successBorder,
            ]}
          >
            <Ionicons
              name="lock-closed"
              size={22}
              color={isLight ? "#162F7A" : "#E5E7EB"}
            />
            <TextInput
              placeholder={i18n.t("password")}
              placeholderTextColor={isLight ? "#5A6BA0" : "#94A3B8"}
              secureTextEntry={!showPassword}
              style={[
                styles.input,
                { color: isLight ? "#1E2A78" : "#F8FAFC" },
              ]}
              value={password}
              onChangeText={(t) => {
                setPassword(t);
                setErrors((p) => ({ ...p, password: "" }));
                setIsPasswordValid(false);
              }}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye" : "eye-off"}
                size={20}
                color={isLight ? "#162F7A" : "#E5E7EB"}
              />
            </TouchableOpacity>
          </View>

          {errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}

          {/* FORGOT */}
          <TouchableOpacity style={{ alignSelf: "flex-end" }}>
            <Text
              style={[
                styles.forgot,
                { color: isLight ? "#01D5FF" : "#38BDF8" },
              ]}
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              {i18n.t("forgot_password")}
            </Text>
          </TouchableOpacity>

          {/* LOGIN */}
          <TouchableOpacity
            style={[
              styles.loginBtn,
              {
                backgroundColor: isLight ? "#F5F5F5" : "#1a1a1a",
                opacity: 0.9,
              },
            ]}
            onPress={handleLogin}
          >
            <Text
              style={[
                styles.loginText,
                { color: isLight ? "#162F7A" : "#fff" },
              ]}
            >
              {i18n.t("login")}
            </Text>
          </TouchableOpacity>

          {/* FOOTER */}
          <Text style={[styles.footerText, { color: "#fff" }]}>
            {i18n.t("dont_have_account")}{" "}
            <Text
              style={styles.signup}
              onPress={() => navigation.navigate("Register")}
            >
              {i18n.t("signup")}
            </Text>
          </Text>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },

  card: {
    marginHorizontal: 25,
    padding: 25,
    borderRadius: 22,
    borderWidth: 1,
  },

  title: { fontSize: 25, textAlign: "center", fontFamily: "Lato-Bold" },
  brand: { fontSize: 32, fontFamily: "Lemon-Regular" },
  subtitle: {
    fontSize: 14,
    marginBottom: 25,
    textAlign: "center",
    fontFamily: "Lato-Semibold",
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: "transparent",
  },

  input: { flex: 1, marginLeft: 10, fontFamily: "Lato-Medium" },

  errorBorder: { borderColor: "#E57373" },
  successBorder: { borderColor: "#22C55E" },

  errorText: {
    color: "#FACC15",
    fontSize: 13,
    marginBottom: 12,
    marginLeft: 10,
  },

  forgot: { fontSize: 14, fontFamily: "Lato-Bold" },

  loginBtn: {
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 25,
  },

  loginText: { fontSize: 20, fontFamily: "Lato-Bold" },

  footerText: {
    marginTop: 15,
    textAlign: "center",
    fontFamily: "Lato-Semibold",
  },

  signup: { color: "#38BDF8", fontFamily: "Lato-Bold" },
});
