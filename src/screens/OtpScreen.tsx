import React, { useRef, useState, useContext } from "react";
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

import { androidStyles } from "./OtpScreen.android.styles";
import { iosStyles } from "./OtpScreen.ios.styles";

export default function OtpScreen({ navigation }: any) {

  const { theme } = useTheme();
  const { reloadKey } = useContext(LanguageContext);

  const isLight = theme === "light";


  const styles = Platform.OS === "ios" ? iosStyles : androidStyles;

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isOtpValid, setIsOtpValid] = useState<boolean | null>(null);


  const inputRefs = useRef<Array<TextInput | null>>([]);

  const handleOtpChange = (value: string, index: number) => {
    if (/^\d$/.test(value) || value === "") {
      const updated = [...otp];
      updated[index] = value;
      setOtp(updated);
      setIsOtpValid(null);

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }

      if (!value && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleVerify = () => {
    const code = otp.join("");

    if (code.length < 6) {
      setIsOtpValid(false);
      return;
    }

    setIsOtpValid(true);
    navigation.navigate("ChangePassword");
  };

  return (
    <View key={reloadKey} style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/images/otp.png")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["rgba(255,46,76,0.85)", "rgba(30,42,120,0.85)"]}
          style={styles.container}
        >
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={30} color="#FFF" />
          </TouchableOpacity>

          <View
            style={[
              styles.card,
              {
                backgroundColor: isLight
                  ? "rgba(255,255,255,0.2)"
                  : "rgba(0,0,0,0.30)",
              },
            ]}
          >
            <Text style={[styles.title, { color: "#FFF" }]}>
              {i18n.t("otp_verification")}
            </Text>

            <Text style={[styles.subtitle, { color: "#FFF", opacity: 0.9 }]}>
              {i18n.t("otp_subtitle")}
            </Text>

            <View style={styles.otpRow}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                  style={[
                    styles.otpBox,
                    {
                      backgroundColor: isLight
                        ? "#FFF"
                        : "rgba(0,0,0,0.55)",
                      color: isLight ? "#162F7A" : "#F8FAFC",
                    },
                    isOtpValid === true && styles.successBorder,
                    isOtpValid === false && styles.errorBorder,
                  ]}
                  keyboardType="numeric"
                  maxLength={1}
                  value={digit}
                  onChangeText={(val) =>
                    handleOtpChange(val, index)
                  }
                  placeholderTextColor="#94A3B8"
                />
              ))}
            </View>

            <View style={styles.resendRow}>
              <TouchableOpacity>
                <Text
                  style={[
                    styles.resendText,
                    { color: isLight ? "#01d5ff" : "#60A5FA" },
                  ]}
                >
                  {i18n.t("resend_otp")}
                </Text>
              </TouchableOpacity>

              <Text style={[styles.timerText, { color: "#FFF" }]}>
                0:59
              </Text>
            </View>

            <TouchableOpacity
              style={[
                styles.verifyBtn,
                {
                  backgroundColor: isLight ? "#FFF" : "#1a1a1a",
                },
              ]}
              onPress={handleVerify}
            >
              <Text
                style={[
                  styles.verifyText,
                  { color: isLight ? "#162F7A" : "#F8FAFC" },
                ]}
              >
                {i18n.t("verify_otp")}
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
