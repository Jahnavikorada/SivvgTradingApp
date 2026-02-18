import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import { useTheme } from "../context/ThemeContext";
import Home from "./tabs/Home";
import Portfolio from "./tabs/portfolio";
import Performance from "./tabs/Performance";
import Sectoral from "./tabs/Sectoral";
import i18n from "../i18n"; 
import { LanguageContext } from "../context/LanguageContext"; 
import { androidStyles } from "./Navbar.android.styles";
import { iosStyles } from "./Navbar.ios.styles";

const styles = Platform.OS === "ios"? iosStyles : androidStyles;

const Tab = createBottomTabNavigator();

export default function Navbar() {
  const { reloadKey } = useContext(LanguageContext); 

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



function CustomTabBar({ state, descriptors, navigation }: any) {
  const { isDark } = useTheme();
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
               
                <View
                  style={[
                    styles.activeTab,
                    { backgroundColor: activeBg },
                  ]}
                >
                  <Icon name={icon} size={28} color={activeIconColor} />
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
              
                <LinearGradient
                  colors={inactiveGradient}
                  style={styles.inactiveCircle}
                >
                  <Icon
                    name={icon}
                    size={28}
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
