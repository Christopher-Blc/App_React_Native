import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

interface TextInputRectangleProps {
  placeholder?: string;

  iconLeft?: keyof typeof Feather.glyphMap;

  iconRight?: keyof typeof Feather.glyphMap;
  onPressIconRight?: () => void;

  iconRightShow?: keyof typeof Feather.glyphMap;
  iconRightHide?: keyof typeof Feather.glyphMap;

  isSecure?: boolean;

  iconColor?: string;
  iconSize?: number;

  textColor?: string;
  placeholderColor?: string;
  borderColor?: string;
  bgColor?: string;

  width?: number | `${number}%`;
  height?: number;

  onChangeText?: (text: string) => void;
  value?: string;

  keyboardType?: "default" | "email-address" | "phone-pad";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
}

export const TextInputRectangle = ({
  isSecure = false,

  placeholder = isSecure ? "password" : "input text",
  iconLeft,

  iconRight,
  onPressIconRight,

  iconRightShow = "eye",
  iconRightHide = "eye-off",

  iconColor = "#7d7d7d",
  iconSize = 20,

  textColor = "#333333",
  placeholderColor = "#7d7d7d",
  bgColor = "#f7f9fc",

  width = "100%",
  height = 60,

  onChangeText,
  value,

  keyboardType = "default",
  autoCapitalize = "sentences",
}: TextInputRectangleProps) => {
  const [hidden, setHidden] = useState(isSecure);

  return (
    <TextInput
      mode="outlined"
      placeholder={placeholder}
      placeholderTextColor={placeholderColor}
      secureTextEntry={isSecure && hidden}
      activeOutlineColor="#3f60bbff"
      onChangeText={onChangeText}
      value={value}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      style={[
        styles.input,
        {
          width,
          height,
          color: textColor,
          backgroundColor: bgColor,
        },
      ]}
      theme={{ roundness: 16 }}
      left={
        iconLeft ? (
          <TextInput.Icon
            icon={() => (
              <Feather name={iconLeft} size={iconSize} color={iconColor} />
            )}
          />
        ) : null
      }
      right={
        isSecure ? (
          <TextInput.Icon
            onPress={() => setHidden(!hidden)}
            icon={() => (
              <Feather
                name={hidden ? iconRightShow : iconRightHide}
                size={iconSize}
                color={iconColor}
              />
            )}
          />
        ) : iconRight ? (
          <TextInput.Icon
            onPress={onPressIconRight}
            icon={() => (
              <Feather name={iconRight} size={iconSize} color={iconColor} />
            )}
          />
        ) : null
      }
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    borderRadius: 30,
    paddingLeft: 0,
    outlineColor: "#d0d7e2",
  },
});
