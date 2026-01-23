import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { useColorScheme } from "react-native";
import { LightColors, DarkColors } from "../theme/colors";

export type ThemeType = "light" | "dark";

interface ThemeContextProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  isDark: boolean;
  toggleTheme: () => void;
  colors: typeof LightColors;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  setTheme: () => {},
  isDark: false,
  toggleTheme: () => {},
  colors: LightColors,
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const deviceTheme = useColorScheme(); // ✅ Detect device theme
  const [theme, setTheme] = useState<ThemeType>(
    deviceTheme === "dark" ? "dark" : "light"
  );

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  const colors = isDark ? DarkColors : LightColors;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        isDark,
        toggleTheme,
        colors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
};