import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { loadLanguage } from "./src/i18n";


import SplashScreen from "./src/screens/SplashScreen";
import LanguageScreen from "./src/screens/LanguageScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegistrationScreen from "./src/screens/RegistrationScreen"
import ForgotPasswordScreen from "./src/screens/ForgotPassword";
import OtpScreen from "./src/screens/OtpScreen";
import ChangePasswordScreen from "./src/screens/ChangePassword";
import SuccessScreen from "./src/screens/Success";
import WelcomeOfferScreen from "./src/screens/Welcome";
import OtpScreen1 from "./src/screens/OtpScreen1";
import Navbar from "./src/screens/Navbar";

const Stack = createNativeStackNavigator();



export default function App() {

    useEffect(() => {
    loadLanguage();   // ✅ LOADS SAVED APP LANGUAGE LIKE REAL APPS
  }, []);
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
         <Stack.Screen name="Welcome" component={WelcomeOfferScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegistrationScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
         <Stack.Screen name="OtpVerification" component={OtpScreen} />
         <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
         <Stack.Screen name="Success" component={SuccessScreen} />
         <Stack.Screen name="OtpVerification1" component={OtpScreen1} /> 
         <Stack.Screen name="Tabs" component={Navbar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}






