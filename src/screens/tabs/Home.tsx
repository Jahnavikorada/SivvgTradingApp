import React, { useState } from "react";
import { View, StyleSheet, Dimensions,  Text, Image, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CommonHeader from "../components/CommonHeader";

import HomeEquity from "../hometips/HomeEquity";
import HomeFutures from "../hometips/HomeFuture";
import HomeOptions from "../hometips/HomeOptions";

const { height } = Dimensions.get("window");

export default function Home({ navigation }: any) {
  const [activeTab, setActiveTab] = useState<"Equity" | "Futures" | "Options">("Equity");

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
            
            {/* TOP TABS */}
            <View style={styles.tabs}>
              {/* {["Equity", "Futures", "Options"].map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[
                  styles.tab,
                  activeTab === tab && styles.activeTab,
                ]}
                onPress={() => setActiveTab(tab as any)}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === tab && styles.activeTabText,
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))} */}

            {["Equity", "Futures", "Options"].map((tab) => {
  const isActive = activeTab === tab;

  return (
    <TouchableOpacity
      key={tab}
      style={styles.tab}
      activeOpacity={0.9}
      onPress={() => setActiveTab(tab as any)}
    >
      {isActive ? (
        <LinearGradient
          colors={["#FF2E4C", "#1E2A78"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.activeGradient}
        >
          <Text style={styles.activeTabText}>{tab}</Text>
        </LinearGradient>
      ) : (
         <View style={styles.inactiveTab}>
      <Text style={styles.tabText}>{tab}</Text>
    </View>
      )}
    </TouchableOpacity>
  );
})}

            </View>
                     {/* CONTENT */}
          <View style={{ width: "100%" }}>
            {activeTab === "Equity" && <HomeEquity />}
            {activeTab === "Futures" && <HomeFutures />}
            {activeTab === "Options" && <HomeOptions />}
          </View>
             
                   
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
    paddingHorizontal: 25,
    //  justifyContent: "center", // vertical center
    // alignItems: "center",
  },
  
    tabs: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#1E2A78",
    //borderRadius: 6,
    overflow: "hidden",
    width: "100%",        // ✅ FULL WIDTH
    marginBottom: 16,
    marginTop: 20, 
    height: 45,
    // justifyContent: "center", // vertical center
    // alignItems: "center",
  },

  tab: {
    flex: 1,
   // paddingVertical: 12,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    justifyContent: "center"
  },

  activeTab: {
    backgroundColor: "#FF2E4C",
  },

  tabText: {
    fontWeight: "600",
    fontSize: 18,
    color: "#1E2A78",
  },

  activeTabText: {
    color: "#FFFFFF",
      fontWeight: "600",
      fontSize: 18,
  },
  
  activeGradient: {
  flex: 1,
  width: "100%",
   height: "100%",
  justifyContent: "center",
  alignItems: "center",
  paddingVertical: 8,   // 🔥 SAME VALUE HERE
},

inactiveTab: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  paddingVertical: 8,   // 🔥 increase from 12 → 18 (or 20)
  backgroundColor: "white"
},


});
