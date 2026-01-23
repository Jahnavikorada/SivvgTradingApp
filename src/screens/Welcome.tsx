// import React, { useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
// } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
// import i18n from "../i18n";

// export default function WelcomeOfferScreen({ navigation }:any) {
//       // ------------------ AUTO SPLASH NAVIGATION ------------------
//   // useEffect(() => {
//   //   const timer = setTimeout(() => {
//   //     navigation.replace("Login"); // Replace prevents coming back
//   //   }, 3000); // 3 seconds splash delay

//   //   return () => clearTimeout(timer); // Cleanup
//   // }, []);
  

//   return (
//     <LinearGradient
//       colors={["#FF2E4C", "#1E2A78"]}
//       style={styles.container}
//     >
//       {/* LOGO */}
//       <Image
//         source={require("../../assets/images/logo.png")} // Replace with your logo
//         style={styles.logo}
//         resizeMode="contain"
//       />

//       {/* HEADING */}
//       {/* <Text style={styles.heading}>Unlock Your Potential</Text> */}
//       <Text style={styles.heading}>{i18n.t("Unlock Your Potential")}</Text>


//       {/* CIRCLE */}
//       <LinearGradient
//         colors={["#FF5668", "#5B67E1"]}
//         style={styles.outerCircle}
//       >
//         <View style={styles.innerCircle}>
//           <Text style={styles.circleText}>20</Text>
//         </View>
//       </LinearGradient>

//       {/* SUB TEXT */}
//       <Text style={styles.subText}>
//         20Days of Smart Portfolio{"\n"}Tracking
//       </Text>

//       {/* BUTTON */}
//       <TouchableOpacity
//         style={styles.buttonContainer}
//         onPress={() => navigation.navigate("Login")}
//       >
//         <LinearGradient
//           colors={["#FF2E4C", "#FFFFFF"]}
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 0 }}
//           style={styles.button}
//         >
//           <Text style={styles.buttonText}>START YOUR JOURNEY</Text>
//         </LinearGradient>
//       </TouchableOpacity>
//     </LinearGradient>
//   );
// }

// // ------------------ STYLES ------------------
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingHorizontal: 30,
//   },

//   logo: {
//     width: 130,
//     height: 130,
//     marginBottom: 15,
//   },

//   heading: {
//     fontSize: 22,
//     color: "#FFF",
//     //fontWeight: "700",
//     fontFamily: "Lato-Bold",
//     marginBottom: 25,
//   },

//   outerCircle: {
//     width: 160,
//     height: 160,
//     borderRadius: 80,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 20,
//   },

//   innerCircle: {
//     width: 130,
//     height: 130,
//     backgroundColor: "#FFF",
//     borderRadius: 65,
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   circleText: {
//     fontSize: 46,
//     fontWeight: "700",
//     color: "#1E2A78",
//   },

//   subText: {
//     fontSize: 16,
//     color: "#FFF",
//     textAlign: "center",
//     marginBottom: 40,
//     fontFamily: "Lato-Bold",
//   },

//   buttonContainer: {
//     width: "80%",
//   },

//   button: {
//     paddingVertical: 14,
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   buttonText: {
//     color: "#1E2A78",
//     //fontWeight: "700",
//     fontSize: 14,
//     fontFamily: "Lato-Bold",
//   },
// });

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

import i18n from "../i18n"; // ✅ ADD THIS

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

/* ------------------ RESPONSIVE UTILS ------------------ */
const { width: SW, height: SH } = Dimensions.get("window");
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = (size: number) => (SW / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (SH / guidelineBaseHeight) * size;

const normalize = (size: number) => {
  const newSize = scale(size);
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
};

const svgSize = Math.min(SW * 0.41, 200);
const strokeWidth = normalize(14);

export default function WelcomeOfferScreen({ navigation }: any) {
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
  }, [rotateAnim, shineAnim]);

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const shineOpacity = shineAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.2, 0.9],
  });

  return (
    <LinearGradient colors={["#FF2E4C", "#1E2A78"]} style={styles.container}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.content}>
          {/* ✅ LOGO */}
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          {/* ✅ TITLE */}
          <Text style={styles.title}>{i18n.t("unlock_title")}</Text>

          {/* ✅ ROTATING SVG RING */}
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
                  strokeLinecap="round"
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
              <Text style={styles.progressNumber}>{days}</Text>
            </View>
          </View>

          {/* ✅ SUBTITLE */}
          <Text style={styles.subtitle}>{i18n.t("unlock_subtitle")}</Text>

          {/* ✅ BUTTON */}
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => navigation.navigate("Login")}
          >
            <LinearGradient
              colors={["#FF2E4C", "#1E2A78"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.btnBorder}
            >
              <View style={styles.btnInner}>
                <MaskedView
                  maskElement={
                    <Text style={styles.btnText}>{i18n.t("start_journey")}</Text>
                  }
                >
                  <LinearGradient
                    colors={["#FF2E4C", "#1E2A78"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
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
    color: "#FFFFFF",
    marginBottom: verticalScale(35),
    textAlign: "center",
  },

  progressWrap: {
    width: svgSize,
    height: svgSize,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: verticalScale(30),
  },

  progressCenter: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },

  progressNumber: {
    fontSize: normalize(74),
    fontWeight: "700",
    color: "#FFFFFF",
  },

  subtitle: {
    fontSize: normalize(22),
    fontWeight: "500",
    color: "#FFFFFF",
    textAlign: "center",
    lineHeight: normalize(26),
    marginBottom: verticalScale(55),
  },

  btnBorder: {
    padding: 4,
    borderRadius: 40,
  },

  btnInner: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 38,
    paddingVertical: 14,
    borderRadius: 37,
    alignItems: "center",
    justifyContent: "center",
  },

  btnText: {
    fontWeight: "800",
    fontSize: normalize(18),
    letterSpacing: 1,
  },
});
