import React from "react";
import { Text, TextStyle } from "react-native";
import { CustomTextProps, SCALE_CONSTANT } from "./Constants";

interface Props extends CustomTextProps {
  weight: "regular" | "medium" | "semibold" | "bold";
  italic?: boolean;
}

const Words: React.FC<Props> = ({
  weight,
  italic,
  style,
  children,
  adjustSize,
  numLines,
  align,
  fontSize,
  color,
}: Props) => {
  const finalSize = fontSize ? fontSize : 14 * SCALE_CONSTANT;

  let fontFamily = "Poppins_400Regular";

  if (weight === "regular")
    fontFamily = italic ? "Poppins_400Regular_Italic" : "Poppins_400Regular";
  else if (weight === "medium")
    fontFamily = italic ? "Poppins_500Medium_Italic" : "Poppins_500Medium";
  else if (weight === "semibold")
    fontFamily = italic ? "Poppins_600SemiBold_Italic" : "Poppins_600SemiBold";
  else if (weight === "bold")
    fontFamily = italic ? "Poppins_700Bold_Italic" : "Poppins_700Bold";

  return (
    <Text
      style={[
        { fontSize: finalSize, fontFamily, textAlign: align, color },
        style,
      ]}
      adjustsFontSizeToFit={adjustSize}
      numberOfLines={numLines}
    >
      {children}
    </Text>
  );
};

export default Words;
