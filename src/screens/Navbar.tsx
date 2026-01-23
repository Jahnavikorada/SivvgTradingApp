import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";

import Home from "./tabs/Home";
import Portfolio from "./tabs/portfolio";
import Performance from "./tabs/Performance";
import Sectoral from "./tabs/Sectoral";

import i18n from "../i18n";
import { LanguageContext } from "../context/LanguageContext";

const Tab = createBottomTabNavigator();

export default function Navbar() {
  const { reloadKey } = useContext(LanguageContext); // ✅ refresh tabs text

  return (
    <View key={reloadKey} style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
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
// CUSTOM TAB BAR UI
// ------------------------------------------------------------
function CustomTabBar({ state, descriptors, navigation }: any) {
  return (
    <View style={styles.outerPinkCard}>
      <View style={styles.tabContainer}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];

          // ✅ Translated Label (But keep route.name same)
          const labelKey = options.tabBarLabelKey;
          const label = labelKey ? i18n.t(labelKey) : route.name;

          const icon = options.icon;
          const isFocused = state.index === index;

          return (
            <TouchableOpacity
              key={index}
              style={styles.tabButton}
              onPress={() => navigation.navigate(route.name)}
            >
              {isFocused ? (
                <View style={styles.activeTab}>
                  <Icon name={icon} size={20} color="#1E2A78" />

                  <Text numberOfLines={2} style={styles.activeText}>
                    {label}
                  </Text>
                </View>
              ) : (
                <LinearGradient
                  colors={["#ffffff", "#c0c5deff"]}
                  style={styles.inactiveCircle}
                >
                  <Icon name={icon} size={22} color="#1E2A78" />
                </LinearGradient>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerPinkCard: {
    backgroundColor: "#122A7C",
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
  },

  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#122A7C",
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
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 100,
    gap: 6,
  },

  activeText: {
    color: "#1E2A78",
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
