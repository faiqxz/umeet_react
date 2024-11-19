import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Redirect, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import AuthProvider, { useAuth } from "@/provider/AuthProvider";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// Create Bottom Tab Navigator

export default function RootLayout() {

  const { user } = useAuth()
  if (!user) {
    return <Redirect href="/(auth)/signin" />
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />

      <Stack.Screen
        name="Terdaftar"
        options={{
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerShadowVisible: true,
          headerTintColor: "#000",
          title: "Kamu terdaftar di sini",
          headerTitleStyle: {
            fontFamily: 'Outfit-Semibold',
            fontSize: 18,
          },
        }}
      />

      <Stack.Screen
        name="Favorit"
        options={{
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerShadowVisible: true,
          headerTintColor: "#000",
          title: "Jangan lewatkan event favoritmu!",
          headerTitleStyle: {
            fontFamily: 'Outfit-Semibold',
            fontSize: 18,
          },
        }}
      />

      <Stack.Screen
        name="Riwayat"
        options={{
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerShadowVisible: true,
          headerTintColor: "#000",
          title: "Kamu pernah mengunjungi ini",
          headerTitleStyle: {
            fontFamily: 'Outfit-Semibold',
            fontSize: 18,
          },
        }}
      />

      <Stack.Screen
        name="Sertifikat"
        options={{
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerShadowVisible: true,
          headerTintColor: "#000",
          title: "Unduh sertifikatmu disini!",
          headerTitleStyle: {
            fontFamily: 'Outfit-Semibold',
            fontSize: 18,
          },
        }}
      />

      <Stack.Screen
        name="Detail"
        options={{
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerShadowVisible: true,
          headerTintColor: "#000",
          title: "SI FEST 2024",
          headerTitleStyle: {
            fontFamily: 'Outfit-Semibold',
            fontSize: 18,
          },
        }}
      />

      <Stack.Screen
        name="Lainnya"
        options={{
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerShadowVisible: true,
          headerTintColor: "#000",
          title: "Selengkapnya",
          headerTitleStyle: {
            fontFamily: 'Outfit-Semibold',
            fontSize: 18,
          },
        }}
      />

      <Stack.Screen
        name="Profil"
        options={{
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerShadowVisible: true,
          headerTintColor: "#000",
          title: "Profil kamu",
          headerTitleStyle: {
            fontFamily: 'Outfit-Semibold',
            fontSize: 18,
          },
        }}
      />

    </Stack>
  );
}
