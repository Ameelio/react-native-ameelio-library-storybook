import React from "react";
import { Text } from "react-native";
import {
  calculateColor,
  CustomTextProps,
  SCALE_CONSTANT,
  TypographyColors,
} from "./Constants";

interface Props extends CustomTextProps {
  size?: 1 | 2 | 3;
  bold?: boolean;
}

const Body: React.FC<Props> = ({
  size,
  style,
  children,
  adjustSize,
  numLines,
  align,
  fontSize,
  color,
  bold,
}: Props) => {
  let finalSize = fontSize;
  if (!finalSize) {
    switch (size) {
      case 1:
        finalSize = 16 * SCALE_CONSTANT;
        break;
      case 2:
        finalSize = 14 * SCALE_CONSTANT;
        break;
      case 3:
      default:
        finalSize = 12 * SCALE_CONSTANT;
        break;
    }
  }

  const fontFamily = bold ? "Poppins_600SemiBold" : "Poppins_400Regular";

  let colorType: TypographyColors =
    color || (size === 1 ? "default" : "secondary");
  let calculatedColor = calculateColor(colorType);

  return (
    <Text
      style={[
        {
          fontSize: finalSize,
          fontFamily,
          textAlign: align,
          color: calculatedColor,
        },
        style,
      ]}
      adjustsFontSizeToFit={adjustSize}
      numberOfLines={numLines}
    >
      {children}
    </Text>
  );
};

export default Body;
