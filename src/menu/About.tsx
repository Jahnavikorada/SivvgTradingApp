import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import { useFont } from "../context/FontContext";
import { getFontFamily } from "../context/fontHelper";

/* Reusable Box Component */
const InfoBox = ({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) => {
    const { fontFamily, fontSize } = useFont();

  return (
    <View style={styles.box}>
        <View style={styles.row}>
            <Icon name={icon} size={28} color="#fff" />
            <View style={styles.textContainer}>
                <Text style={[styles.boxTitle, {fontFamily: getFontFamily(fontFamily, "semibold"), fontSize: fontSize + 2}]}>
                    {title}
                </Text>

                <Text style={[styles.boxText, {fontFamily: getFontFamily(fontFamily, "regular"), fontSize}]}>
                    {desc}
                </Text>
            </View>
        </View>
    </View>
  );
};

export default function About({ navigation }: any) {
    
     const { fontFamily, fontSize } = useFont();

    return(
        <LinearGradient
            colors={["#FF2E4C", "#1E2A78"]}
            style={styles.gradient}      // ✅ FULL SCREEN
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
         >
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={26} color="#fff" />
                </TouchableOpacity>

                <Text style={[styles.headerTitle, { fontFamily: getFontFamily(fontFamily, "bold"), fontSize: fontSize + 6 }]}>
                    About Us
                </Text>

            </View>

            <View style={styles.card}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={[ styles.header, {fontFamily: getFontFamily(fontFamily, "semibold"), fontSize: fontSize + 4}]}>
                        Why choose us?
                    </Text>

                    <InfoBox 
                    icon="checkbox"
                    title="Precision Picks"
                    desc="Accurate intraday tips by experts with clear entry and exit."
                    />

                    <InfoBox 
                    icon="flash"
                    title="Quick Trigger"
                    desc="Act fast and catch the right market opportunity."
                    />

                    <InfoBox 
                    icon="analytics-sharp"
                    title="Strategic Flow"
                    desc="Structured trading tips with no guesswork."
                    />

                    <Text style={[styles.header, {fontFamily: getFontFamily(fontFamily, "semibold"), fontSize: fontSize + 4}]}>
                        What we Offer
                    </Text>

                    <InfoBox
                    icon="chevron-forward"
                    title="Intraday Tips"
                    desc="(Equity, Futures, Options)"
                    />

                    <InfoBox
                    icon="chevron-forward"
                    title="Market Notifications"
                    desc="Real-time market updates"
                    />

                </ScrollView>
            </View>
        </LinearGradient>
    )
}

 const styles = StyleSheet.create({

    gradient: {
      flex: 1,              
    },
 
    headerRow: {
      flexDirection: "row",    
      alignItems: "center",     // ⬅️ VERTICAL CENTER
      paddingTop: 40,           
      paddingHorizontal: 20,
      gap: 10,                  
    },

    headerTitle: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "bold",
    },

    card: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: "10%",
    padding: 16,
  },
     
   box: {
    backgroundColor: "#2F3C7E",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },

  row: {
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-start",
  },

  textContainer: {
    flex: 1,
  },

  boxTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },

   boxText: {
     color: "#E6E9FF",
     //fontSize: 16,
   },

   header: {
    textAlign: "center",
    color: "#1E2A78",
    marginVertical: 16,
   }

 })