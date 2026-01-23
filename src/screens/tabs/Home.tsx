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

import i18n from "../../i18n";
import { LanguageContext } from "../../context/LanguageContext";

const { height } = Dimensions.get("window");

export default function Home({ navigation }: any) {
  const { reloadKey } = useContext(LanguageContext); // ✅ re-render on language change

  const [activeTab, setActiveTab] = useState<"Equity" | "Futures" | "Options">(
    "Equity"
  );

  return (
    <LinearGradient
      colors={["#FF2E4C", "#1E2A78"]}
      style={styles.gradient}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <View key={reloadKey} style={styles.container}>
        {/* ✅ Translated Header */}
        <CommonHeader title={i18n.t("intraday_tips")} navigation={navigation} />

        <View style={styles.card}>
          {/* TOP TABS */}
          <View style={styles.tabs}>
            {["Equity", "Futures", "Options"].map((tab) => {
              const isActive = activeTab === tab;

              // ✅ Translate tab names
              const translatedTab =
                tab === "Equity"
                  ? i18n.t("equity")
                  : tab === "Futures"
                  ? i18n.t("futures")
                  : i18n.t("options");

              return (
                <TouchableOpacity
                  key={tab}
                  style={styles.tab}
                  activeOpacity={0.9}
                  onPress={() => setActiveTab(tab as any)}
                >
                  {isActive ? (
                    <LinearGradient
                      colors={["#FF2E4C", "#1E2A78"]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.activeGradient}
                    >
                      <Text style={styles.activeTabText}>{translatedTab}</Text>
                    </LinearGradient>
                  ) : (
                    <View style={styles.inactiveTab}>
                      <Text style={styles.tabText}>{translatedTab}</Text>
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
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 30,
    paddingTop: 15,
    paddingHorizontal: 25,
  },

  tabs: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#1E2A78",
    overflow: "hidden",
    width: "100%",
    marginBottom: 16,
    marginTop: 20,
    height: 45,
  },

  tab: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
  },

  activeTab: {
    backgroundColor: "#FF2E4C",
  },

  tabText: {
    fontWeight: "600",
    fontSize: 18,
    color: "#1E2A78",
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
    paddingVertical: 8,
  },

  inactiveTab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    backgroundColor: "white",
  },
});
