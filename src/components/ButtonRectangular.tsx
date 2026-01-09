import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

// Icon type (optional)
interface ButtonRectangularProps {
  icon?: keyof typeof Feather.glyphMap; // hay q pasarle un string pero que haga match exactamente con el nombre del icono
  text: string;
  colorBG: string,
  colorTxt: string,
  colorBorder?: string,
  colorIcon?: string,
  iconSize?: number
  widthButton?: number | `${number}%`;
  onPressed?: () => void;
}

export const ButtonRectangular = ({
  icon,
  text,
  colorBG,
  colorTxt,
  colorBorder,
  colorIcon = '#ffffff',
  iconSize = 20,
  widthButton = "100%",
  onPressed,

}: ButtonRectangularProps) => {
  const hasBorder = !!colorBorder;
  return (
    
    <Pressable
      onPress={onPressed}
      style={[
        styles.button,
        {
          backgroundColor: colorBG,
          width: widthButton,
          borderColor: hasBorder ? colorBorder : "transparent",
          borderWidth: hasBorder ? 1 : 0,
        },
      ]}
    >

        {icon ? <Feather name={icon} color={colorIcon} size={iconSize} style={{ marginRight: 12 }}/> : null}
        <Text style={[styles.buttonText , {color: colorTxt}]}>{text}</Text>
    </Pressable>
  );
};



const styles = StyleSheet.create({
  
  button: {
    height: 60,
    borderRadius: 12,
    flexDirection: "row",   
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
  }
});
