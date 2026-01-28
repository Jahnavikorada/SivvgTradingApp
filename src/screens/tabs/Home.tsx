import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import CommonHeader from "../components/CommonHeader";
import HomeEquity from "../hometips/HomeEquity";
import HomeFutures from "../hometips/HomeFuture";
import HomeOptions from "../hometips/HomeOptions";

import { useTheme } from "../../context/ThemeContext";
import { LightColors, DarkColors } from "../../theme/colors";
import i18n from "../../i18n";
import { LanguageContext } from "../../context/LanguageContext";

const { height } = Dimensions.get("window");

export default function Home({ navigation }: any) {
  const [activeTab, setActiveTab] =
    useState<"Equity" | "Futures" | "Options">("Equity");

  const { isDark } = useTheme(); // ✅ THEME (UNCHANGED)
  const colors = isDark ? DarkColors : LightColors;

  const { reloadKey } = useContext(LanguageContext); // ✅ LANGUAGE REFRESH

  const getTranslatedTab = (tab: string) => {
    if (tab === "Equity") return i18n.t("equity");
    if (tab === "Futures") return i18n.t("futures");
    return i18n.t("options");
  };

  return (
    <LinearGradient
      colors={[colors.gradientStart, colors.gradientEnd]}
      style={styles.gradient}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <View key={reloadKey} style={styles.container}>
        {/* ✅ TRANSLATED HEADER */}
        <CommonHeader
          title={i18n.t("intraday_tips")}
          navigation={navigation}
        />

        {/* MAIN CARD */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: isDark ? "#1a1a1a" : "#FFFFFF",
            },
          ]}
        >
          {/* TABS */}
          <View
            style={[
              styles.tabs,
              {
                borderColor: isDark
                  ? "rgba(255,255,255,0.20)"
                  : "#1E2A78",
              },
            ]}
          >
            {["Equity", "Futures", "Options"].map((tab) => {
              const isActive = activeTab === tab;

              return (
                <TouchableOpacity
                  key={tab}
                  style={styles.tab}
                  activeOpacity={0.9}
                  onPress={() => setActiveTab(tab as any)}
                >
                  {isActive ? (
                    <LinearGradient
                      colors={[
                        colors.gradientStart,
                        colors.gradientEnd,
                      ]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.activeGradient}
                    >
                      <Text style={styles.activeTabText}>
                        {getTranslatedTab(tab)}
                      </Text>
                    </LinearGradient>
                  ) : (
                    <View
                      style={[
                        styles.inactiveTab,
                        {
                          backgroundColor: isDark
                            ? "rgba(0,0,0,0.60)"
                            : "#FFFFFF",
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.tabText,
                          {
                            color: isDark
                              ? colors.textSecondary
                              : "#1E2A78",
                          },
                        ]}
                      >
                        {getTranslatedTab(tab)}
                      </Text>
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>

          {/* CONTENT */}
          <View style={{ width: "100%" }}>
            {activeTab === "Equity" && <HomeEquity />}
            {activeTab === "Futures" && <HomeFutures />}
            {activeTab === "Options" && <HomeOptions />}
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },

  container: {
    flex: 1,
  },

  card: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 30,
    paddingTop: 15,
    paddingHorizontal: 25,
  },

  tabs: {
    flexDirection: "row",
    borderWidth: 1.5,
    overflow: "hidden",
    width: "100%",
    marginBottom: 16,
    marginTop: 20,
    height: 45,
    borderRadius: 10,
  },

  tab: {
    flex: 1,
  },

  tabText: {
    fontWeight: "600",
    fontSize: 18,
  },

  activeTabText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 18,
  },

  activeGradient: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  inactiveTab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
