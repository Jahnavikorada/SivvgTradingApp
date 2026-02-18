import React, { useContext } from "react";
import { View, Text,  TouchableOpacity, Platform } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import i18n from "../i18n";
import { LanguageContext } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { androidStyles } from "./Logout.android.styles";
import { iosStyles } from "./Logout.ios.styles";

const styles = Platform.OS === "ios" ? iosStyles : androidStyles;

export default function LogoutScreen({ navigation }: any) {
  const { reloadKey } = useContext(LanguageContext); // ✅ refresh texts
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <View
      key={reloadKey}
      style={[
        styles.container,
        { backgroundColor: isDark ? "#1a1a1a" : "#ffffff" },
      ]}
    >
      <View
        style={[
          styles.box,
          {
            backgroundColor: isDark ? "#1a1a1a" : "transparent",
            borderRadius: isDark ? 16 : 0,
          },
        ]}
      >
        <MaterialIcons
          name="logout"
          size={60}
          color={isDark ? "#E5E7EB" : "#1E2A78"}
        />

        <Text
          style={[
            styles.title,
            { color: isDark ? "#E5E7EB" : "#1E2A78" },
          ]}
        >
          {i18n.t("logout")}
        </Text>

        <Text
          style={[
            styles.user,
            { color: isDark ? "#e5e7eb" : "#1E2A78" },
          ]}
        >
          {i18n.t("hi")} John
        </Text>

        <Text
          style={[
            styles.msg,
            { color: isDark ? "#e5e7eb" : "#1E2A78" },
          ]}
        >
          {i18n.t("logout_confirm")}
        </Text>

        <View style={styles.row}>
          <TouchableOpacity
            style={[
              styles.yes,
              { backgroundColor: isDark ? "#E5E7EB" : "#1E2A78" },
            ]}
            onPress={() => navigation.navigate("SplashScreen")}
          >
            <Text
              style={[
                styles.yesText,
                { color: isDark ? "#020617" : "#ffffff" },
              ]}
            >
              {i18n.t("yes")}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.no,
              { borderColor: isDark ? "#E5E7EB" : "#1E2A78" },
            ]}
            onPress={() => navigation.goBack()}
          >
            <Text
              style={[
                styles.noText,
                { color: isDark ? "#E5E7EB" : "#1E2A78" },
              ]}
            >
              {i18n.t("no")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

