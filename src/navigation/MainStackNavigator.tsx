import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Navbar from "../screens/Navbar";
import Notifications from "../screens/components/Notifications";

const Stack = createNativeStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={Navbar} />
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
}
