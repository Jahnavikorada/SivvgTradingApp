import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Alert,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function OtpScreen({ navigation }: any) {
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
      //Alert.alert("Error", "Enter complete OTP");
      return;
    }
     if (code === "any") {
      setIsOtpValid(true);
      setTimeout(() => {
        navigation.navigate("ChangePassword");
      }, 600);
    } else {
      setIsOtpValid(true);

    //Alert.alert("OTP Verified", code);
    navigation.navigate("ChangePassword");
    }
  };

  return (
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
        <View style={styles.card}>
          <Text style={styles.title}>Otp Verification</Text>

          <Text style={styles.subtitle}>
            Please enter your verification code{"\n"}sent to Email or phone
            number
          </Text>

           
          {/* OTP Boxes */}
          <View style={styles.otpRow}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={inputRefs[index]}
                style={[styles.otpBox,
                  isOtpValid === true && styles.successBorder,
                  isOtpValid === false && styles.errorBorder,
                ]}
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={(val) => handleOtpChange(val, index)}
              />
            ))}
          </View>

          {/* Resend + Timer */}
          <View style={styles.resendRow}>
            <TouchableOpacity>
              <Text style={styles.resendText}>Resend OTP</Text>
            </TouchableOpacity>

            <Text style={styles.timerText}>0:59</Text>
          </View>

          {/* Verify Button */}
          <TouchableOpacity style={styles.verifyBtn} onPress={handleVerify}>
            <Text style={styles.verifyText}>Verify Otp</Text>
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
    backgroundColor: "rgba(255,255,255,0.2)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
  },

  title: {
    fontSize: 26,
   // fontWeight: "700",
   fontFamily: "Lato-Bold",
    color: "#FFF",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 14,
    color: "#FFF",
    opacity: 0.9,
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
    backgroundColor: "#FFF",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 22,
    color: "#162F7A",
    elevation: 3,
    fontFamily: "Lato-Bold",
     borderWidth: 2,
    borderColor: "transparent",
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
    color: "#00BFFF",
    //fontWeight: "600",
    fontFamily: "Lato-Bold",
  },

  timerText: {
    color: "#FFF",
    fontSize: 15,
    fontFamily: "Lato-Bold",
  },

  verifyBtn: {
    backgroundColor: "#FFF",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
  },

  verifyText: {
    color: "#162F7A",
    fontSize: 18,
    //fontWeight: "700",
    fontFamily: "Lato-Bold",
  },
});
