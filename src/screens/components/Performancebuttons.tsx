import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useTheme } from "../../context/ThemeContext";

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
  const { isDark } = useTheme();

  const [selectedTab, setSelectedTab] = useState<TabType>("Equity");
  const [selectedDuration, setSelectedDuration] =
    useState<DurationType>("1D");

  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [showFromPicker, setShowFromPicker] = useState(false);
  const [showToPicker, setShowToPicker] = useState(false);

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
    <View>
      {/* ================= TABS ================= */}
      <View style={styles.tabRow}>
        {["Equity", "Futures", "Options"].map((tab) => {
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
              onPress={() => handleTab(tab as TabType)}
            >
              <Text
                style={[
                  styles.tabText,
                  isActive && styles.tabTextActive,
                  isActive &&
                    isDark && {
                      color: "#FFFFFF", // ✅ FIXED (Equity heading)
                    },
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* ================= FILTER ROW ================= */}
      <View style={styles.filterRow}>
        {/* LEFT : DURATION */}
        <View style={styles.leftRow}>
          {["1D", "1W", "1M"].map((d) => {
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
                onPress={() => handleDuration(d as DurationType)}
              >
                <Text
                  style={[
                    styles.durationText,
                    isActive && styles.durationTextActive,
                    isActive &&
                      isDark && {
                        color: "#FFFFFF", // ✅ FIXED (1D text)
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
              {fromDate ? formatDate(fromDate) : "From"}
            </Text>
            <Ionicons
              name="calendar"
              size={16}
              color={isDark ? "#E5E7EB" : "#1E2A78"}
            />
          </TouchableOpacity>

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
              {toDate ? formatDate(toDate) : "To"}
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
              size={20}
              color={isDark ? "#E5E7EB" : "#1E2A78"}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* DATE PICKERS */}
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

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
    marginBottom: 15,
  },

  tabBtn: {
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 8,
    backgroundColor: "#1E2A78",
  },

  tabActive: {
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderColor: "#1E2A78",
  },

  tabText: {
    color: "#FFF",
    fontWeight: "600",
  },

  tabTextActive: {
    color: "#1E2A78",
  },

  filterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  leftRow: {
    flexDirection: "row",
    gap: 6,
    marginLeft: 8,
    paddingRight: 6,
  },

  durationBtn: {
    width: 45,
    height: 36,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E2A78",
  },

  durationActive: {
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderColor: "#1E2A78",
  },

  durationText: {
    color: "#FFF",
    fontWeight: "600",
  },

  durationTextActive: {
    color: "#1E2A78",
  },

  rightRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginRight: 6,
  },

  dateBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 120,
    height: 36,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#1E2A78",
  },

  dateText: {
    color: "#1E2A78",
    fontWeight: "500",
  },
});
