import React, { useEffect, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Dimensions,
  Platform,
  PixelRatio,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import Svg, {
  Defs,
  LinearGradient as SvgLinearGradient,
  Stop,
  Circle,
} from "react-native-svg";
import i18n from "../i18n";
import { useTheme } from "../context/ThemeContext";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

/* ------------------ RESPONSIVE UTILS ------------------ */
const { width: SW, height: SH } = Dimensions.get("window");
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = (size: number) => (SW / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (SH / guidelineBaseHeight) * size;

const normalize = (size: number) => {
  const newSize = scale(size);
  return Platform.OS === "ios"
    ? Math.round(PixelRatio.roundToNearestPixel(newSize))
    : Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
};

const svgSize = Math.min(SW * 0.41, 200);
const strokeWidth = normalize(14);

export default function WelcomeOfferScreen({ navigation }: any) {
  const { isDark } = useTheme();
  const days = 20;

  /* ------------------ THEME COLORS ------------------ */
  const bgGradient = isDark
    ? ["#ff2e4c", "#1e2a78"]
    : ["#FF2E4C", "#1E2A78"];

  const textColor = "#FFFFFF";

  const rotateAnim = useRef(new Animated.Value(0)).current;
  const shineAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 6000,
        useNativeDriver: true,
      })
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(shineAnim, {
          toValue: 1,
          duration: 1800,
          useNativeDriver: true,
        }),
        Animated.timing(shineAnim, {
          toValue: 0,
          duration: 1800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const shineOpacity = shineAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.2, 0.9],
  });

  return (
    <LinearGradient colors={bgGradient} style={styles.container}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.content}>
          {/* LOGO */}
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          {/* TITLE */}
          <Text style={[styles.title, { color: textColor }]}>
            {i18n.t("unlock_title")}
          </Text>

          {/* PROGRESS */}
          <View style={styles.progressWrap}>
            <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
              <Svg width={svgSize} height={svgSize}>
                <Defs>
                  <SvgLinearGradient
                    id="ringColor"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <Stop offset="0%" stopColor="#FF2E4C" />
                    <Stop offset="50%" stopColor="#FFFFFF" />
                    <Stop offset="100%" stopColor="#1E2A78" />
                  </SvgLinearGradient>

                  <SvgLinearGradient
                    id="shine"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <Stop offset="0%" stopColor="white" stopOpacity="0.9" />
                    <Stop offset="100%" stopColor="white" stopOpacity="0" />
                  </SvgLinearGradient>
                </Defs>

                <Circle
                  cx={svgSize / 2}
                  cy={svgSize / 2}
                  r={(svgSize - strokeWidth) / 2}
                  stroke="url(#ringColor)"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                />

                <AnimatedCircle
                  cx={svgSize / 2}
                  cy={svgSize / 2}
                  r={(svgSize - strokeWidth) / 2}
                  stroke="url(#shine)"
                  strokeWidth={strokeWidth / 2}
                  opacity={shineOpacity}
                  fill="transparent"
                />
              </Svg>
            </Animated.View>

            <View style={styles.progressCenter}>
              <Text style={[styles.progressNumber, { color: textColor }]}>
                {days}
              </Text>
            </View>
          </View>

          {/* SUBTITLE */}
          <Text style={[styles.subtitle, { color: textColor }]}>
            {i18n.t("unlock_subtitle")}
          </Text>

          {/* BUTTON */}
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => navigation.navigate("Login")}
          >
            <LinearGradient
              colors={["#FF2E4C", "#1E2A78"]}
              style={styles.btnBorder}
            >
              <View
                style={[
                  styles.btnInner,
                  { backgroundColor: isDark ? "#1a1a1a" : "#FFFFFF" },
                ]}
              >
                <MaskedView
                  maskElement={
                    <Text style={styles.btnText}>
                      {i18n.t("start_journey")}
                    </Text>
                  }
                >
                  <LinearGradient
                    colors={
                      isDark
                        ? ["#FFFFFF", "#FFFFFF"]
                        : ["#FF2E4C", "#1E2A78"]
                    }
                  >
                    <Text style={[styles.btnText, { opacity: 0 }]}>
                      {i18n.t("start_journey")}
                    </Text>
                  </LinearGradient>
                </MaskedView>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

/* ------------------ STYLES ------------------ */
const styles = StyleSheet.create({
  container: { flex: 1 },
  safe: { flex: 1 },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: normalize(160),
    height: normalize(160),
    marginBottom: verticalScale(16),
  },
  title: {
    fontSize: normalize(25),
    fontWeight: "600",
    marginBottom: verticalScale(35),
    textAlign: "center",
  },
  progressWrap: {
    width: svgSize,
    height: svgSize,
    marginBottom: verticalScale(30),
    alignItems: "center",
    justifyContent: "center",
  },
  progressCenter: {
    position: "absolute",
  },
  progressNumber: {
    fontSize: normalize(74),
    fontWeight: "700",
  },
  subtitle: {
    fontSize: normalize(22),
    fontWeight: "500",
    textAlign: "center",
    marginBottom: verticalScale(55),
  },
  btnBorder: {
    padding: 4,
    borderRadius: 40,
  },
  btnInner: {
    paddingHorizontal: 38,
    paddingVertical: 14,
    borderRadius: 37,
    alignItems: "center",
  },
  btnText: {
    fontSize: normalize(18),
    fontWeight: "800",
    letterSpacing: 1,
  },
});
