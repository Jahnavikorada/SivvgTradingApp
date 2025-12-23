import React from "react";
import { View, Text, StyleSheet } from "react-native";

type TipsObj = {
  total: number;
  passed: number;
  failed: number;
};

interface Props {
  title: string;
  tipsData: {
    oneDay: TipsObj;
    oneWeek: TipsObj;
    oneMonth: TipsObj;
  };
}

export default function SuccessCard({ title, tipsData }: Props) {

  const calculateRate = (obj: TipsObj) => {
    if (!obj || obj.total === 0) return 0;
    return Math.round((obj.passed / obj.total) * 100);
  };

  const chartData = [
    { label: "1 Day", value: calculateRate(tipsData.oneDay), color: "#0052cc" },
    { label: "1 Week", value: calculateRate(tipsData.oneWeek), color: "#198cff" },
    { label: "1 Month", value: calculateRate(tipsData.oneMonth), color: "#3ec7d1" },
  ];

  return (
    <View style={styles.card}>
      {/* TITLE BAR */}
      <View style={styles.textbg}>
        <Text style={styles.title}>{title}</Text>
      </View>

      {/* CHART + LEGEND */}
      <View style={styles.chartWrapper}>

        {/* CHART */}
        <View style={styles.chartRow}>
          {chartData.map((item, index) => (
            <View key={index} style={styles.barContainer}>
              <Text style={styles.valueText}>{item.value}%</Text>
              <View
                style={[
                  styles.bar,
                  {
                    height: Math.min(item.value * 1.2, 110),
                    backgroundColor: item.color,
                  },
                ]}
              />
            </View>
          ))}
        </View>

        {/* LEGEND */}
        <View style={styles.legend}>
          {chartData.map((item, index) => (
            <View key={index} style={styles.legendRow}>
              <View
                style={[styles.colorDot, { backgroundColor: item.color }]}
              />
              <Text style={styles.legendText}>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>

      <Text style={styles.footer}>Recommendations Growth</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderBottomLeftRadius: 20,
    width: "82%",
    alignSelf: "center",
    marginTop: 10,
    borderWidth: 0.7,
    borderColor: "#7fa3ff",
    overflow: "hidden",
    paddingBottom: 10,
  },

  textbg: {
    backgroundColor: "#1E2A78",
    width: "100%",
    paddingVertical: 10,
    alignItems: "center",
  },

  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  chartWrapper: {
    flexDirection: "row",
    paddingHorizontal: 25,
    paddingTop: 30,
    justifyContent: "space-between",
  },

  chartRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: 110,
    gap: 20,
    marginLeft: 10,
  },

  barContainer: {
    alignItems: "center",
  },

  valueText: {
    color: "#1E2A78",
    marginBottom: 4,
    fontSize: 11,
    fontWeight: "bold",
  },

  bar: {
    width: 30,
  },

  legend: {
    justifyContent: "center",
    marginRight: 10,
  },

  legendRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  colorDot: {
    width: 15,
    height: 13,
    borderRadius: 3,
    marginRight: 5,
  },

  legendText: {
    color: "#1E2A78",
    fontSize: 12,
    fontWeight: "500",
  },

  footer: {
    textAlign: "center",
    color: "#1E2A78",
    marginTop: 12,
    fontSize: 13,
    fontWeight: "600",
  },
});
