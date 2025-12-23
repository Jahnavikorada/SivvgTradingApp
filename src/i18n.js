import { I18n } from "i18n-js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const i18n = new I18n({
  en: {
    title: "Select Language",
    subtitle: "Choose your preferred language",
    continue: "Continue",
    login: "Login",
     "Unlock Your Potential": "Unlock Your Potential",
  },
  hi: {
    title: "भाषा चुनें",
    subtitle: "अपनी पसंदीदा भाषा चुनें",
    continue: "जारी रखें",
    login: "लॉगिन",
     "Unlock Your Potential": "अपनी क्षमता को अनलॉक करें",
  },
  te: {
    title: "భాషను ఎంచుకోండి",
    subtitle: "మీకు ఇష్టమైన భాషను ఎంచుకోండి",
    continue: "కొనసాగించండి",
    login: "లాగిన్",
     "Unlock Your Potential": "మీ సామర్థ్యాన్ని విడుదల చేయండి",
  },

  
});

i18n.defaultLocale = "en";
i18n.enableFallback = true;

// ✅ Load saved language at app start
export const loadLanguage = async () => {
  const savedLang = await AsyncStorage.getItem("APP_LANG");
  if (savedLang) {
    i18n.locale = savedLang;
  }
};

export default i18n;
