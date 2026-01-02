import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CommonHeader from "../components/CommonHeader";


const { height } = Dimensions.get("window");

export default function Portfolio({ navigation }: any) {
  return (
    <LinearGradient
      colors={["#FF2E4C", "#1E2A78"]}
      style={styles.gradient}      // ✅ FULL SCREEN
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <View style={styles.container}>
        <CommonHeader title="Portfolio" navigation={navigation} />
 
           <View style={styles.card}>
         
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
    marginTop: 30,        // ✅ small visible gradient gap only
    paddingTop: 15,
    paddingHorizontal: 10,
  },
});
