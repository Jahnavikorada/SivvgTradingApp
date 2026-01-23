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

export default function ForgotPasswordScreen({ navigation }: any) {
  const { reloadKey } = useContext(LanguageContext); // ✅ refresh text on language change

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
      setError(i18n.t("err_email_or_phone_required"));
      return false;
    }

    if (!emailRegex.test(cleanedValue) && !indianPhoneRegex.test(cleanedValue)) {
      setError(i18n.t("err_enter_valid_phone"));
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
    <View key={reloadKey} style={{ flex: 1 }}>
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
          <View style={styles.card}>
            <Text style={styles.title}>{i18n.t("forgot_password_title")}</Text>

            <Text style={styles.subtitle}>
              {i18n.t("forgot_password_subtitle")}
            </Text>

            {/* Input Box */}
            <View
              style={[
                styles.inputBox,
                isTouched && {
                  borderWidth: 2,
                  borderColor: error ? "#e66868ff" : "green",
                },
              ]}
            >
              <Ionicons name="mail" size={22} color="#162F7A" />
              <TextInput
                placeholder={i18n.t("email_or_phone_placeholder")}
                placeholderTextColor="#1E2A78"
                style={styles.input}
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
            <TouchableOpacity style={[styles.sendOtpBtn]} onPress={handleSendOtp}>
              <Text style={styles.sendOtpText}>{i18n.t("send_otp")}</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
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
    marginBottom: 10,
    height: 50,
  },

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

  sendOtpBtn: {
    backgroundColor: "#FFF",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },

  sendOtpText: {
    color: "#162F7A",
    fontSize: 18,
    fontFamily: "Lato-Bold",
  },
});
