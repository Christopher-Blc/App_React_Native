import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from "@expo/vector-icons";

// Props for a customizable rectangular input
interface TextInputRectangleProps {
  placeholder?: string;
  icon?: keyof typeof Feather.glyphMap;   // <--- custom icon
  iconColor?: string;
  iconSize?: number;
  iconSpacing?: number;
  textColor?: string;
  placeholderColor?: string;
  borderColor?: string;
  bgColor?: string;
  width?: number | `${number}%`;
  height?: number;
}

export const TextInputRectangle = ({
  placeholder = "nombre@ejemplo.com",
  icon = "mail",
  iconColor = "#7d7d7d",
  iconSize = 20,
  iconSpacing = 12,
  textColor = "#333333",
  placeholderColor = "#7d7d7d",
  borderColor = "#d0d7e2",
  bgColor = "#f7f9fc",
  width = 350,
  height = 55
}: TextInputRectangleProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: bgColor,
          borderColor: borderColor,
          width: width,
          height: height,
        },

      ]}
    >
      {/* Optional icon */}
      {icon && (
        <Feather
          name={icon}
          size={iconSize}
          color={iconColor}
          style={{ marginRight: iconSpacing }}
        />
      )}

      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        style={[styles.input, { color: textColor }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderWidth: 1.5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});
