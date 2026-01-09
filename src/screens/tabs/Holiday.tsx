import React from "react";
import { View, StyleSheet, Dimensions,  Text, Image} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CommonHeader from "../components/CommonHeader";


const { height } = Dimensions.get("window");

export default function Holiday({ navigation }: any) {
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
                      source={require("../../../assets/images/holiday.png")}
                      // style={{ flex: 1 }}
                      style={{ width: 140, height: 140 }}
                      resizeMode="contain"
                    >
                    </Image>
                    <Text style={styles.header}>The market is closed today</Text>
                   
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
    color: "#1E2A78",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 1,
    marginTop: 16,
  },

});
