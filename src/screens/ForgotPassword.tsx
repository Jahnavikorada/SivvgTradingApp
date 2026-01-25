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

export default function ForgotPasswordScreen({ navigation }: any) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  // ---------- Validation Function ----------
  const validateInput = () => {
    setIsTouched(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cleanedValue = value.replace(/\s+/g, ""); 
    const indianPhoneRegex = /^(\+91)?[6-9][0-9]{9}$/;

    if (!cleanedValue.trim()) {
      setError("Email or Phone number is required");
      return false;
    }

    if (!emailRegex.test(cleanedValue) && !indianPhoneRegex.test(cleanedValue)) {
      setError("Enter valid phone number: +91 XXXXXXXXXX");
      return false;
    }

    setError("");
    return true;
  };

  const handleSendOtp = () => {
    if (validateInput()) {
      navigation.navigate("OtpVerification");
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/forgot.png")}
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
          <Text style={[styles.title, { color: "#FFF" }]}>Forgot Password</Text>

          <Text style={[styles.subtitle, { color: "#FFF", opacity: 0.8 }]}>
            Enter your Email or Phone number
          </Text>

          {/* Input Box */}
          <View style={[
            styles.inputBox,
            isTouched && {
              borderWidth: 2,
              borderColor: error ? "#e66868ff" : "green",
            },
            { backgroundColor: isLight ? "#FFF" : "rgba(0,0,0,0.55)" }
          ]}>
            <Ionicons name="mail" size={22} color={isLight ? "#162F7A" : "#e4e8ec"} />
            <TextInput
              placeholder="Email / Phone Number"
              placeholderTextColor={isLight ? "#1E2A78" : "#94A3B8"}
              style={[styles.input, { color: isLight ? "#1E2A78" : "#F8FAFC" }]}
              keyboardType="email-address"
              value={value}
              onChangeText={(text) => {
                setValue(text);
                setError("");
                setIsTouched(false);
              }}
            />
          </View>

          {/* Error Text */}
          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          {/* Send OTP */}
          <TouchableOpacity
            style={[
              styles.sendOtpBtn,
              { backgroundColor: isLight ? "#FFF" : "#1a1a1a", }
            ]}
            onPress={handleSendOtp}
          >
            <Text style={[
              styles.sendOtpText,
              { color: isLight ? "#162F7A" : "#F8FAFC" }
            ]}>
              Send OTP
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

// ------------------ STYLES ------------------
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
  },

  title: {
    fontSize: 26,
    fontFamily: "Lato-Bold",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 14,
    marginVertical: 20,
    textAlign: "center",
    fontFamily: "Lato-Semibold",
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    paddingHorizontal: 15,
    marginBottom: 10,
    height: 50,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontFamily: "Lato-Medium",
  },

  errorText: {
    color: "yellow",
    fontSize: 13,
    marginBottom: 12,
    marginLeft: 10,
  },

  sendOtpBtn: {
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },

  sendOtpText: {
    fontSize: 18,
    fontFamily: "Lato-Bold",
  },
});
