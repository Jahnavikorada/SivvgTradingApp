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

export default function LoginScreen({ navigation }: any) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const [showPassword, setShowPassword] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    userId: "",
    password: "",
  });

  const [isUserIdValid, setIsUserIdValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleLogin = () => {
    let valid = true;
    let newErrors: any = { userId: "", password: "" };

    if (!userId.trim()) {
      newErrors.userId = "User ID is required";
      valid = false;
      setIsUserIdValid(false);
    } else if (userId.includes(" ")) {
      newErrors.userId = "User ID must not contain spaces";
      valid = false;
      setIsUserIdValid(false);
    } else if (userId.length < 5) {
      newErrors.userId = "User ID must be at least 5 characters";
      valid = false;
      setIsUserIdValid(false);
    } else {
      setIsUserIdValid(true);
    }

    const regex = {
      uppercase: /[A-Z]/,
      lowercase: /[a-z]/,
      number: /[0-9]/,
      special: /[@$!%*?&^#()_+\-=<>]/,
      whitespace: /\s/,
    };

    if (!password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
      setIsPasswordValid(false);
    } else if (password.length < 5) {
      newErrors.password = "Password must be at least 5 characters";
      valid = false;
      setIsPasswordValid(false);
    } else if (regex.whitespace.test(password)) {
      newErrors.password = "Whitespace not allowed";
      valid = false;
      setIsPasswordValid(false);
    } else if (!regex.uppercase.test(password)) {
      newErrors.password = "Must contain an uppercase letter";
      valid = false;
      setIsPasswordValid(false);
    } else if (!regex.lowercase.test(password)) {
      newErrors.password = "Must contain a lowercase letter";
      valid = false;
      setIsPasswordValid(false);
    } else if (!regex.number.test(password)) {
      newErrors.password = "Must contain a number";
      valid = false;
      setIsPasswordValid(false);
    } else if (!regex.special.test(password)) {
      newErrors.password = "Must contain a special character";
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
      {/* ✅ FIXED BACKGROUND GRADIENT */}
      <LinearGradient
        colors={["rgba(255,46,76,0.75)", "rgba(30,42,120,0.75)"]}
        style={styles.container}
      >
        {/* ✅ CARD */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: isLight
                ? "rgba(250,250,250,0.2)"
                : "rgba(30,41,59,0.5)", // dynamic card
              borderColor: isLight
                ? "rgba(255,255,255,0.4)"
                : "rgba(148,163,184,0.4)", // dynamic border
            },
          ]}
        >
          {/* TITLE */}
          <Text
            style={[
              styles.title,
              { color: isLight ? "#FFFFFF" : "#Fff" },
            ]}
          >
            Welcome to{" "}
            <Text
              style={[
                styles.brand,
                { color: isLight ? "#FFFFFF" : "#fff" },
              ]}
            >
              SIVVG
            </Text>
          </Text>

          <Text
            style={[
              styles.subtitle,
              { color: isLight ? "#E5E7EB" : "#e5e7eb" },
            ]}
          >
            Enter your credentials to login
          </Text>

          {/* USER ID */}
          <View
            style={[
              styles.inputBox,
              {
                backgroundColor: isLight ? "#FAFAFA" : "rgba(0,0,0,0.55)", // dynamic input bg
              },
              errors.userId && styles.errorBorder,
              isUserIdValid && styles.successBorder,
            ]}
          >
            <Ionicons
              name="person"
              size={22}
              color={isLight ? "#162F7A" : "#e4e8ec"}
            />
            <TextInput
              placeholder="User ID"
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
                backgroundColor: isLight ? "#FAFAFA" : "rgba(0,0,0,0.55)", // dynamic input bg
              },
              errors.password && styles.errorBorder,
              isPasswordValid && styles.successBorder,
            ]}
          >
            <Ionicons
              name="lock-closed"
              size={22}
              color={isLight ? "#162F7A" : "#e4e8ec"}
            />
            <TextInput
              placeholder="Password"
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
                color={isLight ? "#162F7A" : "#e4e8ec"}
              />
            </TouchableOpacity>
          </View>

          {errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}

          {/* FORGOT PASSWORD */}
          <TouchableOpacity style={{ alignSelf: "flex-end" }}>
            <Text
              style={[
                styles.forgot,
                { color: isLight ? "#01D5FF" : "#38BDF8" },
              ]}
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              Forgot Password ?
            </Text>
          </TouchableOpacity>

          {/* LOGIN BUTTON */}
          <TouchableOpacity
            style={[
              styles.loginBtn,
              { backgroundColor: isLight ? "#F5F5F5" : "#1a1a1a", opacity:0.9 },
            ]}
            onPress={handleLogin}
          >
            <Text style={[styles.loginText, { color: isLight ? "#162F7A" : "#ffffff" }]}>Login</Text>
            
          </TouchableOpacity>

          {/* FOOTER */}
          <Text
            style={[
              styles.footerText,
              { color: isLight ? "#FFFFFF" : "#fff" },
            ]}
          >
            Don't have an account?{" "}
            <Text
              style={styles.signup}
              onPress={() => navigation.navigate("Register")}
            >
              Signup
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
  subtitle: { fontSize: 14, marginBottom: 25, textAlign: "center", fontFamily: "Lato-Semibold" },

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

  errorText: { color: "#FACC15", fontSize: 13, marginBottom: 12, marginLeft: 10 },

  forgot: { fontSize: 14, fontFamily: "Lato-Bold" },

  loginBtn: { paddingVertical: 12, borderRadius: 25, alignItems: "center", marginTop: 25 },

  loginText: { fontSize: 20, color: "#162F7A", fontFamily: "Lato-Bold" },

  footerText: { marginTop: 15, textAlign: "center", fontFamily: "Lato-Semibold" },

  signup: { color: "#38BDF8", fontFamily: "Lato-Bold" },
});
