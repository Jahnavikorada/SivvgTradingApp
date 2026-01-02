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




import React from "react";
import { View, StyleSheet, Dimensions,  Text, Image} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CommonHeader from "../components/CommonHeader";


const { height } = Dimensions.get("window");

export default function Home({ navigation }: any) {
  return (
    <LinearGradient
      colors={["#FF2E4C", "#1E2A78"]}
      style={styles.gradient}      // ✅ FULL SCREEN
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <View style={styles.container}>
        <CommonHeader title="Intraday Tips" navigation={navigation} />
 
           <View style={styles.card}>
                    <Image
                      source={require("../../../assets/images/disclaimer.png")}
                      // style={{ flex: 1 }}
                      style={{ width: 200, height: 200 }}
                      resizeMode="contain"
                    >
                    </Image>
                    <Text style={styles.header}>DISCLAIMER</Text>
                    <Text style={styles.text}>No trading tips are provided today</Text>
           </View>
        
       
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,              // ✅ ENSURES FULL SCREEN GRADIENT
  },

  container: {
    flex: 1,
  },

  card: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 10,        // ✅ small visible gradient gap only
    paddingTop: 15,
    paddingHorizontal: 10,
     justifyContent: "center", // vertical center
    alignItems: "center",
  },
  
  header: {
    color: "#DC3545",
    // fontWeight: "bold",
    // fontSize: 20,
    // marginTop: -5
     //marginTop: 16,              // 🔥 GAP BETWEEN IMAGE & TEXT
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 1,
  },

  text: {
    marginTop: 14,
    fontSize: 16,
    color: "#1E2A78",
    textAlign: "center",   // ✅ center alignment
    alignSelf: "center",
    maxWidth: 220,
    //width: "70%",          // ✅ forces 2-line wrap
    lineHeight: 22,
    fontWeight: "500",
  }
});
