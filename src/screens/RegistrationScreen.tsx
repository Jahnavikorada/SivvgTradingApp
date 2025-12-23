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
//import DateTimePicker from "@react-native-community/datetimepicker";

export default function RegisterScreen({ navigation }: any) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

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


  // const [showDatePicker, setShowDatePicker] = useState(false);
  // const [selectedDate, setSelectedDate] = useState(new Date());

  // // ---------------- Format date ----------------
  // const formatDate = (date: any) => {
  //   let d = new Date(date);
  //   let day = d.getDate().toString().padStart(2, "0");
  //   let month = (d.getMonth() + 1).toString().padStart(2, "0");
  //   let year = d.getFullYear();
  //   return `${day}/${month}/${year}`;
  // };

  // ---------------- VALIDATION FUNCTION ----------------
  const validate = () => {
  let validForm = true;
  let newErrors: any = {};
  let newValid: any = {};

  // USERNAME
  if (!username.trim()) {
    newErrors.username = "Username is required";
    newValid.username = false;
    validForm = false;
  } else {
    newValid.username = true;
  }

  // EMAIL
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim()) {
    newErrors.email = "Email is required";
    newValid.email = false;
    validForm = false;
  } else if (!emailRegex.test(email)) {
    newErrors.email = "Enter a valid email format";
    newValid.email = false;
    validForm = false;
  } else {
    newValid.email = true;
  }

  // PHONE
  const cleanedPhone = phone.replace(/\s+/g, "");
  const phoneRegex = /^(\+91)?[6-9][0-9]{9}$/;

  if (!cleanedPhone.trim()) {
    newErrors.phone = "Phone number is required";
    newValid.phone = false;
    validForm = false;
  } else if (!phoneRegex.test(cleanedPhone)) {
    newErrors.phone = "Enter a valid Indian mobile number";
    newValid.phone = false;
    validForm = false;
  } else {
    newValid.phone = true;
  }

  //DOB
// if (!dob.trim()) {
//   newErrors.dob = "DOB is required";
//   newValid.dob = false;
//   validForm = false;
// } else {
//   newValid.dob = true;
// }


  // GENDER
  if (!gender.trim()) {
    newErrors.gender = "Please select gender";
    newValid.gender = false;
    validForm = false;
  } else {
    newValid.gender = true;
  }

  setErrors(newErrors);
  setValid(newValid);

  return validForm;
};



  const handleRegister = () => {
    if (validate()) {
      //Alert.alert("Success", "Account created successfully!");
       navigation.navigate("Login");   // <-- Navigate ONLY after validation
    }
  };
  const getBorderColor = (
  field: "username" | "email" | "phone" | "dob" | "gender"
) => {
  if (errors[field]) return "#e66868ff";
  if (valid[field]) return "green";
  return "#ccc";
};



  return (
    <ImageBackground
      source={require("../../assets/images/register.png")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <LinearGradient
        colors={["rgba(255,46,76,0.8)", "rgba(30,42,120,0.8)"]}
        style={styles.container}
      >
        <View style={styles.card}>
          <Text style={styles.title}>Create a New Account</Text>

          {/* USERNAME */}
          <View style={[styles.inputBox,
            { borderColor: getBorderColor("username") }]
          }>
            <Ionicons name="person" size={22} color="#162F7A" />
            <TextInput
              placeholder="Username"
              placeholderTextColor="#1E2A78"
              style={styles.input}
              value={username}
              onChangeText={(text) => {
                setUsername(text);
                 if (text.trim()) {
      setErrors({ ...errors, username: "" });
      setValid({ ...valid, username: true });
    } else {
      setValid({ ...valid, username: false });
    }
                //setErrors({ ...errors, username: "" });
              }}
            />
          </View>
          {errors.username ? (
            <Text style={styles.errorText}>{errors.username}</Text>
          ) : null}

          {/* EMAIL */}
          <View style={[styles.inputBox,
            { borderColor: getBorderColor("email") }]
          }>
            <Ionicons name="mail" size={22} color="#162F7A" />
            <TextInput
              placeholder="Email"
              placeholderTextColor="#1E2A78"
              keyboardType="email-address"
              style={styles.input}
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setErrors({ ...errors, email: "" });
              }}
            />
          </View>
          {errors.email ? (
            <Text style={styles.errorText}>{errors.email}</Text>
          ) : null}



          {/* PHONE */}
          <View style={[styles.inputBox,
            { borderColor: getBorderColor("phone") }]
          }>
            <Ionicons name="call" size={22} color="#162F7A" />
            <TextInput
              placeholder="Phone Number"
              placeholderTextColor="#1E2A78"
              keyboardType="phone-pad"
              style={styles.input}
              value={phone}
              onChangeText={(text) => {
                setPhone(text);
                setErrors({ ...errors, phone: "" });
              }}
            />
          </View>
          {errors.phone ? (
            <Text style={styles.errorText}>{errors.phone}</Text>
          ) : null}



          {/* DOB */}
          <View style={[styles.inputBox,
            { borderColor: getBorderColor("dob") }]
          }>
            <TextInput
              placeholder="DOB (DD/MM/YYYY)"
              placeholderTextColor="#1E2A78"
              style={styles.input}
             // value={dob}
             // editable={false}
              onChangeText={(text) => {
    setDob(text);

    if (text.trim()) {
      setErrors({ ...errors, dob: "" });
      setValid({ ...valid, dob: true });
    } else {
      setValid({ ...valid, dob: false });
    }
  }}
            />
            {/* <TouchableOpacity onPress={() => setShowDatePicker(true)}> */}
            <TouchableOpacity >
              <Ionicons name="calendar" size={22} color="#162F7A" />
            </TouchableOpacity>
          </View>
          {errors.dob ? (
            <Text style={styles.errorText}>{errors.dob}</Text>
          ) : null}

          {/* DATE PICKER */}
          {/* {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display=""
              onChange={(event, selected) => {
                setShowDatePicker(false);

                if (selected) {
                  setSelectedDate(selected);
                  setDob(formatDate(selected));
                  setErrors({ ...errors, dob: "" });
                }
              }}
            />
          )} */}




          {/* GENDER */}
          <View style={[styles.genderBox,
            { borderColor: getBorderColor("gender"), borderWidth: 2 },
            ]
          }>
            <Text style={styles.genderLabel}>Gender</Text>

            <View style={styles.genderRow}>
              {["Male", "Female", "Others"].map((g) => (
                <TouchableOpacity
                  key={g}
                  onPress={() => {
                    setGender(g);
                    setErrors({ ...errors, gender: "" });
                  }}
                  style={styles.radioRow}
                >
                  <Ionicons
                    name={gender === g ? "radio-button-on" : "radio-button-off"}
                    size={20}
                    color="#162F7A"
                  />
                  <Text style={styles.radioText}>{g}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          {errors.gender ? (
            <Text style={styles.errorText}>{errors.gender}</Text>
          ) : null}

          {/* Already have an account? */}
          <Text style={styles.footerText}>
            Already have an account?{" "}
            <Text
              style={styles.loginText}
              onPress={() => navigation.navigate("Login")}
            >
              Login
            </Text>
          </Text>

          {/* SIGNUP BUTTON */}
          <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
            <Text style={styles.loginBtnText}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

// ---------------- STYLES ----------------
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },

  card: {
    marginHorizontal: 25,
    padding: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    backgroundColor: "rgba(255,255,255,0.15)",
  },

  title: {
    fontSize: 24,
    //fontWeight: "700",
    fontFamily: "Lato-Bold",
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
    marginBottom: 18,
    height: 50,
     borderWidth: 2, 
  },

  input: {
    flex: 1,
    marginLeft: 10,
    color: "#1E2A78",
    fontFamily: "Lato-Medium",
  },

  genderBox: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 20,
    marginTop: 15,
  },

  genderLabel: {
    fontSize: 16,
    color: "#162F7A",
    fontWeight: "700",
    marginBottom: 10,
  },

  genderRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  radioRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  radioText: {
    marginLeft: 5,
    color: "#162F7A",
  },

  errorText: {
    //color: "#FFBABA",
    // color: "#e66868ff",
    // marginLeft: 10,
    // marginBottom: 15,
    // fontSize: 13,
     color: "yellow",
     //fontSize: 12, 
      fontSize: 13,
     marginBottom: 12,
      marginLeft: 10, 
  },

  footerText: {
    textAlign: "center",
    color: "#FFF",
    marginVertical: 10,
    fontFamily: "Lato-Semibold",
  },

  loginText: {
    color: "#00BFFF",
    //fontWeight: "600",
    fontFamily: "Lato-Bold",
  },

  loginBtn: {
    backgroundColor: "#FFF",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 5,
  },

  loginBtnText: {
    color: "#162F7A",
    fontSize: 18,
    //fontWeight: "700",
    fontFamily: "Lato-Bold",
  },
});
