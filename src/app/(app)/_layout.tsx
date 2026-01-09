import { Feather } from '@expo/vector-icons';
import {  Tabs } from 'expo-router';

export default function AppLayout() {
  return (
    <Tabs screenOptions={{headerShown: false}}>
        <Tabs.Screen 
            name="home"
            options={{tabBarLabel: 'Home' , tabBarIcon: ({color , size}) => (<Feather name="home" color={color} size={size} />)
        
        }}/>

        <Tabs.Screen
        name="clientes"
        options={{tabBarLabel: 'Clientes' , tabBarIcon: ({color , size}) => (<Feather name='users' color={color} size={size} />)}}
        />
    </Tabs>
  );
}
