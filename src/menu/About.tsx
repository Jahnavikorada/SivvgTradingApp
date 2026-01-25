import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import { useFont } from "../context/FontContext";
import { getFontFamily } from "../context/fontHelper";
import { useTheme } from "../context/ThemeContext"; // ✅ USE THIS

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
  const { colors } = useTheme(); // ✅ COLORS ONLY

  return (
    <View
      style={[
        styles.box,
        { backgroundColor: colors.surface },
      ]}
    >
      <View style={styles.row}>
        <Icon name={icon} size={28} color={colors.textPrimary} />

        <View style={styles.textContainer}>
          <Text
            style={[
              styles.boxTitle,
              {
                fontFamily: getFontFamily(fontFamily, "semibold"),
                fontSize: fontSize + 2,
                color: colors.textPrimary,
              },
            ]}
          >
            {title}
          </Text>

          <Text
            style={[
              styles.boxText,
              {
                fontFamily: getFontFamily(fontFamily, "regular"),
                fontSize,
                color: colors.textSecondary,
              },
            ]}
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
  const { fontFamily, fontSize } = useFont();
  const { colors } = useTheme(); // ✅ GLOBAL THEME

  return (
    <LinearGradient
      colors={[colors.gradientStart, colors.gradientEnd]}
      style={styles.gradient}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      {/* HEADER */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={26} color="#fff" />
        </TouchableOpacity>

        <Text
          style={[
            styles.headerTitle,
            {
              fontFamily: getFontFamily(fontFamily, "bold"),
              fontSize: fontSize + 6,
            },
          ]}
        >
          About Us
        </Text>
      </View>

      {/* CARD */}
      <View
        style={[
          styles.card,
          { backgroundColor: colors.background },
        ]}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={[
              styles.header,
              {
                fontFamily: getFontFamily(fontFamily, "semibold"),
                fontSize: fontSize + 4,
                color: colors.textPrimary,
              },
            ]}
          >
            Why choose us?
          </Text>

          <InfoBox
            icon="checkbox"
            title="Precision Picks"
            desc="Accurate intraday tips by experts with clear entry and exit."
          />

          <InfoBox
            icon="flash"
            title="Quick Trigger"
            desc="Act fast and catch the right market opportunity."
          />

          <InfoBox
            icon="analytics-sharp"
            title="Strategic Flow"
            desc="Structured trading tips with no guesswork."
          />

          <Text
            style={[
              styles.header,
              {
                fontFamily: getFontFamily(fontFamily, "semibold"),
                fontSize: fontSize + 4,
                color: colors.textPrimary,
              },
            ]}
          >
            What we Offer
          </Text>

          <InfoBox
            icon="chevron-forward"
            title="Intraday Tips"
            desc="(Equity, Futures, Options)"
          />

          <InfoBox
            icon="chevron-forward"
            title="Market Notifications"
            desc="Real-time market updates"
          />
        </ScrollView>
      </View>
    </LinearGradient>
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
  },

  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  card: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: "10%",
    padding: 16,
  },

  box: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },

  row: {
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-start",
  },

  textContainer: {
    flex: 1,
  },

  boxTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },

  boxText: {
    fontSize: 14,
  },

  header: {
    textAlign: "center",
    marginVertical: 16,
  },
});
