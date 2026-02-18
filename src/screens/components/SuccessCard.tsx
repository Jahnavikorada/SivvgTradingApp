import React, { useContext } from "react";
import { View, Text, Platform} from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import i18n from "../../i18n";
import { androidStyles } from "./SuccessCard.android.styles";
import { iosStyles } from "./SuccessCard.ios.styles";

const styles = Platform.OS === "ios"? iosStyles : androidStyles;

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
  const { isDark } = useTheme(); 
  const { reloadKey } = useContext(LanguageContext); 

  const calculateRate = (obj: TipsObj) => {
    if (!obj || obj.total === 0) return 0;
    return Math.round((obj.passed / obj.total) * 100);
  };

  const chartData = [
    {
      label: i18n.t("one_day"),
      value: calculateRate(tipsData.oneDay),
      color: "#0052cc",
    },
    {
      label: i18n.t("one_week"),
      value: calculateRate(tipsData.oneWeek),
      color: "#198cff",
    },
    {
      label: i18n.t("one_month"),
      value: calculateRate(tipsData.oneMonth),
      color: "#3ec7d1",
    },
  ];

  return (
    <View key={reloadKey} style={[styles.card, isDark && styles.cardDark]}>
      {/* TITLE BAR */}
      <View style={[styles.textbg, isDark && styles.textbgDark]}>
        <Text style={styles.title}>{title}</Text>
      </View>

      {/* CHART + LEGEND */}
      <View style={styles.chartWrapper}>
        {/* CHART */}
        <View style={styles.chartRow}>
          {chartData.map((item, index) => (
            <View key={index} style={styles.barContainer}>
              <Text style={[styles.valueText, isDark && styles.textDark]}>
                {item.value}%
              </Text>

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
              <Text style={[styles.legendText, isDark && styles.textDark]}>
                {item.label}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <Text style={[styles.footer, isDark && styles.textDark]}>
        {i18n.t("recommendations_growth")}
      </Text>
    </View>
  );
}

