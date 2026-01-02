import React, {useState} from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Dimensions, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
//import ChangeLanguage from './ChangeLanguage';

import { useFont } from "../context/FontContext";
import { getFontFamily } from "../context/fontHelper";


export default function AppPreference({ navigation }: any) {

  const { fontFamily, fontSize } = useFont();

  const [selected, setSelected] = useState("None");


  return (
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

                <Text style={[styles.headerTitle, { fontFamily: getFontFamily(fontFamily, "bold"), fontSize: fontSize + 6 }]}>App Preferences</Text>
            </View>
         {/* <View style={styles.container}> */}

      
            <View style={styles.card}>


              {/* Change Language */}
                    <TouchableOpacity style={[styles.row, selected === "lang" && styles.activeRow]} 
                     onPress={() =>{
                         setSelected("lang");
                          navigation.navigate("ChangeLanguage");
                     }}
                    >
                        <Icon name="language" size={22} color={selected === "lang" ? "#fff" : "#1E2A78"} />
                        <Text style={[styles.rowText, selected === "lang" && styles.activeText, { fontFamily: getFontFamily(fontFamily, "semibold"), fontSize }]}>Change Language</Text>
                        <Icon name="chevron-forward" size={22} color={selected === "lang" ? "#fff" : "#1E2A78"} />
                    </TouchableOpacity>

              {/* Themes */}
                    <TouchableOpacity style={[styles.row, selected === "theme" && styles.activeRow]} 
                     onPress={() =>{
                         setSelected("theme");
                         navigation.navigate("Themes")
                      }}
                    >
                        <Icon name="moon" size={22} color={selected === "theme" ? "#fff" : "#1E2A78"} />
                        <Text style={[styles.rowText, selected === "theme" && styles.activeText, { fontFamily: getFontFamily(fontFamily, "semibold"), fontSize }]}>Themes</Text>
                        <Icon name="chevron-forward" size={22} color={selected === "theme" ? "#fff" : "#1E2A78"} />
                    </TouchableOpacity>

               {/* Fonts */}
                    <TouchableOpacity style={[styles.row, selected === "fonts" && styles.activeRow]}
                     onPress={() => {
                         setSelected("fonts");
                         navigation.navigate("Fonts")
                      }}
                    >
                        <Icon name="text" size={22} color={selected === "fonts" ? "#fff" : "#1E2A78"} />
                        <Text style={[styles.rowText, selected === "fonts" && styles.activeText, { fontFamily: getFontFamily(fontFamily, "semibold"), fontSize }]}>Fonts</Text>
                        <Icon name="chevron-forward" size={22} color={selected === "fonts" ? "#fff" : "#1E2A78"} />
                    </TouchableOpacity>
          
          
            </View>
        
       
           {/* </View> */}
        </LinearGradient>
  )
}


const styles = StyleSheet.create({
  gradient: {
    flex: 1,              // ✅ ENSURES FULL SCREEN GRADIENT
  },

  headerRow: {
  flexDirection: "row",    // ⬅️ PUT THEM IN SAME LINE
  alignItems: "center",     // ⬅️ VERTICAL CENTER
  paddingTop: 40,           // For status bar spacing
  paddingHorizontal: 20,
  gap: 10,                  // Space between icon & text
},

headerTitle: {
  color: "#fff",
  fontSize: 20,
  fontWeight: "bold",
},

//   container: {
//     flex: 1,
//   },

  card: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: "10%",        // ✅ small visible gradient gap only
    paddingTop: 15,
    //paddingHorizontal: 10,
  },
row: {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: 18,
  paddingHorizontal: 15,
  //borderBottomWidth: 1,
 // borderColor: "#E5E5E5",
  marginTop: 15,
},

activeRow: {
    backgroundColor: "#1E2A78", // BLUE BG
  },

rowText: {
  flex: 1,
  marginLeft: 15,
  fontSize: 16,
  color: "#1E2A78",
  fontWeight: "500",
},

 activeText: {
    color: "#fff", // WHITE TEXT
  },

});