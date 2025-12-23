import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

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
  const [selectedTab, setSelectedTab] = useState<TabType>("Equity");
  const [selectedDuration, setSelectedDuration] =
    useState<DurationType>("1D");

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
      {/* ✅ EQUITY / FUTURES / OPTIONS BUTTONS */}
      <View style={styles.tabRow}>
        {["Equity", "Futures", "Options"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabBtn,
              selectedTab === tab && styles.tabActive,
            ]}
            onPress={() => handleTab(tab as TabType)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.tabTextActive,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* ✅ 1D / 1W / 1M + DATE FILTER */}
      <View style={styles.filterRow}>
        {/* LEFT */}
        <View style={styles.leftRow}>
          {["1D", "1W", "1M"].map((d) => (
            <TouchableOpacity
              key={d}
              style={[
                styles.durationBtn,
                selectedDuration === d && styles.durationActive,
              ]}
              onPress={() => handleDuration(d as DurationType)}
            >
              <Text
                style={[
                  styles.durationText,
                  selectedDuration === d && styles.durationTextActive,
                ]}
              >
                {d}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* RIGHT */}
        <View style={styles.rightRow}>
          <TouchableOpacity style={styles.dateBtn}>
            <Text style={styles.dateText}>From</Text>
            <Ionicons name="calendar" size={16} color="#1E2A78" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.dateBtn}>
            <Text style={styles.dateText}>To</Text>
            <Ionicons name="calendar" size={16} color="#1E2A78" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="funnel" size={20} color="#1E2A78" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
    marginTop: 15,
  },

  tabBtn: {
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 8,
    backgroundColor: "#1E2A78",
  },

  tabActive: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#1E2A78",
  },

  tabText: {
    color: "white",
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
    gap: 8,
    marginLeft: 4,
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
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#1E2A78",
  },

  durationText: {
    color: "white",
    fontWeight: "600",
  },

  durationTextActive: {
    color: "#1E2A78",
  },

  rightRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
     marginRight: 4,
  },

  dateBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1E2A78",
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 36,
    width: 100, 
    justifyContent: "space-between",
  },

  dateText: {
    color: "#1E2A78",
    fontWeight: "500",
  },
});
