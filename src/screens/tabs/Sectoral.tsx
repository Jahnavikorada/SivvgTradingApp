import React, { useContext } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CommonHeader from "../components/CommonHeader";
import SectoralPanel from "../components/SectoralPanel";

import i18n from "../../i18n";
import { LanguageContext } from "../../context/LanguageContext";

const { height } = Dimensions.get("window");

export default function Sectoral({ navigation }: any) {
  const { reloadKey } = useContext(LanguageContext); // ✅ refresh title translation

  return (
    <LinearGradient
      colors={["#FF2E4C", "#1E2A78"]}
      style={styles.gradient}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <View key={reloadKey} style={styles.container}>
        {/* ✅ TOP HEADER (UNCHANGED UI) */}
        <CommonHeader title={i18n.t("sectoral_indices")} navigation={navigation} />

        {/* ✅ WHITE PARENT CARD (UNCHANGED UI) */}
        <View style={styles.card}>
          <SectoralPanel />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1, // ✅ FULL SCREEN
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
    paddingHorizontal: 10,
  },
});
