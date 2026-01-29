import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import { useFont } from "../context/FontContext";
import { getFontFamily } from "../context/fontHelper";
import { useTheme } from "../context/ThemeContext"; 
import i18n from "../i18n";
import { LanguageContext } from "../context/LanguageContext"; 

/* ---------------- INFO BOX ---------------- */
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

  const boxColor = isDark ? "#121212" : "#1E2A78"; // Dark blue shades
  const titleColor = "#FFFFFF"; // always white
  const descColor = "#E0E0E0"; // lighter gray

  return (
    <View
      style={[
        styles.box,
        {
          backgroundColor: boxColor,
          shadowColor: "#000",
          shadowOpacity: 0.25,
          shadowRadius: 6,
          shadowOffset: { width: 0, height: 4 },
        },
      ]}
    >
      <View style={styles.row}>
        <Icon name={icon} size={24} color={titleColor} style={{ marginTop: 2 }} />
        <View style={styles.textContainer}>
          <Text
            style={{
              fontFamily: getFontFamily(fontFamily, "semibold"),
              fontSize: fontSize + 2,
              color: titleColor,
              marginBottom: 2,
            }}
          >
            {title}
          </Text>

          <Text
            style={{
              fontFamily: getFontFamily(fontFamily, "regular"),
              fontSize,
              color: descColor,
            }}
          >
            {desc}
          </Text>
        </View>
      </View>
    </View>
  );
};

/* ---------------- SCREEN ---------------- */
export default function About({ navigation }: any) {
  const { fontFamily,  } = useFont();
  const {  isDark } = useTheme(); 
  const { reloadKey } = useContext(LanguageContext); 

  const isLight = !isDark;

  return (
    <SafeAreaView
      key={reloadKey} 
      style={{ flex: 1, backgroundColor: isLight ? "#fff" : "#121212" }}
    >
      <LinearGradient
        colors={isLight ? ["#FF2E4C", "#1E2A78"] : ["#FF2E4C", "#1E2A78"]} 
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        {/* HEADER */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back" size={28} color="#fff" />
          </TouchableOpacity>

          <Text
            style={{
              fontFamily: getFontFamily(fontFamily, "bold"),
              fontSize: 22,
              color: "#fff",
              left:30
            }}
          >
            {i18n.t("about_us")}
          </Text>
        </View>

        {/* CARD */}
        <View
          style={[
            styles.card,
            { backgroundColor: isLight ? "#fff" : "#1a1a1a" },
          ]}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text
              style={{
                textAlign: "center",
                marginVertical: 16,
                fontFamily: getFontFamily(fontFamily, "semibold"),
                fontSize: 22,
                marginBottom:24,
                color: isDark ? "#E0E0E0" : "#1E2A78",
              }}
            >
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

            <Text
              style={{
                textAlign: "center",
                marginVertical: 16,
                fontFamily: getFontFamily(fontFamily, "semibold"),
                fontSize: 22,
                marginBottom:24,
                color: isDark ? "#E0E0E0" : "#1E2A78",
              }}
            >
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
      </LinearGradient>
    </SafeAreaView>
  );
}

/* ---------------- STYLES ---------------- */
const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 20,
    gap: 10,
    top:18,
  },

  card: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: "20%",
    padding: 16,
    paddingHorizontal:24
  },

  box: {
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    paddingVertical:22,
    
  },

  row: {
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-start",
  },

  textContainer: {
    flex: 1,
  },
});
