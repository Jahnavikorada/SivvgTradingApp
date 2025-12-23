import React, { useState } from "react";
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

export default function ForgotPasswordScreen({ navigation }: any) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [isTouched, setIsTouched] = useState(false);



  // ---------- Validation Function ----------
  const validateInput = () => {
    setIsTouched(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cleanedValue = value.replace(/\s+/g, "");      // Remove spaces from phone number
    const indianPhoneRegex = /^(\+91)?[6-9][0-9]{9}$/;    // Indian phone number → starts with 6-9, 10 digits, allows +91 prefix

    if (!cleanedValue.trim()) {
      setError("Email or Phone number is required");
      return false;
    }

    // Not valid email AND not valid Indian phone number
    if (!emailRegex.test(cleanedValue) && !indianPhoneRegex.test(cleanedValue)) {
      setError("Enter valid phone number: +91 XXXXXXXXXX");
      return false;
    }

    setError("");
    return true;
  };

  const handleSendOtp = () => {
    if (validateInput()) {
      //Alert.alert("Success", "OTP Sent Successfully!");
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
        <View style={styles.card}>
          <Text style={styles.title}>Forgot Password</Text>

          <Text style={styles.subtitle}>
            Enter your Email or Phone number
          </Text>

          

          {/* Input Box */}
          <View style={[styles.inputBox,
          isTouched && {
      borderWidth: 2,
      borderColor: error ? "#e66868ff" : "green",
    },
           
     ]}
     >
            <Ionicons name="mail" size={22} color="#162F7A" />
            <TextInput
              placeholder="Email / Phone Number"
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
          <TouchableOpacity
            // style={[styles.sendOtpBtn, { opacity: value ? 1 : 0.5 }]}
            // disabled={!value}
            // onPress={handleSendOtp}

             style={[styles.sendOtpBtn]}
            //disabled={!value}
            onPress={handleSendOtp}
          >
            <Text style={styles.sendOtpText}>Send OTP</Text>
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
    backgroundColor: "rgba(255,255,255,0.15)",
  },

  title: {
    fontSize: 26,
    //fontWeight: "700",
    color: "#FFF",
    textAlign: "center",
     fontFamily: "Lato-Bold"

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
    // color: "#FFCCCC",
    // fontSize: 13,
    // marginBottom: 10,
    // marginLeft: 5,
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
    //fontWeight: "700",
    fontFamily: "Lato-Bold",
  },
});
