import React, { useState, useContext } from "react";
import { View, StyleSheet,  ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CommonHeader from "../components/CommonHeader";
import Carousel from "../success/Carousel";
import Performancebuttons from "../components/Performancebuttons";
import Equity from "../buttontips/Equity";
import Futures from "../buttontips/Futures";
import Options from "../buttontips/Options";
import { useTheme } from "../../context/ThemeContext";
import { LightColors, DarkColors } from "../../theme/colors";
import i18n from "../../i18n";
import { LanguageContext } from "../../context/LanguageContext";

//const { height } = Dimensions.get("window");

type TabType = "Equity" | "Futures" | "Options";
type DurationType = "1D" | "1W" | "1M";

export default function Home({ navigation }: any) {
  const { isDark } = useTheme(); 
  const colors = isDark ? DarkColors : LightColors;
  const { reloadKey } = useContext(LanguageContext); 
  const [selectedTab, setSelectedTab] = useState<TabType>("Equity");
  const [selectedDuration, setSelectedDuration] =
    useState<DurationType>("1D");

  return (
    <LinearGradient
      colors={[colors.gradientStart, colors.gradientEnd]}
      style={styles.gradient}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <View key={reloadKey} style={styles.container}>

        <CommonHeader
          title={i18n.t("past_performance")}
          navigation={navigation}
        />

        <Carousel />

        <View
          style={[
            styles.card,
            {
              backgroundColor: isDark ? "#1a1a1a" : "#FFFFFF",
            },
          ]}
        >
          <Performancebuttons
            onTabChange={(tab) => setSelectedTab(tab)}
            onDurationChange={(d) => setSelectedDuration(d)}
          />

          <ScrollView showsVerticalScrollIndicator={false}>
            {selectedTab === "Equity" && (
              <Equity duration={selectedDuration} />
            )}

            {selectedTab === "Futures" && (
              <Futures duration={selectedDuration} />
            )}

            {selectedTab === "Options" && (
              <Options duration={selectedDuration} />
            )}
          </ScrollView>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },

  container: {
    flex: 1,
  },

  card: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 10,
    paddingTop: 15,
    paddingHorizontal: 10,
  },
});
