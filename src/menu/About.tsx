import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";

import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "./About.styles"
 // ⭐ bridge file import

import { useFont } from "../context/FontContext";
import { getFontFamily } from "../context/fontHelper";
import { useTheme } from "../context/ThemeContext";
import i18n from "../i18n";
import { LanguageContext } from "../context/LanguageContext";

/* ---------- Info Box ---------- */
const InfoBox = ({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) => {
  const { fontFamily, fontSize } = useFont();
  const { isDark } = useTheme();

  return (
    <View
      style={[
        styles.box,
         { backgroundColor: isDark ? "#121212" : "#1E2A78" },
      ]}
    >
      <View style={styles.row}>
        <Icon name={icon} size={22} color="#fff" />

        <View style={styles.textContainer}>
          <Text
            style={{
              fontFamily: getFontFamily(fontFamily, "semibold"),
              fontSize: fontSize + 2,
              color: "#fff",
              marginBottom: 4,
            }}
          >
            {title}
          </Text>

          <Text
            style={{
              fontFamily: getFontFamily(fontFamily, "regular"),
              fontSize,
              color: "#E0E0E0",
            }}
          >
            {desc}
          </Text>
        </View>
      </View>
    </View>
  );
};

/* ---------- Screen ---------- */
export default function About({ navigation }: any) {
  const { fontFamily } = useFont();
  const { isDark } = useTheme();
  const { reloadKey } = useContext(LanguageContext);

  return (
    <View key={reloadKey} style={{ flex: 1 }}>
      {/* Gradient background */}
      <LinearGradient
        colors={["#FF2E4C", "#1E2A78"]}
        style={{ position: "absolute", inset: 0 }}
      />

      <SafeAreaView style={{ flex: 1 }}>
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backIconWrapper}
          >
            <Icon name="chevron-back" size={26} color="#fff" />
          </TouchableOpacity>

          <Text
            style={[
              styles.headerTitle,
              { fontFamily: getFontFamily(fontFamily, "bold") },
            ]}
          >
            {i18n.t("about_us")}
          </Text>
        </View>

        {/* Card */}
        <View
          style={[
            styles.card,
            { backgroundColor: isDark ? "#1a1a1a" : "#fff" },
          ]}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            <Text style={styles.sectionTitle}>
              {i18n.t("why_choose_us")}
            </Text>

            <InfoBox
              icon="checkbox"
              title={i18n.t("precision_picks")}
              desc={i18n.t("precision_picks_desc")}
            />

            <InfoBox
              icon="flash"
              title={i18n.t("quick_trigger")}
              desc={i18n.t("quick_trigger_desc")}
            />

            <InfoBox
              icon="analytics-sharp"
              title={i18n.t("strategic_flow")}
              desc={i18n.t("strategic_flow_desc")}
            />

            <Text style={styles.sectionTitle}>
              {i18n.t("what_we_offer")}
            </Text>

            <InfoBox
              icon="chevron-forward"
              title={i18n.t("intraday_tips")}
              desc={i18n.t("intraday_tips_desc")}
            />

            <InfoBox
              icon="chevron-forward"
              title={i18n.t("market_notifications")}
              desc={i18n.t("market_notifications_desc")}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}
