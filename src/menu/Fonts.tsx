// // import React, { useState } from "react";
// // import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// // import LinearGradient from "react-native-linear-gradient";
// // import Icon from "react-native-vector-icons/Ionicons";

// // const FONT_STYLES = ["Lato", "Poppins", "Arial"];
// // const FONT_SIZES = ["Small", "Medium", "Large"];

// export default function Themes({ navigation }: any) {
//   const [openStyle, setOpenStyle] = useState(false);
//   const [openSize, setOpenSize] = useState(false);

//   const [selectedStyle, setSelectedStyle] = useState("Lato");
//   const [selectedSize, setSelectedSize] = useState("Medium");

//   const renderDropdown = (
//     title: string,
//     open: boolean,
//     setOpen: any,
//     data: string[],
//     selected: string,
//     setSelected: any
//   ) => (
//     <View style={styles.dropdownWrapper}>
//       <TouchableOpacity
//         style={styles.dropdownHeader}
//         onPress={() => setOpen(!open)}
//       >
//         <Text style={styles.dropdownHeaderText}>{title}</Text>
//         <Icon
//           name={open ? "chevron-up" : "chevron-down"}
//           size={20}
//           color="#fff"
//         />
//       </TouchableOpacity>

//       {open && (
//         <View style={styles.dropdownBody}>
//           {data.map((item) => (
//             <TouchableOpacity
//               key={item}
//               style={[
//                 styles.option,
//                 item === selected && styles.selectedOption,
//               ]}
//               onPress={() => {
//                 setSelected(item);
//                 setOpen(false);
//               }}
//             >
//               <Text
//                 style={[
//                   styles.optionText,
//                   item === selected && styles.selectedOptionText,
//                 ]}
//               >
//                 {item}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       )}
//     </View>
//   );

//   return (
//     <LinearGradient
//       colors={["#FF2E4C", "#1E2A78"]}
//       style={styles.gradient}
//       start={{ x: 0, y: 0.5 }}
//       end={{ x: 1, y: 0.5 }}
//     >
//       {/* Header */}
//       <View style={styles.headerRow}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Icon name="arrow-back" size={26} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Fonts</Text>
//       </View>

//       {/* Card */}
//       <View style={styles.card}>
//         <Text style={styles.title}>Font Style and Size</Text>

//         {renderDropdown(
//           "Font Style",
//           openStyle,
//           setOpenStyle,
//           FONT_STYLES,
//           selectedStyle,
//           setSelectedStyle
//         )}

//         {renderDropdown(
//           "Font Size",
//           openSize,
//           setOpenSize,
//           FONT_SIZES,
//           selectedSize,
//           setSelectedSize
//         )}
//       </View>
//     </LinearGradient>
//   );
// }


// const styles = StyleSheet.create({
//   gradient: {
//     flex: 1,
//   },

//   headerRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingTop: 40,
//     paddingHorizontal: 20,
//     gap: 10,
//   },

//   headerTitle: {
//     color: "#fff",
//     fontSize: 20,
//     fontWeight: "bold",
//   },

//   card: {
//     flex: 1,
//     backgroundColor: "#fff",
//     borderTopLeftRadius: 40,
//     borderTopRightRadius: 40,
//     marginTop: "10%",
//     padding: 20,
//   },

//   title: {
//     fontSize: 20,
//     fontWeight: "600",
//     color: "#1E2A78",
//     textAlign: "center",
//     marginBottom: 20,
//   },

//   dropdownWrapper: {
//      width: "94%",
//   alignSelf: "center",

//   backgroundColor: "#fff",
//   borderRadius: 16,
//   borderWidth: 1,
//   borderColor: "#1E2A78",

//   overflow: "hidden",   // 🔑 makes header + body act as ONE
//   marginBottom: 18,
//   },

//   dropdownHeader: {
//      height: 46,
//   backgroundColor: "#1E2A78",

//   paddingHorizontal: 16,
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "space-between",

//   borderTopLeftRadius: 16,
//   borderTopRightRadius: 16,

//   zIndex: 2,    
//   },

//   dropdownHeaderText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "600",
//     flex: 1,            // ✅ allow centering
//     textAlign: "center"
//   },

//   dropdownBody: {
//    backgroundColor: "#fff",

//   borderTopWidth: 1,
//   borderColor: "#1E2A78",

//   zIndex: 1,

//   },

//   option: {
//    height: 42,
//   justifyContent: "center",
//   alignItems: "center",

//   borderBottomWidth: 1,
//   borderBottomColor: "#000",
//   },

//   optionText: {
//     fontSize: 16,
//     color: "#1E2A78",
//     textAlign: "center",
//   },

//   selectedOption: {
//     backgroundColor: "rgba(30,42,120,0.54)",
//   },

//   selectedOptionText: {
//     color: "#fff",
//     fontWeight: "600",
//     //textAlign: "center"
//   },
// });








import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";

import { useFont } from "../context/FontContext";
import { getFontFamily } from "../context/fontHelper";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import i18n from "../i18n";

const FONT_STYLES = ["Lato", "Poppins", "Arial"];
const FONT_SIZES = ["Small", "Medium", "Large"];

const FONT_SIZE_MAP: any = {
  Small: 14,
  Medium: 16,
  Large: 18,
};

export default function Fonts({ navigation }: any) {
  const { reloadKey } = useContext(LanguageContext); // Language refresh
  const { theme } = useContext(ThemeContext); // Theme
  const isLight = theme === "light";

  const { fontFamily, fontSize, setFontFamily, setFontSize } = useFont();

  const [openStyle, setOpenStyle] = useState(false);
  const [openSize, setOpenSize] = useState(false);

  // Translations for font sizes
  const getTranslatedSizeLabel = (sizeKey: string) => {
    if (sizeKey === "Small") return i18n.t("font_small");
    if (sizeKey === "Medium") return i18n.t("font_medium");
    if (sizeKey === "Large") return i18n.t("font_large");
    return sizeKey;
  };

  // Translations for font styles
  const getTranslatedFontStyleLabel = (styleKey: string) => {
    if (styleKey === "Lato") return i18n.t("font_lato");
    if (styleKey === "Poppins") return i18n.t("font_poppins");
    if (styleKey === "Arial") return i18n.t("font_arial");
    return styleKey;
  };

  const renderDropdown = (
    title: string,
    open: boolean,
    setOpen: any,
    data: string[],
    selected: string,
    onSelect: (item: string) => void,
    type: "style" | "size"
  ) => (
    <View style={styles.dropdownWrapper}>
      <Pressable
        style={styles.dropdownHeader}
        onPress={() => setOpen(!open)}
      >
        <Text
          style={[
            styles.dropdownHeaderText,
            {
              fontFamily: getFontFamily(fontFamily, "medium"),
              fontSize: fontSize + 2,
            },
          ]}
        >
          {title}
        </Text>
        <Icon
          name={open ? "chevron-up" : "chevron-down"}
          size={20}
          color="#fff"
        />
      </Pressable>

      <View
        style={[
          styles.dropdownBody,
          !open && styles.dropdownHidden,
          {
            backgroundColor: isLight ? "#fff" : "#1a1a1a",
            borderColor: isLight ? "#1E2A78" : "#121212",
          },
        ]}
        pointerEvents={open ? "auto" : "none"}
      >
        {data.map((item) => {
          const displayText =
            type === "size"
              ? getTranslatedSizeLabel(item)
              : type === "style"
              ? getTranslatedFontStyleLabel(item)
              : item;

          return (
            <Pressable
              key={item}
              style={[
                styles.option,
                item === selected && styles.selectedOption,
                item === data[data.length - 1] && styles.lastOption,
                item === selected &&
                  item === data[data.length - 1] &&
                  styles.lastSelectedOption,
              ]}
              onPress={() => {
                onSelect(item);
                setOpen(false);
              }}
            >
              <Text
                style={[
                  styles.optionText,
                  {
                    fontFamily: getFontFamily(fontFamily, "bold"),
                    fontSize,
                    color:
                      item === selected
                        ? "#fff"
                        : isLight
                        ? "#1E2A78"
                        : "#E0E0E0",
                  },
                ]}
              >
                {displayText}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );

  return (
    <View key={reloadKey} style={{ flex: 1 }}>
      <LinearGradient
        colors={["#FF2E4C", "#1E2A78"]}
        style={styles.gradient}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back" size={28} color="#fff" />
          </TouchableOpacity>

          <Text
            style={[
              styles.headerTitle,
              {
                fontFamily: getFontFamily(fontFamily, "bold"),
                fontSize: fontSize + 6,
              },
            ]}
          >
            {i18n.t("fonts")}
          </Text>
        </View>

        {/* Card */}
        <View
          style={[
            styles.card,
            { backgroundColor: isLight ? "#fff" : "#1a1a1a" },
          ]}
        >
          <Text
            style={[
              styles.title,
              {
                fontFamily: getFontFamily(fontFamily, "semibold"),
                fontSize: 24,
                color: isLight ? "#1E2A78" : "#E0E0E0",
              },
            ]}
          >
            {i18n.t("font_style_and_size")}
          </Text>

          {/* Font Style Dropdown */}
          {renderDropdown(
            i18n.t("font_style"),
            openStyle,
            setOpenStyle,
            FONT_STYLES,
            fontFamily,
            (item) => setFontFamily(item as "Lato" | "Poppins" | "Arial"),
            "style"
          )}

          {/* Font Size Dropdown */}
          {renderDropdown(
            i18n.t("font_size"),
            openSize,
            setOpenSize,
            FONT_SIZES,
            Object.keys(FONT_SIZE_MAP).find(
              (key) => FONT_SIZE_MAP[key] === fontSize
            ) || "Medium",
            (item) => setFontSize(FONT_SIZE_MAP[item]),
            "size"
          )}
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
    gap: 10,
    top:18,
    
  },

  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    left:30
  },

  card: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: "20%",
    padding: 30,
  },

  title: {
    textAlign: "center",
    marginBottom: 35,
    marginTop:20
  },

  dropdownWrapper: {
    marginBottom: 30,
  },

  dropdownHeader: {
    height: 50,
    backgroundColor: "#1E2A78",
    borderRadius: 10,
    width: "95%",
    alignSelf: "center",
    paddingHorizontal: 26,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 2,
  },

  dropdownHeaderText: {
    color: "#fff",
    flex: 1,
    textAlign: "center",
   
    
  },

  dropdownHidden: {
    height: 0,
    overflow: "hidden",
  },

  dropdownBody: {
    marginTop: -2,
    alignSelf: "center",
    width: "83%",
    borderWidth: 1,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    zIndex: 1,
  },

  option: {
    height: 42,
    justifyContent: "center",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },

  lastOption: {
    borderBottomWidth: 0,
  },

  lastSelectedOption: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },

  optionText: {
    textAlign: "center",
  },

  selectedOption: {
    backgroundColor: "rgba(30,42,120,0.54)",
  },
});









