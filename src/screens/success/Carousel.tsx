import React, { useEffect, useRef, useState } from "react";
import { ScrollView, View, StyleSheet, Dimensions } from "react-native";

import Equityrate from "./Equityrate";
import Futuresrate from "./Futuresrate";
import Optionsrate from "./Optionsrate";

const { width } = Dimensions.get("window");

// ✅ Total original slides = 3


export default function Carousel() {
  const scrollRef = useRef<ScrollView | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const TOTAL_SLIDES = 3;

  // ✅ AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      let nextIndex = activeIndex + 1;

       if (nextIndex === TOTAL_SLIDES) {

      scrollRef.current?.scrollTo({
        x: nextIndex * width,
        animated: true,
      });
        setTimeout(() => {
          scrollRef.current?.scrollTo({
            x: 0,
            animated: false,
          });
        }, 300);

      setActiveIndex(0);
    } else {
          scrollRef.current?.scrollTo({
          x: nextIndex * width,
          animated: true,
        });
        setActiveIndex(nextIndex);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [activeIndex]);


  return (
    <View>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        //onMomentumScrollEnd={onMomentumScrollEnd}
      >
        {/* ✅ REAL SLIDES */}
        <View style={{ width }}>
          <Equityrate />
        </View>

        <View style={{ width }}>
          <Futuresrate />
        </View>

        <View style={{ width }}>
          <Optionsrate />
        </View>

        {/* ✅ DUPLICATE OF FIRST SLIDE (FOR INFINITE LOOP) */}
        <View style={{ width }}>
          <Equityrate />
        </View>
      </ScrollView>

      {/* ✅ DOTS (ONLY 3 DOTS, NOT 4) */}
      <View style={styles.dotsContainer}>
        {[0, 1, 2].map((i) => (
          <View
            key={i}
            style={[
              styles.dot,
              activeIndex === i && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#d3d3d3",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#1E2A78",
    width: 10,
    height: 10,
  },
});

