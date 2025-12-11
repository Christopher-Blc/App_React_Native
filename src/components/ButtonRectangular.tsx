import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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
}

export const ButtonRectangular = ({
  icon,
  text,
  colorBG,
  colorTxt,
  colorBorder = 'transparent',
  colorIcon = '#ffffff',
  iconSize = 20

}: ButtonRectangularProps) => {
  return (
    <TouchableOpacity style={[styles.button , {backgroundColor: colorBG} , {borderColor: colorBorder}]}>

        {icon ? <Feather name={icon} color={colorIcon} size={iconSize} style={{ marginRight: 12 }}/> : null}
        <Text style={[styles.buttonText , {color: colorTxt}]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  
  button: {
    width: 400,
    height: 60,
    borderRadius: 12,
    flexDirection: "row",   // <-- THIS MAKES ICON + TEXT LINE UP LEFT→RIGHT
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
  }
});
