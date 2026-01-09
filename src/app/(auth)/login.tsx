import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { LoginCard } from '../../components/LoginCard';

export default function App() {
  return (
    <View style={styles.screen}>
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