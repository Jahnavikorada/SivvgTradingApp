import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
  Linking,
  ScrollView,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import { BarChart } from "react-native-chart-kit";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../context/ThemeContext";

import CommonHeader from "../components/CommonHeader";
import MetricCard from "../components/MetricCard";

const screenWidth = Dimensions.get("window").width;

export default function PortfolioScreen() {
  const navigation = useNavigation<any>();
  const { isDark } = useTheme();

  const [view, setView] = useState<"Weekly" | "Monthly">("Weekly");
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);

  const [selectedMember, setSelectedMember] = useState("Arjun");
  const [showMemberDropdown, setShowMemberDropdown] = useState(false);

  const months = ["January", "February", "March", "April", "May"];

  const members = [
    "Arjun","Meera","Rahul","Kiran","Varun",
    "Sneha","Ajay","Divya","Sameer","Neha",
  ];

  const memberChartData: Record<string, number[]> = {
    Arjun: [12, 14, 16, 18],
    Meera: [10, 13, 15, 17],
    Rahul: [14, 12, 18, 20],
    Kiran: [11, 14, 17, 19],
    Varun: [9, 12, 14, 16],
    Sneha: [13, 15, 18, 21],
    Ajay: [8, 10, 12, 14],
    Divya: [14, 16, 19, 22],
    Sameer: [12, 15, 17, 20],
    Neha: [11, 13, 16, 18],
  };

  const handleSummaryDownload = () => {
    Alert.alert("Download 20-Days Summary", "Choose file format", [
      { text: "PDF", onPress: () => Linking.openURL("https://your-api.com/summary/20days.pdf") },
      { text: "Excel", onPress: () => Linking.openURL("https://your-api.com/summary/20days.xlsx") },
      { text: "Word", onPress: () => Linking.openURL("https://your-api.com/summary/20days.docx") },
      { text: "Cancel", style: "cancel" },
    ]);
  };

  return (
    <LinearGradient
      colors={["#FF2E4C", "#1E2A78"]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={styles.gradient}
    >
      <CommonHeader title="Portfolio" navigation={navigation} />

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
          {/* MAIN CARD */}
          <View
            style={[
              styles.mainCard,
              { backgroundColor: isDark ? "#121212" : "#fff" },
            ]}
          >
            <View style={styles.row}>
              <MetricCard title="RETURN RATE" value="+18.5%" valueColor="#0DBB51" />
              <MetricCard title="DIVERSIFICATION SCORE" value="9.2/10" valueColor="#0DBB51" />
            </View>

            {/* MEMBER SELECTOR */}
            <View style={styles.userSelectorWrapper}>
              <LinearGradient
                colors={["#FF2E4C", "#1E2A78"]}
                style={styles.userGradientBorder}
              >
                <TouchableOpacity
                  style={[
                    styles.userInner,
                    { backgroundColor: isDark ? "#121212" : "#F6DCE4" },
                  ]}
                  onPress={() => setShowMemberDropdown(!showMemberDropdown)}
                >
                  <Ionicons
                    name="person"
                    size={18}
                    color={isDark ? "#fff" : "#1E2A78"}
                  />
                  <Text
                    style={[
                      styles.userName,
                      { color: isDark ? "#fff" : "#1E2A78" },
                    ]}
                  >
                    {selectedMember}
                  </Text>
                  <Ionicons
                    name="chevron-down"
                    size={18}
                    color={isDark ? "#fff" : "#1E2A78"}
                  />
                </TouchableOpacity>
              </LinearGradient>

              {showMemberDropdown && (
                <View
                  style={[
                    styles.memberDropdown,
                    { backgroundColor: isDark ? "#121212" : "#fff" },
                  ]}
                >
                  {members.map((name) => (
                    <TouchableOpacity
                      key={name}
                      style={styles.memberItem}
                      onPress={() => {
                        setSelectedMember(name);
                        setShowMemberDropdown(false);
                      }}
                    >
                      <Text
                        style={[
                          styles.memberText,
                          { color: isDark ? "#fff" : "#1E2A78" },
                        ]}
                      >
                        {name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>

            {/* TOGGLES */}
            <View style={styles.toggleRow}>
              <TouchableOpacity
                style={[styles.toggleBtn, view === "Weekly" && styles.activeToggle]}
                onPress={() => setView("Weekly")}
              >
                <Text
                  style={[
                    styles.toggleText,
                    { color: view === "Weekly" ? "#fff" : isDark ? "#fff" : "#000" },
                  ]}
                >
                  Weekly View
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.toggleBtn, view === "Monthly" && styles.activeToggle]}
                onPress={() => setView("Monthly")}
              >
                <Text
                  style={[
                    styles.toggleText,
                    { color: view === "Monthly" ? "#fff" : isDark ? "#fff" : "#000" },
                  ]}
                >
                  Monthly View
                </Text>
              </TouchableOpacity>

              <View style={styles.monthWrapper}>
                <TouchableOpacity
                  style={[
                    styles.monthBox,
                    { borderColor: isDark ? "#fff" : "#1E2A78" },
                  ]}
                  onPress={() => setShowMonthDropdown(!showMonthDropdown)}
                >
                  <Text
                    style={[
                      styles.monthText,
                      { color: isDark ? "#fff" : "#1E2A78" },
                    ]}
                  >
                    {selectedMonth}
                  </Text>
                  <Ionicons
                    name="chevron-down"
                    size={14}
                    color={isDark ? "#fff" : "#1E2A78"}
                  />
                </TouchableOpacity>

                {showMonthDropdown && (
                  <View
                    style={[
                      styles.monthDropdown,
                      { backgroundColor: isDark ? "#121212" : "#fff" },
                    ]}
                  >
                    {months.map((m) => (
                      <TouchableOpacity
                        key={m}
                        style={styles.monthItem}
                        onPress={() => {
                          setSelectedMonth(m);
                          setShowMonthDropdown(false);
                        }}
                      >
                        <Text
                          style={{ color: isDark ? "#fff" : "#1E2A78" }}
                        >
                          {m}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
            </View>
          </View>

          {/* CHART – already dark */}
          <View style={styles.chartCard}>
            <Text style={styles.chartTitle}>20 Days Performance Overview</Text>

            <BarChart
              data={{
                labels: ["WEEK 1", "WEEK 2", "WEEK 3", "WEEK 4"],
                datasets: [{ data: memberChartData[selectedMember] }],
              }}
              width={screenWidth - 72}
              height={200}
              fromZero
              withInnerLines={false}
              showValuesOnTopOfBars
              yAxisLabel=""
              yAxisSuffix="%"
              chartConfig={{
                backgroundGradientFrom: "#021b2d",
                backgroundGradientTo: "#021b2d",
                decimalPlaces: 0,
                barPercentage: 0.55,
                color: () => "#19D796",
                labelColor: () => "#FFFFFF",
              }}
              style={{ borderRadius: 18 }}
            />
          </View>

          {/* DOWNLOAD */}
          <TouchableOpacity style={styles.summaryBtn} onPress={handleSummaryDownload}>
            <Text style={styles.summaryText}>20-Days Summary</Text>
            <Ionicons name="download-outline" size={18} color="#fff" />
          </TouchableOpacity>

          {/* BOTTOM CARDS (unchanged gradients) */}
          <View style={styles.rowBottom}>
            <BottomCard title="Capital Amount" value="₹1,00,000" />
            <BottomCard title="Total P&L" value="₹65,000" valueColor="#0DBB51" />
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

/* ---------------- BOTTOM CARD ---------------- */

function BottomCard({ title, value, valueColor = "#000" }: any) {
  return (
    <LinearGradient colors={["#FF2E4C", "#1E2A78"]} style={styles.bottomCardBorder}>
      <LinearGradient colors={["#fcbdcb", "#bbc8ff"]} style={styles.bottomCardInner}>
        <Text style={styles.bottomTitle}>{title}</Text>
        <Text style={[styles.bottomValue, { color: valueColor }]}>{value}</Text>
      </LinearGradient>
    </LinearGradient>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  scrollContent: { paddingBottom: 120 },

  gradient: { flex: 1 },

  card: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
    padding: 15,
    paddingHorizontal: 10,
  },

  mainCard: {
    borderRadius: 30,
    padding: 20,
    elevation: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  userSelectorWrapper: {
    alignItems: "center",
    marginTop: 18,
    zIndex: 20,
  },

  userGradientBorder: {
    width: "85%",
    padding: 1.5,
    borderRadius: 18,
  },

  userInner: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    paddingHorizontal: 18,
    height: 42,
  },

  userName: {
    flex: 1,
    marginLeft: 10,
    fontWeight: "700",
  },

  memberDropdown: {
    position: "absolute",
    top: 52,
    width: "85%",
    borderRadius: 16,
    elevation: 15,
    zIndex: 30,
  },

  memberItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },

  memberText: {
    fontWeight: "600",
  },

  toggleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  toggleBtn: {
    width: "28%",
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
  },

  activeToggle: {
    backgroundColor: "#1E2A78",
    borderColor: "#1E2A78",
  },

  toggleText: {
    fontSize: 12,
    fontWeight: "600",
  },

  monthWrapper: {
    width: "30%",
  },

  monthBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    padding: 8,
  },

  monthText: {
    fontSize: 12,
    fontWeight: "600",
  },

  monthDropdown: {
    position: "absolute",
    top: 40,
    width: "100%",
    elevation: 15,
    zIndex: 30,
  },

  monthItem: {
    padding: 8,
  },

  chartCard: {
    backgroundColor: "#021b2d",
    borderRadius: 20,
    padding: 15,
    marginTop: 20,
  },

  chartTitle: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
    marginBottom: 10,
  },

  summaryBtn: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 16,
    backgroundColor: "#1E2A78",
    paddingVertical: 10,
    paddingHorizontal: 26,
    borderRadius: 15,
  },

  summaryText: {
    color: "#fff",
    marginRight: 6,
    fontWeight: "600",
  },

  rowBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
  },

  bottomCardBorder: {
    width: "48%",
    padding: 1.5,
    borderRadius: 12,
  },

  bottomCardInner: {
    borderRadius: 10,
    paddingVertical: 18,
    alignItems: "center",
  },

  bottomTitle: {
    fontWeight: "600",
    color: "#1E2A78",
  },

  bottomValue: {
    fontSize: 20,
    fontWeight: "800",
    marginTop: 6,
  },
});
