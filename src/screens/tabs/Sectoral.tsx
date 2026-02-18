import React, { useContext } from "react";
import { View, StyleSheet,  } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CommonHeader from "../components/CommonHeader";
import SectoralPanel from "../components/SectoralPanel";
import { useTheme } from "../../context/ThemeContext";
import { LightColors, DarkColors } from "../../theme/colors";
import i18n from "../../i18n";
import { LanguageContext } from "../../context/LanguageContext";

//const { height } = Dimensions.get("window");

export default function Sectoral({ navigation }: any) {
  const { isDark } = useTheme(); // 
  const colors = isDark ? DarkColors : LightColors;

  const { reloadKey } = useContext(LanguageContext); 

  return (
    <LinearGradient
      colors={[colors.gradientStart, colors.gradientEnd]} 
      style={styles.gradient}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <View key={reloadKey} style={styles.container}>
      
        <CommonHeader
          title={i18n.t("sectoral_indices")}
          navigation={navigation}
        />

        
        <View
          style={[
            styles.card,
            {
              backgroundColor: isDark ? "#1a1a1a" : "#FFFFFF",
            },
          ]}
        >
          <SectoralPanel />
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
