// import React, { createContext, useContext, useState } from "react";

// type FontContextType = {
//   //fontStyle: string;
//   fontFamily: "Lato" | "Poppins" | "Arial" ;
//   fontSize: number;
//   //setFontStyle: (font: string) => void;
//   setFontFamily: (font: "Lato" | "Poppins" | "Arial" ) => void;
//   setFontSize: (size: number) => void;
// };

// const FontContext = createContext<FontContextType | undefined>(undefined);

// export const FontProvider = ({ children }: { children: React.ReactNode }) => {

//     const [fontFamily, setFontFamily] =
//     useState<"Lato" | "Poppins" | "Arial" >("Lato"); // ✅ default Lato
//  // const [fontStyle, setFontStyle] = useState("Lato");
//   const [fontSize, setFontSize] = useState(16);

//   return (
//     <FontContext.Provider
//       value={{ fontFamily, fontSize, setFontFamily, setFontSize }}
//     >
//       {children}
//     </FontContext.Provider>
//   );
// };

// export const useFont = () => {
//   const context = useContext(FontContext);
//   if (!context) {
//     throw new Error("useFont must be used inside FontProvider");
//   }
//   return context;
// };



import React, { createContext, useContext, useState } from "react";

// type FontContextType = {
//   fontFamily: string;
//   fontSize: number;
//   setFontFamily: (font: string) => void;
//   setFontSize: (size: number) => void;
// };

/* 1️⃣ Create Context */
const FontContext = createContext<any>(null);      //Creates a global store for font data.

//const FontContext = createContext<FontContextType | undefined>(undefined);

/* 2️⃣ Provider Component */
export const FontProvider = ({ children }: { children: React.ReactNode }) => {
//export const FontProvider = ({ children }: any) => {
  const [fontFamily, setFontFamily] = useState("Lato");
  const [fontSize, setFontSize] = useState(16);

  return (
    <FontContext.Provider
      value={{
        fontFamily,
        fontSize,
        setFontFamily,
        setFontSize,
      }}
    >
      {children}
    </FontContext.Provider>
  );
};

/* 3️⃣ Custom Hook */
export const useFont = () => {       //Allows any screen to read or change font values
  return useContext(FontContext);
};

// export const useFont = () => {
//   const context = useContext(FontContext);
//   if (!context) {
//     throw new Error("useFont must be used inside FontProvider");
//   }
//   return context;
// };




// import React, { createContext, useContext, useState } from "react";

// type FontContextType = {
//   fontFamily: string;
//   fontSize: number;
//   setFontFamily: (font: string) => void;
//   setFontSize: (size: number) => void;
// };


// //const FontContext = createContext<FontContextType | undefined>(undefined);

// /* 2️⃣ Provider Component */
// export const FontProvider = ({ children }: { children: React.ReactNode }) => {
// //export const FontProvider = ({ children }: any) => {
//   const [fontFamily, setFontFamily] = useState("Lato");
//   const [fontSize, setFontSize] = useState(16);

//   return (
//     <FontContext.Provider
//       value={{
//         fontFamily,
//         fontSize,
//         setFontFamily,
//         setFontSize,
//       }}
//     >
//       {children}
//     </FontContext.Provider>
//   );
// };


// export const useFont = () => {
//   const context = useContext(FontContext);
//   if (!context) {
//     throw new Error("useFont must be used inside FontProvider");
//   }
//   return context;
// };