import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import { useTheme } from "../context/ThemeContext";

import Home from "./tabs/Home";
import Portfolio from "./tabs/portfolio";
import Performance from "./tabs/Performance";
import Sectoral from "./tabs/Sectoral";

import i18n from "../i18n"; // ✅ Language
import { LanguageContext } from "../context/LanguageContext"; // ✅ Reload

const Tab = createBottomTabNavigator();

export default function Navbar() {
  const { reloadKey } = useContext(LanguageContext); // ✅ language refresh

  return (
    <View key={reloadKey} style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ icon: "home", tabBarLabelKey: "tab_home" } as any}
        />
        <Tab.Screen
          name="Portfolio"
          component={Portfolio}
          options={{ icon: "speedometer", tabBarLabelKey: "tab_portfolio" } as any}
        />
        <Tab.Screen
          name="Past Performance"
          component={Performance}
          options={{
            icon: "trending-up",
            tabBarLabelKey: "tab_performance",
          } as any}
        />
        <Tab.Screen
          name="Sectoral Indices"
          component={Sectoral}
          options={{
            icon: "pie-chart",
            tabBarLabelKey: "tab_sectoral",
          } as any}
        />
      </Tab.Navigator>
    </View>
  );
}

// ------------------------------------------------------------
// CUSTOM TAB BAR (THEME + LANGUAGE)
// ------------------------------------------------------------

function CustomTabBar({ state, descriptors, navigation }: any) {
  const { isDark } = useTheme();

  // 🎨 THEME COLORS (UNCHANGED)
  const outerBg = "#122A7C";
  const tabBg = "#122A7C";

  const activeBg = isDark ? "#1A1A1A" : "#E8ECFF";
  const activeTextColor = isDark ? "#FFFFFF" : "#1E2A78";
  const activeIconColor = isDark ? "#FFFFFF" : "#1E2A78";

  const inactiveGradient = isDark
    ? ["#1a1a1a", "#1a1a1a"]
    : ["#ffffff", "#c0c5deff"];

  const inactiveIconColor = isDark ? "#FFFFFF" : "#1E2A78";

  return (
    <View style={[styles.outerPinkCard, { backgroundColor: outerBg }]}>
      <View style={[styles.tabContainer, { backgroundColor: tabBg }]}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const icon = options.icon;
          const labelKey = options.tabBarLabelKey;
          const label = labelKey ? i18n.t(labelKey) : route.name;
          const isFocused = state.index === index;

          return (
            <TouchableOpacity
              key={route.key}
              style={styles.tabButton}
              onPress={() => navigation.navigate(route.name)}
              activeOpacity={0.8}
            >
              {isFocused ? (
                // ✅ ACTIVE TAB
                <View
                  style={[
                    styles.activeTab,
                    { backgroundColor: activeBg },
                  ]}
                >
                  <Icon name={icon} size={20} color={activeIconColor} />
                  <Text
                    numberOfLines={2}
                    style={[
                      styles.activeText,
                      { color: activeTextColor },
                    ]}
                  >
                    {label}
                  </Text>
                </View>
              ) : (
                // ❌ INACTIVE TAB
                <LinearGradient
                  colors={inactiveGradient}
                  style={styles.inactiveCircle}
                >
                  <Icon
                    name={icon}
                    size={22}
                    color={inactiveIconColor}
                  />
                </LinearGradient>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

// ------------------------------------------------------------
// STYLES (UNCHANGED)
// ------------------------------------------------------------

const styles = StyleSheet.create({
  outerPinkCard: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
  },

  tabContainer: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 45,
    justifyContent: "space-between",
    width: "100%",
    borderWidth: 1,
    borderColor: "#c7babaff",
    elevation: 6,
  },

  tabButton: {
    alignItems: "center",
    justifyContent: "center",
  },

  activeTab: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 100,
    gap: 6,
  },

  activeText: {
    fontWeight: "700",
    fontSize: 13,
    textAlign: "center",
    lineHeight: 17,
  },

  inactiveCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
