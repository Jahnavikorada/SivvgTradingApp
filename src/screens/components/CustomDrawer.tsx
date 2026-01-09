import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";


export default function CustomDrawer(props: any) {
  const { navigation } = props;

  const DrawerItem = ({
    icon,
    label,
    onPress,
  }: {
    icon: string;
    label: string;
    onPress: () => void;
  }) => (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.itemLeft}>
        <Ionicons name={icon} size={20} color="#1E2A78" />
        <Text style={styles.itemText}>{label}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#1E2A78" />
    </TouchableOpacity>
  );

    function alert(arg0: string): void {
        throw new Error("Function not implemented.");
    }

  return (
    <View style={{ flex: 1 }}>

        <LinearGradient
          colors={["#FF2E4C", "#1E2A78"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientOverlay}
          pointerEvents="none"   // 🔥 IMPORTANT (so clicks pass through)
        >
            <View style={styles.profileContainer}>
              <View style={styles.avatar}>
                <Ionicons name="person" size={34} color="#1E2A78" />
              </View>
              <Text style={styles.username}>John_ID77</Text>
            </View>
        </LinearGradient>

        {/* ⚪ WHITE CARD */}
     <View style={styles.menucard}>

        {/* <DrawerContentScrollView {...props} contentContainerStyle={{  paddingBottom: 20}}
        showsVerticalScrollIndicator={false}> */}
      
      <DrawerContentScrollView
    {...props}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ paddingBottom: 20 }}
  >
          {/* ⚪ MENU */}
           <View style={styles.menu}>
                <DrawerItem
                   icon="person"
                   label="My Profile"
                   onPress={() => navigation.navigate("Profile")}
               />
               
                    <DrawerItem
                       icon="settings"
                       label="App Preferences"
                       onPress={() => navigation.navigate("AppPreference")}
                   />

                    <DrawerItem
                        icon="information-circle"
                        label="About"
                        onPress={() => navigation.navigate("About")}
                   />

                    <DrawerItem
                        icon="call"
                        label="ContactUs"
                        onPress={() => navigation.navigate("ContactUs")}
                   />

                    <DrawerItem
                        icon="log-out"
                        label="Logout"
                        onPress={() => navigation.navigate("Logout")}
                   />
              

               {/* 🔽 FOOTER */}
                <View style={styles.footer}>
                    <View style={styles.links}>
                        <Text style={styles.link}>Privacy Policy</Text>
                        <Text style={styles.link}>Terms & Conditions</Text>
                    </View>
                    
               </View>
               <Text style={styles.version}>Android Version 0.1.0</Text>
           </View>
       </DrawerContentScrollView>
    </View>
    </View>
    
  );
}








const styles = StyleSheet.create({

    gradientOverlay: {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,

  // 🔥 HALF OF THE SCREEN HEIGHT
  height: "25%",

  zIndex: 1, 
  justifyContent: "center",
  alignItems: "center"         // above white background
},

profileContainer: {
  alignItems: "center",
},

menucard: {
  flex: 1,
  backgroundColor: "#FFFFFF",

  // 🔥 card look
  //marginHorizontal: 12,
  marginTop: "60%",            // overlap gradient card
 // borderRadius: 24,

  elevation: 12,
},



  /* 🔴 HEADER */
  header: {
    // height: 180,
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: 20,
    height: 220,
    justifyContent: "center",
    alignItems: "center",

  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    elevation: 6,
  },

  username: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 4,
  },

  /* ⚪ MENU */
  menu: {
    paddingTop: 20,
    paddingHorizontal: 16,
    //flex: 1,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginBottom: 6,
  },

  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  itemText: {
    marginLeft: 12,
    fontSize: 15,
    fontWeight: "600",
    color: "#1E2A78",
  },

  /* 🔽 FOOTER */
  footer: {
    marginTop: 30,
    //paddingBottom: 20,
    paddingHorizontal: 16,
  },

  version: {
  marginTop: "70%",
  textAlign: "center",   // 🔥 key
  alignSelf: "center",   // 🔥 key
  fontSize: 11,
  color: "#999",
},

  links: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  link: {
    fontSize: 12,
    color: "#1E2A78",
    fontWeight: "600",
  },

//   version: {
//     textAlign: "center",
//     fontSize: 11,
//     color: "#999",
//     marginTop: 4,
//   },
});
