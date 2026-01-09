import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0f172a'
        },
        headerTintColor: '#ffffff',
        title: 'Mi App'
      }}
    />
  );
}
