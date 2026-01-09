import React,  { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Dimensions, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
//import ChangeLanguage from './ChangeLanguage';

export default function AppPreference({ navigation }: any) {
      const [selected, setSelected] = useState("English");
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

                 <Text style={styles.headerTitle}>Change Language</Text>
           </View>
        

      
            <View style={styles.card}>

                 <Icon name="language-outline" size={70} color="#1E2A78" />

                 <Text style={styles.title}>Choose a Language</Text>
                 <Text style={styles.subtitle}>Please Select a language to get Started</Text>

             {/* ENGLISH */}
                   <TouchableOpacity
                        style={[styles.btn, selected === "English" && styles.activeBtn]}
                        onPress={() => setSelected("English")}
                    >
                       <Text style={[styles.btnText, selected === "English" && styles.activeText]}>
                           English
                       </Text>
                  </TouchableOpacity>

             {/* HINDI */}
                    <TouchableOpacity
                         style={[styles.btn, selected === "Hindi" && styles.activeBtn]}
                         onPress={() => setSelected("Hindi")}
                    >
                        <Text style={[styles.btnText, selected === "Hindi" && styles.activeText]}>
                            Hindi
                        </Text>
                    </TouchableOpacity>

             {/* TELUGU */}
                    <TouchableOpacity
                         style={[styles.btn, selected === "Telugu" && styles.activeBtn]}
                         onPress={() => setSelected("Telugu")}
                    >
                        <Text style={[styles.btnText, selected === "Telugu" && styles.activeText]}>
                            Telugu
                        </Text>
                   </TouchableOpacity>
             
        
  
            </View>
        
       
    
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
  paddingTop: 60,           // For status bar spacing
  paddingHorizontal: 20,
  gap: 10,                  // Space between icon & text
},
headerTitle: {
  color: "#fff",
  fontSize: 20,
  fontWeight: "bold",
},

  
  
  card: {
     alignItems: "center", 
     justifyContent: "center", 
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: "10%",        // ✅ small visible gradient gap only
    //paddingTop: 15,
    paddingHorizontal: 10,
    //gap: 6,
  },
row: {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: 18,
  paddingHorizontal: 15,
  borderBottomWidth: 1,
  borderColor: "#E5E5E5",
},

rowText: {
  flex: 1,
  marginLeft: 15,
  fontSize: 16,
  color: "#1E2A78",
  fontWeight: "500",
},



 title: {
    fontSize: 20,
     fontWeight: "bold",
      color: "#1E2A78",
    marginTop: 10,
    // textDecorationLine: "underline",
  },

  subtitle: {
    fontSize: 14,
    color: "#777", 
    marginBottom: 25,
    textAlign: "center",
  },

  btn: {
    width: "70%", 
    paddingVertical: 12, 
    marginVertical: 8,
    borderRadius: 6, 
    borderWidth: 1, 
    borderColor: "#1E2A78",
    alignItems: "center", 
    backgroundColor: "#fff"
  },

  activeBtn: {
    backgroundColor: "#1E2A78",
  },

  btnText: {
    color: "#1E2A78", 
    fontSize: 16, 
    fontWeight: "600",
  },

  activeText: {
    color: "#fff",
  },

});