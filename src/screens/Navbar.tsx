import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";

import Home from "./tabs/Home";
import Portfolio from "./tabs/portfolio";
import Performance from "./tabs/Performance";
import Sectoral from "./tabs/Sectoral";

const Tab = createBottomTabNavigator();

export default function Navbar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      < Tab.Screen name="Home" component={Home} options={{ icon: "home" } as any} />
      < Tab.Screen name="Portfolio" component={Portfolio} options={{ icon: "speedometer" } as any} />
      < Tab.Screen name="Past Performance" component={Performance} options={{ icon: "trending-up" } as any} />
      < Tab.Screen name="Sectoral Indices" component={Sectoral} options={{ icon: "pie-chart" } as any} />
    </Tab.Navigator>
  );
}

// ------------------------------------------------------------
// CUSTOM TAB BAR UI
// ------------------------------------------------------------

function CustomTabBar({ state, descriptors, navigation }: any) {
  return (
    <View style={styles.outerPinkCard}>
     <View style={styles.tabContainer}>
      {/* <LinearGradient colors={["#122A7C", "#122A7C"]} style={styles.tabContainer}> */}
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const label = route.name;
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

                  {/* ⭐ This forces exactly 2-line text */}
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
      {/* </LinearGradient> */}
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

  // card: {

  //   // backgroundColor: "#ffffff",
  // padding: 4,
  // //borderRadius: 50,
    
  // },

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

  // Each tab has a fixed width slot
  tabButton: {
    //width: 90,
    alignItems: "center",
    justifyContent: "center",
  },

  // ACTIVE pill design
  activeTab: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 100, //  fixes 2-line wrap
    gap: 6,
  },

  // ACTIVE label (2 lines)
  activeText: {
    color: "#1E2A78",
    fontWeight: "700",
    fontSize: 13,
    textAlign: "center",
    lineHeight: 17,
    //width: 90, //  prevents 3-line wrapping
  },

  // INACTIVE icon button
  inactiveCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});


