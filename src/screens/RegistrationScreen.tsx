import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Platform,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useTheme } from "../context/ThemeContext"; // ✅ ThemeContext

export default function RegisterScreen({ navigation }: any) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
  });

  const [valid, setValid] = useState({
    username: false,
    email: false,
    phone: false,
    dob: false,
    gender: false,
  });

  // ---------------- DATE FORMAT ----------------
  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // ---------------- AGE VALIDATION ----------------
  const isAge18OrAbove = (date: Date) => {
    const today = new Date();
    let age = today.getFullYear() - date.getFullYear();
    const monthDiff = today.getMonth() - date.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < date.getDate())) {
      age--;
    }
    return age >= 18;
  };

  // ---------------- FORM VALIDATION ----------------
  const validate = () => {
    let validForm = true;
    let newErrors: any = {};
    let newValid: any = {};

    if (!username.trim()) { newErrors.username = "Username is required"; validForm = false; } else newValid.username = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) { newErrors.email = "Email is required"; validForm = false; } 
    else if (!emailRegex.test(email)) { newErrors.email = "Enter valid email"; validForm = false; } 
    else newValid.email = true;

    const phoneRegex = /^(\+91)?[6-9][0-9]{9}$/;
    if (!phone.trim()) { newErrors.phone = "Phone number is required"; validForm = false; } 
    else if (!phoneRegex.test(phone)) { newErrors.phone = "Enter valid Indian number"; validForm = false; } 
    else newValid.phone = true;

    if (!dob.trim() || !selectedDate || !isAge18OrAbove(selectedDate)) { newErrors.dob = "Age must be 18 years or above"; validForm = false; } 
    else newValid.dob = true;

    if (!gender.trim()) { newErrors.gender = "Select gender"; validForm = false; } 
    else newValid.gender = true;

    setErrors(newErrors);
    setValid(newValid);
    return validForm;
  };

  // ---------------- REGISTER ----------------
  const handleRegister = () => {
    if (validate()) navigation.navigate("Login");
  };

  const getBorderColor = (field: keyof typeof errors) => {
    if (errors[field]) return "#e66868";
    if (valid[field]) return "green";
    return isLight ? "#ccc" : "#94A3B8";
  };

  return (
    <ImageBackground
      source={require("../../assets/images/register.png")}
      style={{ flex: 1 }}
    >
      {/* ✅ SAME BACKGROUND GRADIENT */}
      <LinearGradient
        colors={["rgba(255,46,76,0.8)", "rgba(30,42,120,0.8)"]}
        style={styles.container}
      >
        {/* CARD */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: isLight
                ? "rgba(250,250,250,0.2)"
                : "rgba(30,41,59,0.5)",
              borderColor: isLight
                ? "rgba(255,255,255,0.4)"
                : "rgba(148,163,184,0.25)",
            },
          ]}
        >
          <Text style={[styles.title, { color: isLight ? "#FFFFFF" : "#FFFFFF" }]}>
            Create a New Account
          </Text>

          {/* USERNAME */}
          <View style={[styles.inputBox, { borderColor: getBorderColor("username"), backgroundColor: isLight ? "#FAFAFA" : "rgba(0,0,0,0.55)" }]}>
            <Ionicons name="person" size={22} color={isLight ? "#162F7A" : "#e4e8ec"} />
            <TextInput
              placeholder="Username"
              placeholderTextColor={isLight ? "#5A6BA0" : "#94A3B8"}
              style={[styles.input, { color: isLight ? "#1E2A78" : "#F8FAFC" }]}
              value={username}
              onChangeText={setUsername}
            />
          </View>
          {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}

          {/* EMAIL */}
          <View style={[styles.inputBox, { borderColor: getBorderColor("email"), backgroundColor: isLight ? "#FAFAFA" : "rgba(0,0,0,0.55)" }]}>
            <Ionicons name="mail" size={22} color={isLight ? "#162F7A" : "#e4e8ec"} />
            <TextInput
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor={isLight ? "#5A6BA0" : "#94A3B8"}
              style={[styles.input, { color: isLight ? "#1E2A78" : "#F8FAFC" }]}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

          {/* PHONE */}
          <View style={[styles.inputBox, { borderColor: getBorderColor("phone"), backgroundColor: isLight ? "#FAFAFA" : "rgba(0,0,0,0.55)" }]}>
            <Ionicons name="call" size={22} color={isLight ? "#162F7A" : "#e4e8ec"} />
            <TextInput
              placeholder="Phone Number"
              keyboardType="phone-pad"
              placeholderTextColor={isLight ? "#5A6BA0" : "#94A3B8"}
              style={[styles.input, { color: isLight ? "#1E2A78" : "#F8FAFC" }]}
              value={phone}
              onChangeText={setPhone}
            />
          </View>
          {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}

          {/* DOB */}
          <View style={[styles.inputBox, { borderColor: getBorderColor("dob"), backgroundColor: isLight ? "#FAFAFA" : "rgba(0,0,0,0.55)" }]}>
            <TextInput
              placeholder="DOB (DD/MM/YYYY)"
              style={[styles.input, { color: isLight ? "#1E2A78" : "#F8FAFC" }]}
              value={dob}
              editable={false}
            />
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <Ionicons name="calendar" size={22} color={isLight ? "#162F7A" : "#e4e8ec"} />
            </TouchableOpacity>
          </View>
          {errors.dob && <Text style={styles.errorText}>{errors.dob}</Text>}

          {showDatePicker && (
            <DateTimePicker
              value={selectedDate || new Date()}
              mode="date"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              maximumDate={new Date(new Date().setFullYear(new Date().getFullYear() - 18))}
              onChange={(event, date) => {
                setShowDatePicker(false);
                if (!date) return;
                if (!isAge18OrAbove(date)) {
                  setDob("");
                  setErrors({ ...errors, dob: "Age must be 18 years or above" });
                  setValid({ ...valid, dob: false });
                  return;
                }
                setSelectedDate(date);
                setDob(formatDate(date));
                setErrors({ ...errors, dob: "" });
                setValid({ ...valid, dob: true });
              }}
            />
          )}

          {/* GENDER */}
          <View style={[styles.genderBox, { borderColor: getBorderColor("gender"), borderWidth: 2, backgroundColor: isLight ? "#FAFAFA" : "rgba(0,0,0,0.55)" }]}>
            <Text style={[styles.genderLabel, { color: isLight ? "#162F7A" : "#F8FAFC" }]}>Gender</Text>
            <View style={styles.genderRow}>
                {["Male", "Female", "Others"].map((g) => (
                <TouchableOpacity
                  key={g}
                  onPress={() => {
                    setGender(g);
                    setValid({ ...valid, gender: true });
                  }}
                  style={styles.radioRow}
                >
                  <Ionicons
                    name={gender === g ? "radio-button-on" : "radio-button-off"}
                    size={20}
                    color={isLight ? "#162F7A" : "#e4e8ec"}
                  />
                  <Text style={[styles.radioText, { color: isLight ? "#162F7A" : "#F8FAFC" }]}>{g}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          {errors.gender && <Text style={styles.errorText}>{errors.gender}</Text>}

          {/* REGISTER BUTTON */}
          <TouchableOpacity
            style={[styles.loginBtn, { backgroundColor: isLight ? "#F5F5F5" : "#1a1a1a", opacity: 0.9 }]}
            onPress={handleRegister}
          >
            <Text style={[styles.loginBtnText, { color: isLight ? "#162F7A" : "#ffffff" }]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

// ---------------- STYLES ----------------
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  card: { marginHorizontal: 25, padding: 25, borderRadius: 22, borderWidth: 1 },
  title: { fontSize: 24, fontWeight: "700", textAlign: "center", marginBottom: 20 },
  inputBox: { flexDirection: "row", alignItems: "center", borderRadius: 30, paddingHorizontal: 15, marginBottom: 12, height: 50, borderWidth: 2 },
  input: { flex: 1, marginLeft: 10, fontFamily: "Lato-Medium" },
  genderBox: { padding: 15, borderRadius: 20, marginTop: 10 },
  genderLabel: { fontWeight: "700", marginBottom: 8 },
  genderRow: { flexDirection: "row", justifyContent: "space-around" },
  radioRow: { flexDirection: "row", alignItems: "center" },
  radioText: { marginLeft: 5 },
  errorText: { color: "#FACC15", marginLeft: 10, marginBottom: 8 },
  loginBtn: { paddingVertical: 12, borderRadius: 25, alignItems: "center", marginTop: 15 },
  loginBtnText: { fontSize: 18, fontWeight: "700" },
});
