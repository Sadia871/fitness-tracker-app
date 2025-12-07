import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from '../store/store';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="exercise/[id]" options={{ title: 'Exercise Details' }} />
        <Stack.Screen name="add" options={{ title: 'Add Exercise' }} />
      </Stack>
      <StatusBar style="auto" />
    </Provider>
  );
}
