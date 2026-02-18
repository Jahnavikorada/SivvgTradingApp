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

import { androidStyles } from "./ForgotPassword.android.styles";
import { iosStyles } from "./ForgotPassword.ios.styles";

const styles = Platform.OS === "ios" ? iosStyles : androidStyles;

export default function ForgotPassword({ navigation }: any) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const { reloadKey } = useContext(LanguageContext);

  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const validateInput = () => {
    setIsTouched(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cleanedValue = value.replace(/\s+/g, "");
    const indianPhoneRegex = /^(\+91)?[6-9][0-9]{9}$/;

    if (!cleanedValue.trim()) {
      setError(i18n.t("err_email_or_phone_required"));
      return false;
    }

    if (
      !emailRegex.test(cleanedValue) &&
      !indianPhoneRegex.test(cleanedValue)
    ) {
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
              {i18n.t("forgot_password_title")}
            </Text>

            <Text style={[styles.subtitle, { color: "#FFF", opacity: 0.85 }]}>
              {i18n.t("forgot_password_subtitle")}
            </Text>

            {/* Input */}
            <View
              style={[
                styles.inputBox,
                isTouched && {
                  borderWidth: 2,
                  borderColor: error ? "#e66868" : "green",
                },
                {
                  backgroundColor: isLight
                    ? "#FFF"
                    : "rgba(0,0,0,0.55)",
                },
              ]}
            >
              <Ionicons
                name="mail"
                size={22}
                color={isLight ? "#162F7A" : "#e4e8ec"}
              />

              <TextInput
                placeholder={i18n.t("email_or_phone_placeholder")}
                placeholderTextColor={
                  isLight ? "#1E2A78" : "#94A3B8"
                }
                style={[
                  styles.input,
                  { color: isLight ? "#1E2A78" : "#F8FAFC" },
                ]}
                keyboardType="email-address"
                value={value}
                onChangeText={(text) => {
                  setValue(text);
                  setError("");
                  setIsTouched(false);
                }}
              />
            </View>

            {error ? (
              <Text style={styles.errorText}>{error}</Text>
            ) : null}

            {/* Button */}
            <TouchableOpacity
              style={[
                styles.sendOtpBtn,
                { backgroundColor: isLight ? "#FFF" : "#1a1a1a" },
              ]}
              onPress={handleSendOtp}
            >
              <Text
                style={[
                  styles.sendOtpText,
                  { color: isLight ? "#162F7A" : "#F8FAFC" },
                ]}
              >
                {i18n.t("send_otp")}
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
