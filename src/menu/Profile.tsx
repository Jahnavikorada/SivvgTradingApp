import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  SafeAreaView,
  Platform,
} from "react-native";

import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";

import i18n from "../i18n";
import { LanguageContext } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

/* ✅ Platform styles loader */
const styles =
  Platform.OS === "ios"
    ? require("./Profile.styles.ios").default
    : require("./Profile.styles.android").default;

export default function Profile({ navigation }: any) {
  const { reloadKey } = useContext(LanguageContext);
  const [showPassword, setShowPassword] = useState(false);

  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <View key={reloadKey} style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />

      {/* Gradient background */}
      <LinearGradient
        colors={["#FF2E4C", "#1E2A78"]}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          {/* Header */}
          <View style={styles.headerRow}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backIconWrapper}
            >
              <Ionicons name="chevron-back" size={26} color="#fff" />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>
              {i18n.t("my_profile")}
            </Text>

            <TouchableOpacity style={styles.editIconWrapper}>
              <Ionicons name="pencil" size={22} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Avatar */}
          <View style={styles.avatarSection}>
            <Ionicons name="person-circle" size={120} color="#fff" />
          </View>

          {/* Card */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            <View
              style={[
                styles.card,
                isDark && { backgroundColor: "rgba(0,0,0,0.4)" },
              ]}
            >
              {/* USER ID */}
              <View style={styles.inputBox}>
                <Ionicons name="person" size={22} color="#1E2A78" />
                <TextInput
                  style={styles.input}
                  defaultValue="John_ID77"
                />
              </View>

              {/* PASSWORD */}
              <View style={styles.inputBox}>
                <Ionicons name="lock-closed" size={22} color="#1E2A78" />
                <TextInput
                  style={styles.input}
                  secureTextEntry={!showPassword}
                  defaultValue="********"
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons
                    name={showPassword ? "eye" : "eye-off"}
                    size={22}
                    color="#1E2A78"
                  />
                </TouchableOpacity>
              </View>

              {/* EMAIL */}
              <View style={styles.inputBox}>
                <Ionicons name="mail" size={22} color="#1E2A78" />
                <TextInput
                  style={styles.input}
                  defaultValue="john420@gmail.com"
                />
              </View>

              {/* PHONE */}
              <View style={styles.inputBox}>
                <Ionicons name="call" size={22} color="#1E2A78" />
                <TextInput
                  style={styles.input}
                  defaultValue="9848321230"
                />
              </View>

              {/* Buttons */}
              <View style={styles.btnRow}>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btnText}>
                    {i18n.t("update")}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btnText}>
                    {i18n.t("delete")}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}
