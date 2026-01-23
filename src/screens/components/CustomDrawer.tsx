import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import i18n from "../../i18n";
import { LanguageContext } from "../../context/LanguageContext";

export default function CustomDrawer(props: any) {
  const { navigation } = props;
  const { reloadKey } = useContext(LanguageContext); // ✅ to refresh text

  const DrawerItem = ({
    icon,
    label,
    onPress,
  }: {
    icon: string;
    label: string;
    onPress: () => void;
  }) => (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.itemLeft}>
        <Ionicons name={icon} size={20} color="#1E2A78" />
        <Text style={styles.itemText}>{label}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#1E2A78" />
    </TouchableOpacity>
  );

  return (
    <View key={reloadKey} style={{ flex: 1 }}>
      <LinearGradient
        colors={["#FF2E4C", "#1E2A78"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientOverlay}
        pointerEvents="none"
      >
        <View style={styles.profileContainer}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={34} color="#1E2A78" />
          </View>
          <Text style={styles.username}>{i18n.t("drawer_username")}</Text>

        </View>
      </LinearGradient>

      {/* ⚪ WHITE CARD */}
      <View style={styles.menucard}>
        <DrawerContentScrollView
          {...props}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          {/* ⚪ MENU */}
          <View style={styles.menu}>
            <DrawerItem
              icon="person"
              label={i18n.t("drawer_my_profile")}
              onPress={() => navigation.navigate("Profile")}
            />

            <DrawerItem
              icon="settings"
              label={i18n.t("drawer_app_preferences")}
              onPress={() => navigation.navigate("AppPreference")}
            />

            <DrawerItem
              icon="information-circle"
              label={i18n.t("drawer_about")}
              onPress={() => navigation.navigate("About")}
            />

            <DrawerItem
              icon="call"
              label={i18n.t("drawer_contact_us")}
              onPress={() => navigation.navigate("ContactUs")}
            />

            <DrawerItem
              icon="log-out"
              label={i18n.t("drawer_logout")}
              onPress={() => navigation.navigate("Logout")}
            />

            {/* 🔽 FOOTER */}
            <View style={styles.footer}>
              <View style={styles.links}>
                <Text style={styles.link}>{i18n.t("privacy_policy")}</Text>
                <Text style={styles.link}>{i18n.t("terms_conditions")}</Text>
              </View>
            </View>

            <Text style={styles.version}>{i18n.t("android_version")}</Text>
          </View>
        </DrawerContentScrollView>
      </View>
    </View>
  );
}

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

  header: {
    height: 220,
    justifyContent: "center",
    alignItems: "center",
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

  version: {
    marginTop: "70%",
    textAlign: "center",
    alignSelf: "center",
    fontSize: 11,
    color: "#999",
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
});
