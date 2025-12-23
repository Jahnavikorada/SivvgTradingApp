import React, { useState } from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CommonHeader from "../components/CommonHeader";
import Carousel from "../success/Carousel";
import Performancebuttons from "../components/Performancebuttons";
import Equity from "../buttontips/Equity";
import Futures from "../buttontips/Futures";
import Options from "../buttontips/Options";

const { height } = Dimensions.get("window");

type TabType = "Equity" | "Futures" | "Options";
type DurationType = "1D" | "1W" | "1M";

export default function Home({ navigation }: any) {
  //   const [selectedTab, setSelectedTab] = useState<"Equity" | "Futures" | "Options">("Equity");
  // const [selectedDuration, setSelectedDuration] = useState<"1D" | "1W" | "1M">("1D");

    const [selectedTab, setSelectedTab] = useState<TabType>("Equity");
  const [selectedDuration, setSelectedDuration] =
    useState<DurationType>("1D");

  return (
    <LinearGradient
      colors={["#FF2E4C", "#1E2A78"]}
      style={styles.gradient}      // ✅ FULL SCREEN
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
     >
      <View style={styles.container}>
        <CommonHeader title="Past Performance" navigation={navigation} />
        <Carousel />
 
          <View style={styles.card}>
             
            <Performancebuttons
               onTabChange={(tab) => setSelectedTab(tab)}
               onDurationChange={(d) => setSelectedDuration(d)}
            />

           {/* ✅ DATA AREA (SCROLLABLE) */}
            <ScrollView>
              {selectedTab === "Equity" && <Equity duration={selectedDuration} /> }

              {selectedTab === "Futures" && <Futures duration={selectedDuration} /> }

              {selectedTab === "Options" && <Options duration={selectedDuration} /> }
            </ScrollView>
          
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
  },
});
