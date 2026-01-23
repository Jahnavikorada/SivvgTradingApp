import React, { useState, useContext } from "react";
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
import i18n from "../i18n";
import { LanguageContext } from "../context/LanguageContext";

export default function RegisterScreen({ navigation }: any) {
  const { reloadKey } = useContext(LanguageContext); // ✅ to refresh texts on language change

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

  // ---------------- AGE VALIDATION (>=18) ----------------
  const isAge18OrAbove = (date: Date) => {
    const today = new Date();
    let age = today.getFullYear() - date.getFullYear();

    const monthDiff = today.getMonth() - date.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < date.getDate())
    ) {
      age--;
    }

    return age >= 18;
  };

  // ---------------- FORM VALIDATION (on SignUp press) ----------------
  const validate = () => {
    let validForm = true;
    let newErrors: any = {};
    let newValid: any = {};

    if (!username.trim()) {
      newErrors.username = i18n.t("err_username_required");
      validForm = false;
    } else newValid.username = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = i18n.t("err_email_required");
      validForm = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = i18n.t("err_email_invalid");
      validForm = false;
    } else newValid.email = true;

    const phoneRegex = /^(\+91)?[6-9][0-9]{9}$/;
    if (!phone.trim()) {
      newErrors.phone = i18n.t("err_phone_required");
      validForm = false;
    } else if (!phoneRegex.test(phone)) {
      newErrors.phone = i18n.t("err_phone_invalid");
      validForm = false;
    } else newValid.phone = true;

    if (!dob.trim() || !selectedDate || !isAge18OrAbove(selectedDate)) {
      newErrors.dob = i18n.t("err_age_18");
      validForm = false;
    } else newValid.dob = true;

    if (!gender.trim()) {
      newErrors.gender = i18n.t("err_select_gender");
      validForm = false;
    } else newValid.gender = true;

    setErrors(newErrors);
    setValid(newValid);
    return validForm;
  };

  // ---------------- REGISTER ----------------
  const handleRegister = () => {
    if (validate()) {
      navigation.navigate("Login");
    }
  };

  const getBorderColor = (field: keyof typeof errors) => {
    if (errors[field]) return "#e66868";
    if (valid[field]) return "green";
    return "#ccc";
  };

  return (
    <View key={reloadKey} style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/images/register.png")}
        style={{ flex: 1 }}
      >
        <LinearGradient
          colors={["rgba(255,46,76,0.8)", "rgba(30,42,120,0.8)"]}
          style={styles.container}
        >
          <View style={styles.card}>
            <Text style={styles.title}>{i18n.t("create_new_account")}</Text>

            {/* USERNAME */}
            <View
              style={[
                styles.inputBox,
                { borderColor: getBorderColor("username") },
              ]}
            >
              <Ionicons name="person" size={22} color="#162F7A" />
              <TextInput
                placeholder={i18n.t("username")}
                style={styles.input}
                value={username}
                onChangeText={(text) => {
                  setUsername(text);

                  if (!text.trim()) {
                    setErrors((prev) => ({
                      ...prev,
                      username: i18n.t("err_username_required"),
                    }));
                    setValid((prev) => ({ ...prev, username: false }));
                  } else {
                    setErrors((prev) => ({ ...prev, username: "" }));
                    setValid((prev) => ({ ...prev, username: true }));
                  }
                }}
              />
            </View>
            {errors.username && (
              <Text style={styles.errorText}>{errors.username}</Text>
            )}

            {/* EMAIL */}
            <View
              style={[
                styles.inputBox,
                { borderColor: getBorderColor("email") },
              ]}
            >
              <Ionicons name="mail" size={22} color="#162F7A" />
              <TextInput
                placeholder={i18n.t("email")}
                keyboardType="email-address"
                style={styles.input}
                value={email}
                onChangeText={(text) => {
                  setEmail(text);

                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                  if (!text.trim()) {
                    setErrors((prev) => ({
                      ...prev,
                      email: i18n.t("err_email_required"),
                    }));
                    setValid((prev) => ({ ...prev, email: false }));
                  } else if (!emailRegex.test(text)) {
                    setErrors((prev) => ({
                      ...prev,
                      email: i18n.t("err_email_invalid"),
                    }));
                    setValid((prev) => ({ ...prev, email: false }));
                  } else {
                    setErrors((prev) => ({ ...prev, email: "" }));
                    setValid((prev) => ({ ...prev, email: true }));
                  }
                }}
              />
            </View>
            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

            {/* PHONE */}
            <View
              style={[
                styles.inputBox,
                { borderColor: getBorderColor("phone") },
              ]}
            >
              <Ionicons name="call" size={22} color="#162F7A" />
              <TextInput
                placeholder={i18n.t("phone_number")}
                keyboardType="phone-pad"
                style={styles.input}
                value={phone}
                onChangeText={(text) => {
                  // ✅ allow only numbers and + (for +91)
                  const cleaned = text.replace(/[^0-9+]/g, "");
                  setPhone(cleaned);

                  const phoneRegex = /^(\+91)?[6-9][0-9]{9}$/;

                  if (!cleaned.trim()) {
                    setErrors((prev) => ({
                      ...prev,
                      phone: i18n.t("err_phone_required"),
                    }));
                    setValid((prev) => ({ ...prev, phone: false }));
                  } else if (!phoneRegex.test(cleaned)) {
                    setErrors((prev) => ({
                      ...prev,
                      phone: i18n.t("err_phone_invalid"),
                    }));
                    setValid((prev) => ({ ...prev, phone: false }));
                  } else {
                    setErrors((prev) => ({ ...prev, phone: "" }));
                    setValid((prev) => ({ ...prev, phone: true }));
                  }
                }}
              />
            </View>
            {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}

            {/* DOB */}
            <View
              style={[
                styles.inputBox,
                { borderColor: getBorderColor("dob") },
              ]}
            >
              <TextInput
                placeholder={i18n.t("dob_placeholder")}
                style={styles.input}
                value={dob}
                editable={false}
              />
              <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                <Ionicons name="calendar" size={22} color="#162F7A" />
              </TouchableOpacity>
            </View>
            {errors.dob && <Text style={styles.errorText}>{errors.dob}</Text>}

            {showDatePicker && (
              <DateTimePicker
                value={selectedDate || new Date()}
                mode="date"
                display={Platform.OS === "ios" ? "spinner" : "default"}
                maximumDate={
                  new Date(new Date().setFullYear(new Date().getFullYear() - 18))
                }
                onChange={(event, date) => {
                  setShowDatePicker(false);
                  if (!date) return;

                  if (!isAge18OrAbove(date)) {
                    setDob("");
                    setSelectedDate(null);
                    setErrors((prev) => ({ ...prev, dob: i18n.t("err_age_18") }));
                    setValid((prev) => ({ ...prev, dob: false }));
                    return;
                  }

                  setSelectedDate(date);
                  setDob(formatDate(date));
                  setErrors((prev) => ({ ...prev, dob: "" }));
                  setValid((prev) => ({ ...prev, dob: true }));
                }}
              />
            )}

            {/* GENDER */}
            <View
              style={[
                styles.genderBox,
                { borderColor: getBorderColor("gender"), borderWidth: 2 },
              ]}
            >
              <Text style={styles.genderLabel}>{i18n.t("gender")}</Text>
              <View style={styles.genderRow}>
                {[i18n.t("male"), i18n.t("female"), i18n.t("others")].map(
                  (g) => (
                    <TouchableOpacity
                      key={g}
                      onPress={() => {
                        setGender(g);
                        setErrors((prev) => ({ ...prev, gender: "" }));
                        setValid((prev) => ({ ...prev, gender: true }));
                      }}
                      style={styles.radioRow}
                    >
                      <Ionicons
                        name={
                          gender === g
                            ? "radio-button-on"
                            : "radio-button-off"
                        }
                        size={20}
                        color="#162F7A"
                      />
                      <Text style={styles.radioText}>{g}</Text>
                    </TouchableOpacity>
                  )
                )}
              </View>
            </View>
            {errors.gender && (
              <Text style={styles.errorText}>{errors.gender}</Text>
            )}

            <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
              <Text style={styles.loginBtnText}>{i18n.t("sign_up")}</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

// ---------------- STYLES ----------------
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  card: {
    marginHorizontal: 25,
    padding: 25,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.15)",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFF",
    textAlign: "center",
    marginBottom: 20,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 30,
    paddingHorizontal: 15,
    marginBottom: 12,
    height: 50,
    borderWidth: 2,
  },
  input: { flex: 1, marginLeft: 10, color: "#1E2A78" },
  genderBox: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 20,
    marginTop: 10,
  },
  genderLabel: { fontWeight: "700", color: "#162F7A", marginBottom: 8 },
  genderRow: { flexDirection: "row", justifyContent: "space-around" },
  radioRow: { flexDirection: "row", alignItems: "center" },
  radioText: { marginLeft: 5, color: "#162F7A" },
  errorText: { color: "yellow", marginLeft: 10, marginBottom: 8 },
  loginBtn: {
    backgroundColor: "#FFF",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 15,
  },
  loginBtnText: { color: "#162F7A", fontSize: 18, fontWeight: "700" },
});
