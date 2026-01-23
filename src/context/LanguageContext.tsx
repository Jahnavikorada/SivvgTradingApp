import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n from "../i18n";

type LanguageContextType = {
  lang: string;
  changeLang: (newLang: string) => Promise<void>;
  reloadKey: number;
};

export const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  changeLang: async () => {},
  reloadKey: 0,
});

export const LanguageProvider = ({ children }: any) => {
  const [lang, setLang] = useState("en");
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    const loadLang = async () => {
      try {
        const savedLang = await AsyncStorage.getItem("APP_LANG");

        if (savedLang) {
          setLang(savedLang);
          i18n.locale = savedLang; // ✅ set language in i18n
          setReloadKey((prev) => prev + 1); // ✅ refresh navigation once
        }
      } catch (error) {
        console.log("Error loading language:", error);
      }
    };

    loadLang();
  }, []);

  const changeLang = async (newLang: string) => {
    try {
      setLang(newLang);
      i18n.locale = newLang; // ✅ update i18n locale
      await AsyncStorage.setItem("APP_LANG", newLang);

      setReloadKey((prev) => prev + 1); // ✅ refresh navigation when language changes
    } catch (error) {
      console.log("Error saving language:", error);
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLang, reloadKey }}>
      {children}
    </LanguageContext.Provider>
  );
};
