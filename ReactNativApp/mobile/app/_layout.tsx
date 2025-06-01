import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SafeScreen from './../components/SafeScreen';
import { StatusBar } from "expo-status-bar"; 

import styles from './../assets/styles/create.styles';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeScreen>
        <Stack screenOptions={{headerShown:false}}>
          <Stack.Screen name="index"/>
        </Stack>
      </SafeScreen>
      <StatusBar style="dark"/>
    </SafeAreaProvider>
   
  )
 
}
