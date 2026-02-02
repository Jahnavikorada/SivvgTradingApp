import React, { useState, useContext } from "react";
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

import i18n from "../../i18n";
import { LanguageContext } from "../../context/LanguageContext";

const screenWidth = Dimensions.get("window").width;

export default function PortfolioScreen() {
  const navigation = useNavigation<any>();
  const { isDark } = useTheme(); // 
  const { reloadKey } = useContext(LanguageContext); 

  const [view, setView] = useState<"Weekly" | "Monthly">("Weekly");

  // ✅ logic keys remain English
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
    Alert.alert(
      i18n.t("download_summary_title"),
      i18n.t("choose_file_format"),
      [
        { text: "PDF", onPress: () => Linking.openURL("https://your-api.com/summary/20days.pdf") },
        { text: "Excel", onPress: () => Linking.openURL("https://your-api.com/summary/20days.xlsx") },
        { text: "Word", onPress: () => Linking.openURL("https://your-api.com/summary/20days.docx") },
        { text: i18n.t("cancel"), style: "cancel" },
      ]
    );
  };

  // ✅ translators (logic safe)
  const getMonthLabel = (m: string) => i18n.t(`month_${m.toLowerCase()}`);
  const getMemberLabel = (m: string) => i18n.t(`member_${m.toLowerCase()}`);

  return (
    <LinearGradient
      colors={["#FF2E4C", "#1E2A78"]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={styles.gradient}
    >
      <CommonHeader
        title={i18n.t("portfolio")}
        navigation={navigation}
      />

      <View
        key={reloadKey}
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
            // style={[
            //   styles.mainCard,
            //   { backgroundColor: isDark ? "#121212" : "#fff" },
            // ]}
          >
            <View style={styles.row}>
              <MetricCard
                title={i18n.t("return_rate")}
                value="+18.5%"
                valueColor="#0DBB51"
              />
              <MetricCard
                title={i18n.t("diversification_score")}
                value="9.2/10"
                valueColor="#0DBB51"
              />
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
                    size={20}
                    color={isDark ? "#fff" : "#1E2A78"}
                  />

                  <Text
                    style={[
                      styles.userName,
                      { color: isDark ? "#fff" : "#1E2A78" },
                    ]}
                  >
                    {getMemberLabel(selectedMember)}
                  </Text>

                  <Ionicons
                    name="chevron-down"
                    size={20}
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
                        {getMemberLabel(name)}
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
                    { color: view === "Weekly" ? "#fff" : isDark ? "#fff" : "#1e2a78" },
                  ]}
                >
                  {i18n.t("weekly_view")}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.toggleBtn, view === "Monthly" && styles.activeToggle]}
                onPress={() => setView("Monthly")}
              >
                <Text
                  style={[
                    styles.toggleText,
                    { color: view === "Monthly" ? "#fff" : isDark ? "#fff" : "#1e2a78" },
                  ]}
                >
                  {i18n.t("monthly_view")}
                </Text>
              </TouchableOpacity>

              {/* MONTH DROPDOWN */}
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
                    {getMonthLabel(selectedMonth)}
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
                        <Text style={{ color: isDark ? "#fff" : "#1E2A78" }}>
                          {getMonthLabel(m)}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
            </View>
          </View>

          {/* CHART */}
          <View style={styles.chartCard}>
            <Text style={styles.chartTitle}>
              {i18n.t("performance_overview")}
            </Text>

            <BarChart
              data={{
                labels: [
                  i18n.t("week_1"),
                  i18n.t("week_2"),
                  i18n.t("week_3"),
                  i18n.t("week_4"),
                ],
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
            <Text style={styles.summaryText}>
              {i18n.t("summary_20days")}
            </Text>
            <Ionicons name="download-outline" size={18} color="#fff" />
          </TouchableOpacity>

          {/* BOTTOM CARDS */}
          <View style={styles.rowBottom}>
            <BottomCard
              title={i18n.t("capital_amount")}
              value="₹1,00,000"
            />
            <BottomCard
              title={i18n.t("total_pl")}
              value="₹65,000"
              valueColor="#0DBB51"
            />
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

/* ---------------- STYLES (UNCHANGED ✅) ---------------- */

const styles = StyleSheet.create({
  scrollContent: { paddingBottom: 120 },
  gradient: { flex: 1 },

  card: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 10,
    padding: 15,
    paddingHorizontal: 10,
  },

  // mainCard: {
  //   borderRadius: 30,
  //   padding: 20,
  //   elevation: 10,
  // },

  row: { flexDirection: "row", justifyContent: "space-between" },

  userSelectorWrapper: { 
    alignItems: "center",
    marginTop: 34,
    zIndex: 20 ,
    marginBottom:10
    },

  userGradientBorder: { 
    width: "75%", 
    padding: 2.3, 
    borderRadius: 18 
  },

  userInner: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    paddingHorizontal: 22,
    height: 40,
  },

  userName: { 
    flex: 1, 
    marginLeft: 16, 
    fontWeight: "700",
    fontSize:18,

   },
  //dropdown card
  memberDropdown: {
    position: "absolute",
    top: 52,
    width: "60%",
    borderRadius: 8,
    elevation: 15,
    zIndex: 30,
     
  },

  memberItem: { 
    width:"100%",
    padding: 12, 
    borderBottomWidth: 0.2, 
    borderBottomColor: "#828282" 
  },

  memberText: { 
    fontWeight: "500",
    alignSelf: "center",
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
    borderWidth: 2,
    borderColor: "#1e2a78",
    alignItems: "center",
    marginBottom:10
  },

  activeToggle: { 
    backgroundColor: "#1E2A78", 
    borderColor: "#1E2A78" 
  },

  toggleText: { 
    fontSize: 14, 
    fontWeight: "600", 
  },

  monthWrapper: { 
    width: "30%" 
  },

  monthBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    padding: 8,
  },

  monthText: { fontSize: 14, fontWeight: "600" },

  monthDropdown: { position: "absolute", top: 40, width: "100%", elevation: 15, zIndex: 30 },

  monthItem: { padding: 8 },

  chartCard: {
    backgroundColor: "#021b2d",
    borderRadius: 0,
    padding: 15,
    marginTop: 20,
  },

  chartTitle: { color: "#fff", textAlign: "center", fontWeight: "700", marginBottom: 10 },

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

  summaryText: { color: "#fff", marginRight: 6, fontWeight: "600" },

  rowBottom: { flexDirection: "row", justifyContent: "space-between", marginTop: 14 },

  bottomCardBorder: { width: "48%", padding: 1.5, borderRadius: 12 },

  bottomCardInner: { borderRadius: 10, paddingVertical: 18, alignItems: "center" },

  bottomTitle: { fontWeight: "600", color: "#1E2A78" },

  bottomValue: { fontSize: 20, fontWeight: "800", marginTop: 6 },
});
