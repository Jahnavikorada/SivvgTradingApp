import { View, Text, StyleSheet, ScrollView } from "react-native";
import TipsCard from "../components/TipsCard";

export default function HomeFutures() {
  const data = [
    { symbol: "BANKNIFTY-DEC", t1: 47850, t2: 47980, t3: 48120,type:"BUY" },
    { symbol: "PEL-1343", t1: 1358, t2: 1373, t3: 1388, type:"BUY"},
    { symbol: "CDSL-1443", t1: 1458, t2: 1473, t3: 1488, type:"BUY"},
  ];

  return (
    <View>
          <ScrollView
                      showsVerticalScrollIndicator={false}
                      contentContainerStyle={styles.scrollContent}
                    >
      {data.map((item, index) => (
        <TipsCard
          key={index}
          symbol={item.symbol}
          t1={item.t1}
          t2={item.t2}
          t3={item.t3}
          isBuy={item.type === "BUY"} 
        />
      ))}
      </ScrollView>
    </View>
  );
}
const styles=StyleSheet.create({
   scrollContent: {
    paddingBottom: 120,
  },
})