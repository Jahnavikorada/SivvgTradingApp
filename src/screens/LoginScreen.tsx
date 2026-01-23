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
import i18n from "../i18n"; // ✅ ADD THIS

export default function LoginScreen({ navigation }: any) {
  const [showPassword, setShowPassword] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    userId: "",
    password: "",
  });

  const [isUserIdValid, setIsUserIdValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  // =================== VALIDATION ===================
  const handleLogin = () => {
    let valid = true;
    let newErrors: any = { userId: "", password: "" };

    // USER ID VALIDATION
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

    // PASSWORD VALIDATION
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

    if (valid) {
      navigation.navigate("OtpVerification1");
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/login.png")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <LinearGradient
        colors={["rgba(255,46,76,0.8)", "rgba(30,42,120,0.8)"]}
        style={styles.container}
      >
        <View style={styles.card}>
          {/* Title Section */}
          <Text style={styles.title}>
            {i18n.t("welcome_to")} <Text style={styles.brand}>SIVVG</Text>
          </Text>

          <Text style={styles.subtitle}>{i18n.t("login_subtitle")}</Text>

          {/* USER ID */}
          <View
            style={[
              styles.inputBox,
              errors.userId ? styles.errorBorder : null,
              isUserIdValid ? styles.successBorder : null,
            ]}
          >
            <Ionicons name="person" size={22} color="#162F7A" />
            <TextInput
              placeholder={i18n.t("user_id")}
              placeholderTextColor="#1E2A78"
              style={styles.input}
              value={userId}
              onChangeText={(t) => {
                setUserId(t);
                setErrors((p) => ({ ...p, userId: "" }));
                setIsUserIdValid(false);
              }}
            />
          </View>
          {errors.userId ? (
            <Text style={styles.errorText}>{errors.userId}</Text>
          ) : null}

          {/* PASSWORD */}
          <View
            style={[
              styles.inputBox,
              errors.password ? styles.errorBorder : null,
              isPasswordValid ? styles.successBorder : null,
            ]}
          >
            <Ionicons name="lock-closed" size={22} color="#162F7A" />
            <TextInput
              placeholder={i18n.t("password")}
              placeholderTextColor="#1E2A78"
              secureTextEntry={!showPassword}
              style={styles.input}
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
                color="#162F7A"
              />
            </TouchableOpacity>
          </View>

          {errors.password ? (
            <Text style={styles.errorText}>{errors.password}</Text>
          ) : null}

          {/* FORGOT PASSWORD */}
          <TouchableOpacity style={{ alignSelf: "flex-end" }}>
            <Text
              style={styles.forgot}
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              {i18n.t("forgot_password")}
            </Text>
          </TouchableOpacity>

          {/* LOGIN BUTTON */}
          <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
            <Text style={styles.loginText}>{i18n.t("login")}</Text>
          </TouchableOpacity>

          {/* FOOTER */}
          <Text style={styles.footerText}>
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
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    backgroundColor: "rgba(255,255,255,0.15)",
  },

  title: {
    fontSize: 25,
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Lato-Bold",
  },

  brand: {
    fontSize: 32,
    color: "#FFF",
    fontFamily: "Lemon-Regular",
  },

  subtitle: {
    fontSize: 14,
    color: "#FFF",
    opacity: 0.8,
    marginBottom: 25,
    textAlign: "center",
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
    borderWidth: 2,
    borderColor: "transparent",
  },

  errorBorder: { borderColor: "#e66868ff" },
  successBorder: { borderColor: "#28A745" },

  input: {
    flex: 1,
    marginLeft: 10,
    color: "#1E2A78",
    fontFamily: "Lato-Medium",
  },

  errorText: {
    color: "yellow",
    fontSize: 13,
    marginBottom: 12,
    marginLeft: 10,
  },

  forgotWrapper: {
    alignSelf: "flex-end",
    marginBottom: 15,
  },

  forgot: {
    fontSize: 14,
    color: "#01D5FF",
    fontFamily: "Lato-Bold",
  },

  loginBtn: {
    backgroundColor: "#FFF",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 25,
  },

  loginText: {
    fontSize: 20,
    color: "#162F7A",
    fontFamily: "Lato-Bold",
  },

  footerText: {
    marginTop: 15,
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Lato-Semibold",
  },

  signup: {
    color: "#01D5FF",
    fontFamily: "Lato-Bold",
  },
});
