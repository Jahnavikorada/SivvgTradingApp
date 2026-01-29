import React, { useRef, useState, useContext } from "react";
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

export default function OtpScreen({ navigation }: any) {
  const { theme } = useTheme();
  const { reloadKey } = useContext(LanguageContext); // ✅ force re-render on language change
  const isLight = theme === "light";

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isOtpValid, setIsOtpValid] = useState<boolean | null>(null);

  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  // --------- OTP Change Handler ----------
  const handleOtpChange = (value: string, index: number) => {
    if (/^\d$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setIsOtpValid(null);

      if (value !== "" && index < 3) {
        inputRefs[index + 1].current?.focus();
      }
    }
  };

  const handleVerify = () => {
    const code = otp.join("");

    if (code.length < 4) {
      setIsOtpValid(false);
      return;
    }

    setIsOtpValid(true);
    setTimeout(() => {
      navigation.navigate("Tabs");
    }, 600);
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
          {/* Back Button */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={30} color="#FFF" />
          </TouchableOpacity>

          {/* Card */}
          <View
            style={[
              styles.card,
              {
                backgroundColor: isLight
                  ? "rgba(255,255,255,0.2)"
                  : "rgba(30,42,60,0.5)",
              },
            ]}
          >
            <Text style={[styles.title, { color: "#FFF" }]}>
              {i18n.t("otp_verification")}
            </Text>

            <Text style={[styles.subtitle, { color: "#FFF", opacity: 0.9 }]}>
              {i18n.t("otp_subtitle")}
            </Text>

            {/* OTP Boxes */}
            <View style={styles.otpRow}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={inputRefs[index]}
                  style={[
                    styles.otpBox,
                    {
                      backgroundColor: isLight ? "#FFF" : "rgba(0,0,0,0.55)",
                      color: isLight ? "#162F7A" : "#F8FAFC",
                    },
                    isOtpValid === true && styles.successBorder,
                    isOtpValid === false && styles.errorBorder,
                  ]}
                  keyboardType="numeric"
                  maxLength={1}
                  value={digit}
                  onChangeText={(val) => handleOtpChange(val, index)}
                  placeholderTextColor="#94A3B8"
                />
              ))}
            </View>

            {/* Resend + Timer */}
            <View style={styles.resendRow}>
              <TouchableOpacity>
                <Text
                  style={[
                    styles.resendText,
                    { color: isLight ? "#00BFFF" : "#60A5FA" },
                  ]}
                >
                  {i18n.t("resend_otp")}
                </Text>
              </TouchableOpacity>

              <Text style={[styles.timerText, { color: "#FFF" }]}>0:59</Text>
            </View>

            {/* Verify Button */}
            <TouchableOpacity
              style={[
                styles.verifyBtn,
                { backgroundColor: isLight ? "#FFF" : "#1a1a1a", opacity: 0.9 },
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

// ------------------ STYLES (UNCHANGED) ------------------
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },

  backButton: { position: "absolute", top: 40, left: 20 },

  card: {
    width: "85%",
    padding: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
  },

  title: {
    fontSize: 30,
    fontFamily: "Lato-Bold",
    textAlign: "center",
    marginBottom:8,
    marginTop:16
  },

  subtitle: {
    fontSize: 18,
    marginBottom:32,
    textAlign: "center",
    marginVertical: 15,
    fontFamily: "Lato-Semibold",
  },

  otpRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },

  otpBox: {
    width: 55,
    height: 55,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 22,
    fontFamily: "Lato-Bold",
    borderWidth: 2,
    borderColor: "transparent",
    marginBottom:20,
  },

  successBorder: {
    borderColor: "#28A745",
  },

  errorBorder: {
    borderColor: "#e66868ff",
  },

  resendRow: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  resendText: {
    fontSize: 16,
    textDecorationLine:"underline",
    fontFamily: "Lato-Semibold",
    marginBottom: 18,
  },

  timerText: {
    fontSize: 16,
    fontFamily: "Lato-Semibold",
     marginBottom: 18,
  },

  verifyBtn: {
    paddingVertical: 10,
    borderRadius: 40,
    alignItems: "center",
    width:"80%",
    alignSelf:"center",
    marginBottom: 10,

  },

  verifyText: {
    fontSize: 22,
    fontFamily: "Lato-Bold",
  },
});