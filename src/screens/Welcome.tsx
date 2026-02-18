import React, { useEffect, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
  Platform,
  PixelRatio,
} from "react-native";

import LinearGradient from "react-native-linear-gradient";
import Svg, {
  Defs,
  LinearGradient as SvgGradient,
  Stop,
  Circle,
  Text as SvgText,
} from "react-native-svg";
import i18n from "../i18n";
import { useTheme } from "../context/ThemeContext";
import { androidStyles } from "./Welcome.android.styles";
import { iosStyles } from "./Welcome.ios.styles";

const styles = Platform.OS === "ios" ? iosStyles : androidStyles;

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const { width: SW } = Dimensions.get("window");

const scale = (size: number) => (SW / 375) * size;
const normalize = (size: number) =>
  Math.round(PixelRatio.roundToNearestPixel(scale(size)));

const svgSize = Math.min(SW * 0.41, 200);
const strokeWidth = normalize(14);

export default function Welcome({ navigation }: any) {
  const { isDark } = useTheme();
  const days = 20;

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
  }, );

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  const shineOpacity = shineAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.2, 0.9],
  });
  const buttonText = i18n.t("start_journey");

  return (
    <LinearGradient colors={["#FF2E4C", "#1E2A78"]} style={styles.container}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.content}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={{
              width: normalize(160),
              height: normalize(160),
              ...styles.logo,
            }}
            resizeMode="contain"
          />
          <Text
            style={[
              styles.title,
              { fontSize: normalize(25), color: "#FFF" },
            ]}
          >
            {i18n.t("unlock_title")}
          </Text>
          <View
            style={[
              styles.progressWrap,
              { width: svgSize, height: svgSize },
            ]}
          >
            <Animated.View style={{ transform: [{ rotate }] }}>
              <Svg width={svgSize} height={svgSize}>
                <Defs>
                  <SvgGradient id="ring" x1="0%" y1="0%" x2="100%" y2="100%">
                    <Stop offset="0%" stopColor="#FF2E4C" />
                    <Stop offset="50%" stopColor="#FFF" />
                    <Stop offset="100%" stopColor="#1E2A78" />
                  </SvgGradient>

                  <SvgGradient id="shine" x1="0%" y1="0%" x2="100%" y2="100%">
                    <Stop offset="0%" stopColor="white" stopOpacity="0.9" />
                    <Stop offset="100%" stopColor="white" stopOpacity="0" />
                  </SvgGradient>
                </Defs>

                <Circle
                  cx={svgSize / 2}
                  cy={svgSize / 2}
                  r={(svgSize - strokeWidth) / 2}
                  stroke="url(#ring)"
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
              <Text
                style={[
                  styles.progressNumber,
                  { fontSize: normalize(74), color: "#FFF" },
                ]}
              >
                {days}
              </Text>
            </View>
          </View>
          <Text
            style={[
              styles.subtitle,
              { fontSize: normalize(22), color: "#FFF" },
            ]}
          >
            {i18n.t("unlock_subtitle")}
          </Text>
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
                  { backgroundColor: isDark ? "#1a1a1a" : "#FFF" },
                ]}
              >
                <Svg height={normalize(30)} width={normalize(220)}>
                  <Defs>
                    <SvgGradient id="btnTextGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <Stop offset="0%" stopColor="#FF2E4C" />
                      <Stop offset="100%" stopColor="#1E2A78" />
                    </SvgGradient>
                  </Defs>

                  <SvgText
                    x="50%"
                    y="70%"
                    fill="url(#btnTextGrad)"
                    fontSize={normalize(18)}
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    {buttonText}
                  </SvgText>
                </Svg>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
