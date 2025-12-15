import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

interface TextInputRectangleProps {
  placeholder?: string;

  iconLeft?: keyof typeof Feather.glyphMap;
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
}

export const TextInputRectangle = ({
  isSecure = false,

  placeholder = isSecure ? "password" : "input text",
  iconLeft = "mail",
  iconRightShow = "eye",
  iconRightHide = "eye-off",

  iconColor = "#7d7d7d",
  iconSize = 20,

  textColor = "#333333",
  placeholderColor = "#7d7d7d",
  bgColor = "#f7f9fc",

  width = 400,
  height = 60,
}: TextInputRectangleProps) => {
  const [hidden, setHidden] = useState(isSecure);

  return (
    <TextInput
      
      mode="outlined"
      placeholder={placeholder}
      placeholderTextColor={placeholderColor}
      secureTextEntry={isSecure && hidden}
      activeOutlineColor="#3f60bbff"

      style={[
        styles.input,
        {
          width,
          height,
          color: textColor,
          backgroundColor: bgColor,
          
        },
      ]}

      theme={{
        roundness: 16,
      }}
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
