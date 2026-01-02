import { View, Text, StyleSheet } from "react-native";
import TipsCard from "../components/TipsCard";

export default function HomeEquity() {
  const data = [
    { symbol: "PEL-1343", t1: 1358, t2: 1373, t3: 1388 },
    { symbol: "CDSL-1443", t1: 1458, t2: 1473, t3: 1488 },
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
          isBuy
        />
      ))}
    </View>
  );
}
