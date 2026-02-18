import React from "react";
import { View, Text, TouchableOpacity, Linking, Platform } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { useTheme } from "../../context/ThemeContext";
import { androidStyles } from "./TipsCard.android.styles";
import { iosStyles } from "./TipsCard.ios.styles";

const styles = Platform.OS === "ios"? iosStyles : androidStyles;

interface Props {
  symbol: string;
  t1: number;
  t2: number;
  t3: number;
  achievedCount?: number;
  isBuy?: boolean;
}

export default function TipsCard({
  symbol,
  t1,
  t2,
  t3,
  achievedCount = 1,
  isBuy = true,
}: Props) {
  const { isDark } = useTheme();

  const targets = [t1, t2, t3];

  const progressPercent = Math.min(
    (achievedCount / targets.length) * 100,
    100
  );

  const openYahoo = () =>
    Linking.openURL(`https://finance.yahoo.com/quote/${symbol}.NS`);

  const openNSE = () =>
    Linking.openURL(
      `https://www.nseindia.com/get-quotes/equity?symbol=${symbol}`
    );

  return (
    <View style={[styles.card, isDark && styles.cardDark]}>
      {/* 🔷 HEADER */}
      <View style={styles.topRow}>
        <View style={styles.symbolStrip}>
          <Text style={styles.symbolText}>{symbol}</Text>
          <View style={styles.graphIcon}>
            <Ionicons name="trending-up" size={18} color="#fff" />
          </View>
        </View>

        <TouchableOpacity
          style={[
            styles.buyBtn,
            { backgroundColor: isBuy ? "#3E8E5B" : "#E53935" },
          ]}
        >
          <Text style={styles.buyText}>{isBuy ? "BUY" : "SELL"}</Text>
        </TouchableOpacity>
      </View>

      {/* 🎯 TARGET LABELS */}
      <View style={styles.targetsRow}>
        {["T1", "T2", "T3"].map((label, index) => (
          <View
            key={label}
            style={[
              styles.targetBox,
              achievedCount > index && styles.targetBoxActive,
              isDark && styles.targetBoxDark,
              achievedCount > index && isDark && styles.targetBoxActiveDark,
            ]}
          >
            <Text style={styles.targetLabel}>{label}</Text>
          </View>
        ))}
      </View>

      {/* 🎯 TARGET VALUES */}
      <View style={styles.valuesRow}>
        {targets.map((value, index) => (
          <Text
            key={index}
            style={[
              styles.targetValue,
              isDark && styles.targetValueDark,
            ]}
          >
            {value}
          </Text>
        ))}
      </View>

      {/* 📊 PROGRESS BAR */}
      <View
        style={[
          styles.progressContainer,
          isDark && styles.progressContainerDark,
        ]}
      >
        <View
          style={[
            styles.progressFill,
            { width: `${progressPercent}%` },
          ]}
        />

        {progressPercent > 0 && (
          <View
            style={[
              styles.progressThumb,
              isDark && styles.progressThumbDark,
              { left: `${progressPercent}%` },
            ]}
          >
            <Feather name="check" size={16} color="#3E8E5B" />
          </View>
        )}
      </View>

      {/* 🔗 FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.yahoo} onPress={openYahoo}>
          Yahoo!
        </Text>
        <Text style={[styles.divider, isDark && styles.dividerDark]}>
          {" "}
          |{" "}
        </Text>
        <Text style={styles.nse} onPress={openNSE}>
          NSE
        </Text>
      </View>
    </View>
  );
}


