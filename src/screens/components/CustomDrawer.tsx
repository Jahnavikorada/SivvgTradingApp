import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "../../context/ThemeContext";

export default function CustomDrawer(props: any) {
  const { navigation } = props;
  const { isDark } = useTheme();

  const DrawerItem = ({
    icon,
    label,
    onPress,
  }: {
    icon: string;
    label: string;
    onPress: () => void;
  }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.itemLeft}>
        <Ionicons
          name={icon}
          size={20}
          color={isDark ? "rgba(255,255,255,0.85)" : "#1E2A78"}
        />
        <Text style={[styles.itemText, isDark && styles.textDark]}>
          {label}
        </Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={20}
        color={isDark ? "rgba(255,255,255,0.6)" : "#1E2A78"}
      />
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      {/* 🔴 GRADIENT HEADER */}
      <LinearGradient
        colors={["#FF2E4C", "#1E2A78"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientOverlay}
        pointerEvents="none"
      >
        <View style={styles.profileContainer}>
          <View style={[styles.avatar, isDark && styles.avatarDark]}>
            <Ionicons
              name="person"
              size={34}
              color={isDark ? "rgba(255,255,255,0.85)" : "#1E2A78"}
            />
          </View>
          <Text style={styles.username}>John_ID77</Text>
        </View>
      </LinearGradient>

      {/* ⚪ MENU CARD */}
      <View style={[styles.menucard, isDark && styles.menuCardDark]}>
        <DrawerContentScrollView
          {...props}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <View style={styles.menu}>
            <DrawerItem
              icon="person"
              label="My Profile"
              onPress={() => navigation.navigate("Profile")}
            />

            <DrawerItem
              icon="settings"
              label="App Preferences"
              onPress={() => navigation.navigate("AppPreference")}
            />

            <DrawerItem
              icon="information-circle"
              label="About"
              onPress={() => navigation.navigate("About")}
            />

            <DrawerItem
              icon="call"
              label="ContactUs"
              onPress={() => navigation.navigate("ContactUs")}
            />

            <DrawerItem
              icon="log-out"
              label="Logout"
              onPress={() => navigation.navigate("Logout")}
            />

            {/* 🔽 FOOTER */}
            <View style={styles.footer}>
              <View style={styles.links}>
                <Text style={[styles.link, isDark && styles.textMutedDark]}>
                  Privacy Policy
                </Text>
                <Text style={[styles.link, isDark && styles.textMutedDark]}>
                  Terms & Conditions
                </Text>
              </View>
            </View>

            <Text style={[styles.version, isDark && styles.textMutedDark]}>
              Android Version 0.1.0
            </Text>
          </View>
        </DrawerContentScrollView>
      </View>
    </View>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  gradientOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "25%",
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  profileContainer: {
    alignItems: "center",
  },

  menucard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: "60%",
    elevation: 12,
  },

  menuCardDark: {
    backgroundColor: "#1a1a1a",
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    elevation: 6,
  },

  avatarDark: {
    backgroundColor: "#1a1a1a",
  },

  username: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 4,
  },

  menu: {
    paddingTop: 20,
    paddingHorizontal: 16,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginBottom: 6,
  },

  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  itemText: {
    marginLeft: 12,
    fontSize: 15,
    fontWeight: "600",
    color: "#1E2A78",
  },

  footer: {
    marginTop: 30,
    paddingHorizontal: 16,
  },

  links: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  link: {
    fontSize: 12,
    color: "#1E2A78",
    fontWeight: "600",
  },

  version: {
    marginTop: "70%",
    textAlign: "center",
    alignSelf: "center",
    fontSize: 11,
    color: "#999",
  },

  /* 🌙 DARK TEXT HELPERS */
  textDark: {
    color: "rgba(255,255,255,0.85)",
  },

  textMutedDark: {
    color: "rgba(255,255,255,0.55)",
  },
});
