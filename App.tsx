import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { loadLanguage } from "./src/i18n";
import { FontProvider } from "./src/context/FontContext";
import DrawerNavigator from "./src/navigation/DrawerNavigator";


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
import Profile from "./src/menu/Profile";
import AppPreference from "./src/menu/AppPreference";
import ChangeLanguage from "./src/menu/ChangeLanguage";
import Themes from "./src/menu/Themes";
import Fonts from "./src/menu/Fonts";
import About from "./src/menu/About";
import Logout from "./src/menu/Logout";
//import Navbar from "./src/screens/Navbar";

const Stack = createNativeStackNavigator();



export default function App() {

    useEffect(() => {
    loadLanguage();   // ✅ LOADS SAVED APP LANGUAGE LIKE REAL APPS
  }, []);
  
  return (
     <FontProvider>
     <SafeAreaProvider>
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

         <Stack.Screen name="Profile" component={Profile} />
         <Stack.Screen name="AppPreference" component={AppPreference} />
         <Stack.Screen name="ChangeLanguage" component={ChangeLanguage} />
         <Stack.Screen name="Themes" component={Themes} />
         <Stack.Screen name="Fonts" component={Fonts} />
         <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Logout" component={Logout} />
         {/* <Stack.Screen name="Tabs" component={Navbar} /> */}

          {/* <Stack.Screen name="Home" component={DrawerNavigator} /> */}
           <Stack.Screen
            name="Tabs"
            component={DrawerNavigator}
          />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
    </FontProvider>
  );
}






