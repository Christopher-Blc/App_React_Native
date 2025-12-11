import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { ButtonRectangular } from './src/components/ButtonRectangular';
import { TextInputRectangle } from './src/components/textInputRectangle';
import { PasswordInputRectangle } from './src/components/PasswordInputRectangle';
import { LoginCard } from './src/components/LoginCard';


export default function App() {
  return (
    <View style={styles.screen}>
      {/* <ButtonRectangular 
      text="Google" 
      colorBG='#ffffff' 
      colorTxt={'#000000ff'} 
      colorBorder='#575757ff'
      icon='home'
      iconSize={24}
      colorIcon='#ff2222ff'
      />

<View style={{ marginBottom: 20 }} />      

      <ButtonRectangular 
      text="boton de chris" 
      colorBG='#0025b7ff' 
      colorTxt={'#ffffff'} 
      />

      <View style={{ marginBottom: 20 }} />

      <TextInputRectangle></TextInputRectangle>
            <View style={{ marginBottom: 20 }} />

      <PasswordInputRectangle></PasswordInputRectangle> */}

      <LoginCard></LoginCard>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#525252ff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
