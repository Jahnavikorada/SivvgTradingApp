import { View, Text, StyleSheet } from "react-native";
import TipsCard from "../components/TipsCard";

export default function HomeOptions() {
  const data = [
    { symbol: "ACC-2300-CE", t1: 2310, t2: 2340, t3: 2390, type:"BUY"},
  ];

  return (
    <View>
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
    </View>
  );
}
