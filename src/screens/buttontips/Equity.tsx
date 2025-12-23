import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TipsCard from "../components/TipsCard";

type DurationType = "1D" | "1W" | "1M";

export default function Equity( { duration }: { duration: DurationType } ) {
     const equityData: Record<DurationType, any[]> = {
    "1D": [
      { symbol: "PEL-1343", t1: 1358, t2: 1373, t3: 1388 },
    //   { symbol: "TCS-4201", t1: 4205, t2: 4240, t3: 4280 },
    ],

    "1W": [
      { symbol: "PEL-1343", t1: 1360, t2: 1385, t3: 1400 },
      { symbol: "TCS-4201", t1: 4220, t2: 4260, t3: 4310 },
    ],

    "1M": [
      { symbol: "PEL-1343", t1: 1400, t2: 1450, t3: 1500 },
      { symbol: "TCS-4201", t1: 4300, t2: 4380, t3: 4450 },
      { symbol: "INFY-1880", t1: 1895, t2: 1910, t3: 1940 },
    ],
  };
   const data = equityData[duration];

  return (
    <View>
         <Text style={styles.title}>Equity ({duration})</Text>

         {data.map((item, index) => (
        <TipsCard
          key={index}
          symbol={item.symbol}
          t1={item.t1}
          t2={item.t2}
          t3={item.t3}
          isBuy
        />
      ))}
      
    </View>
  );
}


const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
  },
});
