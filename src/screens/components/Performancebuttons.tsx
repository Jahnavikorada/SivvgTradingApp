import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useTheme } from "../../context/ThemeContext";
import i18n from "../../i18n";
import { LanguageContext } from "../../context/LanguageContext";
import { androidStyles } from "./Performancebuttons.android";
import { iosStyles } from "./Performancebuttons.ios";

const styles = Platform.OS === "ios"? iosStyles : androidStyles;

type DurationType = "1D" | "1W" | "1M";
type TabType = "Equity" | "Futures" | "Options";

interface Props {
  onTabChange: (tab: TabType) => void;
  onDurationChange: (d: DurationType) => void;
}

export default function Performancebuttons({
  onTabChange,
  onDurationChange,
}: Props) {
  const { isDark } = useTheme(); // ✅ theme untouched
  const { reloadKey } = useContext(LanguageContext); // ✅ language refresh

  const [selectedTab, setSelectedTab] = useState<TabType>("Equity");
  const [selectedDuration, setSelectedDuration] =
    useState<DurationType>("1D");

  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [showFromPicker, setShowFromPicker] = useState(false);
  const [showToPicker, setShowToPicker] = useState(false);

  // 📅 FORMAT DATE
  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleTab = (tab: TabType) => {
    setSelectedTab(tab);
    onTabChange(tab);
  };

  const handleDuration = (d: DurationType) => {
    setSelectedDuration(d);
    onDurationChange(d);
  };

  return (
    <View key={reloadKey}>
      {/* ================= TABS ================= */}
      <View style={styles.tabRow}>
        {(["Equity", "Futures", "Options"] as TabType[]).map((tab) => {
          const isActive = selectedTab === tab;

          return (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tabBtn,
                isActive && styles.tabActive,
                isActive &&
                  isDark && {
                    backgroundColor: "#121212",
                    borderColor: "rgba(255,255,255,0.2)",
                  },
              ]}
              onPress={() => handleTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  isActive && styles.tabTextActive,
                  isActive &&
                    isDark && {
                      color: "#FFFFFF",
                    },
                ]}
              >
                {tab === "Equity"
                  ? i18n.t("equity")
                  : tab === "Futures"
                  ? i18n.t("futures")
                  : i18n.t("options")}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* ================= FILTER ROW ================= */}
      <View style={styles.filterRow}>
        {/* LEFT : DURATION */}
        <View style={styles.leftRow}>
          {(["1D", "1W", "1M"] as DurationType[]).map((d) => {
            const isActive = selectedDuration === d;

            return (
              <TouchableOpacity
                key={d}
                style={[
                  styles.durationBtn,
                  isActive && styles.durationActive,
                  isActive &&
                    isDark && {
                      backgroundColor: "#121212",
                      borderColor: "rgba(255,255,255,0.2)",
                    },
                ]}
                onPress={() => handleDuration(d)}
              >
                <Text
                  style={[
                    styles.durationText,
                    isActive && styles.durationTextActive,
                    isActive &&
                      isDark && {
                        color: "#FFFFFF",
                      },
                  ]}
                >
                  {d}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* RIGHT : DATE FILTER */}
        <View style={styles.rightRow}>
          {/* FROM */}
          <TouchableOpacity
            style={[
              styles.dateBtn,
              isDark && {
                backgroundColor: "#121212",
                borderColor: "rgba(255,255,255,0.2)",
              },
            ]}
            onPress={() => setShowFromPicker(true)}
          >
            <Text
              style={[
                styles.dateText,
                isDark && { color: "#E5E7EB" },
              ]}
            >
              {fromDate ? formatDate(fromDate) : i18n.t("from")}
            </Text>
            <Ionicons
              name="calendar"
              size={16}
              color={isDark ? "#E5E7EB" : "#1E2A78"}
            />
          </TouchableOpacity>

          {/* TO */}
          <TouchableOpacity
            style={[
              styles.dateBtn,
              isDark && {
                backgroundColor: "#121212",
                borderColor: "rgba(255,255,255,0.2)",
              },
            ]}
            onPress={() => setShowToPicker(true)}
          >
            <Text
              style={[
                styles.dateText,
                isDark && { color: "#E5E7EB" },
              ]}
            >
              {toDate ? formatDate(toDate) : i18n.t("to")}
            </Text>
            <Ionicons
              name="calendar"
              size={16}
              color={isDark ? "#E5E7EB" : "#1E2A78"}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons
              name="funnel"
              size={22}
              color={isDark ? "#E5E7EB" : "#1E2A78"}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* ================= DATE PICKERS ================= */}
      {showFromPicker && (
        <DateTimePicker
          value={fromDate || new Date()}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={(event, date) => {
            setShowFromPicker(false);
            if (date) setFromDate(date);
          }}
        />
      )}

      {showToPicker && (
        <DateTimePicker
          value={toDate || new Date()}
          mode="date"
          minimumDate={fromDate || undefined}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={(event, date) => {
            setShowToPicker(false);
            if (date) setToDate(date);
          }}
        />
      )}
    </View>
  );
}


