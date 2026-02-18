import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";

import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import i18n from "../../i18n";

/* platform styles */
const styles =
  Platform.OS === "ios"
    ? require("./Notification.styles.ios").default
    : require("./Notification.styles.android").default;

const HEADER_HEIGHT = 150;

const notifications = [
  { id: "1", symbol: "GODREJCP", message: "notification_target_reached", time: "notification_1_min_ago" },
  { id: "2", symbol: "ADANIENT", message: "notification_target_reached", time: "notification_7_mins_ago" },
  { id: "3", symbol: "COLPAL", message: "notification_target_reached", time: "notification_45_mins_ago" },
  { id: "4", symbol: "ANGELONE", message: "notification_target_reached", time: "notification_1_hr_ago" },
];

export default function NotificationScreen({ navigation }: any) {
  const { colors, isDark } = useTheme();
  const { reloadKey } = useContext(LanguageContext);
  const insets = useSafeAreaInsets();

  const renderItem = ({ item }: any) => (
    <View
      style={[
        styles.card,
        {
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
    <View
      key={reloadKey}
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      {/* HEADER */}
      <LinearGradient
        colors={[colors.gradientStart, colors.gradientEnd]}
        style={[styles.header, { height: HEADER_HEIGHT + insets.top }]}
      >
        <View
          style={{
            paddingTop: insets.top,
            flex: 1,
          }}
        >
          <View style={styles.headerRow}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backIconWrapper}
            >
              <Icon name="chevron-back" size={26} color="#fff" />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>
              {i18n.t("notifications")}
            </Text>

            <View style={{ width: 26 }} />
          </View>
        </View>
      </LinearGradient>

      {/* BODY */}
      <View
        style={[
          styles.body,
          {
            backgroundColor: colors.background,
            marginTop: HEADER_HEIGHT + insets.top,
          },
        ]}
      >
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </View>
  );
}
