import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawer from "../screens/components/CustomDrawer";

import Navbar from "../screens/Navbar";
import Profile from "../menu/Profile";
import AppPreference from "../menu/AppPreference";
import About from "../menu/About";
import Logout from "../menu/Logout";


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,

        // remove rounded corners
        drawerStyle: {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        },
      }}
    >

       <Drawer.Screen name="Dashboard" component={Navbar} />
       
     
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="AppPreference" component={AppPreference} />
      <Drawer.Screen name="About" component={About} />
     <Drawer.Screen name="Logout" component={Logout} />
     
    </Drawer.Navigator>
  );
}
