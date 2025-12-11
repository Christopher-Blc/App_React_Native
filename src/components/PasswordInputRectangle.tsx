import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";

interface PasswordInputRectangleProps {
  placeholder?: string;
  iconLeft?: keyof typeof Feather.glyphMap;
  iconRightShow?: keyof typeof Feather.glyphMap;
  iconRightHide?: keyof typeof Feather.glyphMap;

  iconColor?: string;
  iconSize?: number;

  bgColor?: string;
  borderColor?: string;
  placeholderColor?: string;
  textColor?: string;

  width?: number | `${number}%`;
  height?: number;
}

export const PasswordInputRectangle = ({
  placeholder = "Contraseña",
  iconLeft = "lock",
  iconRightShow = "eye",
  iconRightHide = "eye-off",

  iconColor = "#7d7d7d",
  iconSize = 20,

  bgColor = "#f7f9fc",
  borderColor = "#d0d7e2",
  placeholderColor = "#7d7d7d",
  textColor = "#333333",

  width = 350,
  height = 55,
}: PasswordInputRectangleProps) => {
  
  const [hidden, setHidden] = useState(true);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: bgColor, borderColor, width, height }
      ]}
    >
      {/* Left icon */}
      <Feather
        name={iconLeft}
        size={iconSize}
        color={iconColor}
        style={{ marginRight: 12 }}
      />

      {/* Text input */}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        secureTextEntry={hidden}
        style={[styles.input, { color: textColor }]}
      />

      {/* Toggle button */}
      <TouchableOpacity onPress={() => setHidden(!hidden)}>
        <Feather
          name={hidden ? iconRightShow : iconRightHide}
          size={iconSize}
          color={iconColor}
        />
      </TouchableOpacity>
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
  }
});
