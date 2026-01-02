export type FontWeightType = "regular" | "bold" | "semibold" | "medium";

export const getFontFamily = (
  family: "Lato" | "Poppins" | "Arial" ,
  weight: FontWeightType = "regular"
) => {
  if (family === "Arial") {
    return "Arial"; // system font
  }

  const FONT_MAP: any = {
    Lato: {
      regular: "Lato-Regular",
      bold: "Lato-Bold",
      medium: "Lato-Medium",
      semibold: "Lato-Semibold"
    },
    Poppins: {
      regular: "Poppins-Regular",
      semibold: "Poppins-SemiBold",
      bold: "Poppins-Bold",
      medium: "Poppins-Medium",
    },

  };

  return (
     FONT_MAP[family]?.[weight] || 
     FONT_MAP[family]?.regular ||
     family
    );
};
