import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';  // Only one import for SplashScreen
import { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Beranda from './Beranda';
import Terdaftar from './Terdaftar';
import Riwayat from './Riwayat';
import Sertifikat from './Sertifikat';
import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  // Load custom fonts
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // Hide splash screen when fonts are loaded
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // Return null if fonts are not loaded yet
  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* No NavigationContainer here, expo-router handles it */}
      <Tab.Navigator>
        <Tab.Screen name="Beranda" component={Beranda} />
        <Tab.Screen name="Terdaftar" component={Terdaftar} />
        <Tab.Screen name="Riwayat" component={Riwayat} />
        <Tab.Screen name="Sertifikat" component={Sertifikat} />
      </Tab.Navigator>
    </ThemeProvider>
  );
}
