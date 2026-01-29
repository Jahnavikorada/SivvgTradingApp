import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Feather";

import { useTheme } from "../../context/ThemeContext"; // ✅ THEME
import { LanguageContext } from "../../context/LanguageContext"; // ✅ LANGUAGE RELOAD
import i18n from "../../i18n";

// ✅ USE TRANSLATION KEYS (NOT TEXT)
const notifications = [
  {
    id: "1",
    symbol: "GODREJCP",
    message: "notification_target_reached",
    time: "notification_1_min_ago",
  },
  {
    id: "2",
    symbol: "ADANIENT",
    message: "notification_target_reached",
    time: "notification_7_mins_ago",
  },
  {
    id: "3",
    symbol: "COLPAL",
    message: "notification_target_reached",
    time: "notification_45_mins_ago",
  },
  {
    id: "4",
    symbol: "ANGELONE",
    message: "notification_target_reached",
    time: "notification_1_hr_ago",
  },
];

const NotificationScreen = ({ navigation }: any) => {
  const { colors, isDark } = useTheme(); // ✅ THEME (UNCHANGED)
  const { reloadKey } = useContext(LanguageContext); // ✅ FORCE RE-RENDER ON LANGUAGE CHANGE

  const renderItem = ({ item }: any) => (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
          shadowOpacity: isDark ? 0.4 : 0.15,
        },
      ]}
    >
      <View style={styles.cardContent}>
        <Text style={[styles.symbol, { color: colors.textPrimary }]}>
          {item.symbol} -{" "}
        </Text>
        <Text style={[styles.message, { color: colors.textPrimary }]}>
          {i18n.t(item.message)}
        </Text>
      </View>

      <Text style={[styles.time, { color: colors.textSecondary }]}>
        {i18n.t(item.time)}
      </Text>
    </View>
  );

  return (
    <SafeAreaView
      key={reloadKey} // ✅ IMPORTANT FOR LANGUAGE REFRESH
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <LinearGradient
        colors={[colors.gradientStart, colors.gradientEnd]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={28} color="#FFFFFF" />
        </TouchableOpacity>

        {/* ✅ LANGUAGE-AWARE TITLE */}
        <Text style={styles.headerTitle}>
          {i18n.t("notifications")}
        </Text>

        <View style={{ width: 28 }} />
      </LinearGradient>

      <View style={[styles.body, { backgroundColor: colors.background }]}>
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    height: 180,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "500",
    //marginRight: 120,
    right:70
    
  },

  body: {
    flex: 1,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    marginTop: -20,
    paddingTop: 44,
    
  },

  card: {
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 26,
    padding: 18,
    borderWidth: 1.5,
    elevation: 4,
    shadowColor: "#000",
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },

  cardContent: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  symbol: {
    fontSize: 16,
    fontWeight: "500",
  },

  message: {
    fontSize: 15,
    fontWeight: "400",
  },

  time: {
    textAlign: "right",
    marginTop: 10,
    fontSize: 14,
    fontWeight: "500",
  },
});
