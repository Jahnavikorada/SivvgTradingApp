// import React from "react";
// import { View, StyleSheet, Dimensions } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
// import CommonHeader from "../components/CommonHeader";


// const { height } = Dimensions.get("window");

// export default function Disclimer({ navigation }: any) {
//   return (
//     <LinearGradient
//       colors={["#FF2E4C", "#1E2A78"]}
//       style={styles.gradient}      // ✅ FULL SCREEN
//       start={{ x: 0, y: 0.5 }}
//       end={{ x: 1, y: 0.5 }}
//     >
//       <View style={styles.container}>
//         <CommonHeader title="Intraday Tips" navigation={navigation} />
 
//            <View style={styles.card}>
         
//            </View>
        
       
//       </View>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   gradient: {
//     flex: 1,              // ✅ ENSURES FULL SCREEN GRADIENT
//   },

//   container: {
//     flex: 1,
//   },

//   card: {
//     flex: 1,
//     backgroundColor: "white",
//     borderTopLeftRadius: 40,
//     borderTopRightRadius: 40,
//     marginTop: 10,        // ✅ small visible gradient gap only
//     paddingTop: 15,
//     paddingHorizontal: 10,
//   },
// });




import React, { useContext } from "react";
import { View, StyleSheet, Dimensions, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CommonHeader from "../components/CommonHeader";

import i18n from "../../i18n";
import { LanguageContext } from "../../context/LanguageContext";

const { height } = Dimensions.get("window");

export default function Home({ navigation }: any) {
  const { reloadKey } = useContext(LanguageContext); // ✅ re-render on language change

  return (
    <LinearGradient
      colors={["#FF2E4C", "#1E2A78"]}
      style={styles.gradient}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <View key={reloadKey} style={styles.container}>
        {/* ✅ Header Title Translated */}
        <CommonHeader title={i18n.t("intraday_tips")} navigation={navigation} />

        <View style={styles.card}>
          <Image
            source={require("../../../assets/images/disclaimer.png")}
            style={{ width: 200, height: 200 }}
            resizeMode="contain"
          />

          {/* ✅ Disclaimer Translated */}
          <Text style={styles.header}>{i18n.t("disclaimer")}</Text>

          {/* ✅ Message Translated */}
          <Text style={styles.text}>{i18n.t("no_tips_today")}</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },

  container: {
    flex: 1,
  },

  card: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 10,
    paddingTop: 15,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    color: "#DC3545",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 1,
  },

  text: {
    marginTop: 14,
    fontSize: 16,
    color: "#1E2A78",
    textAlign: "center",
    alignSelf: "center",
    maxWidth: 220,
    lineHeight: 22,
    fontWeight: "500",
  },
});
