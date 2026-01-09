import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawer from "../screens/components/CustomDrawer";
import MainStackNavigator from "./MainStackNavigator";

import Profile from "../menu/Profile";
import AppPreference from "../menu/AppPreference";
import About from "../menu/About";
import Logout from "../menu/Logout";
import ContactUs from "../menu/Contact";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        },
      }}
    >
      {/* ✅ IMPORTANT */}
      <Drawer.Screen
        name="Dashboard"
        component={MainStackNavigator}
      />

      {/* Drawer menu screens */}
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="AppPreference" component={AppPreference} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}
