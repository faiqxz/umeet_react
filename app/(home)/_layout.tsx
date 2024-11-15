import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Redirect, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Terdaftar from "./Terdaftar";
import Riwayat from "./Riwayat";
import Sertifikat from "./Sertifikat";
import { useColorScheme } from "@/hooks/useColorScheme";
import AuthProvider, { useAuth } from "@/provider/AuthProvider";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// Create Bottom Tab Navigator

export default function RootLayout() {
  
  const {user} = useAuth()
  if(!user){
    return <Redirect href="/(auth)/signin"/>
  }
  
  return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="Terdaftar"
          options={{
            headerStyle: {
              backgroundColor: "#f9f9f9",
            },
            headerShadowVisible: false,
            headerTintColor: "#3470A2",
          }}
        />
        <Stack.Screen
          name="Favorit"
          options={{
            headerStyle: {
              backgroundColor: "#f9f9f9",
            },
            headerShadowVisible: true,
            headerTintColor: "#3470A2",
          }}
        />
        <Stack.Screen
          name="Riwayat"
          options={{
            headerStyle: {
              backgroundColor: "#f9f9f9",
            },
            headerShadowVisible: false,
            headerTintColor: "#3470A2",
          }}
        />
        <Stack.Screen
          name="Sertifikat"
          options={{
            headerStyle: {
              backgroundColor: "#f9f9f9",
            },
            headerShadowVisible: false,
            headerTintColor: "#3470A2",
          }} />
        <Stack.Screen
          name="Detail"
          options={{
            headerStyle: {
              backgroundColor: "#f9f9f9",
            },
            headerShadowVisible: false,
            headerTintColor: "#3470A2",
          }} />
        <Stack.Screen
          name="Lainnya"
          options={{
            headerStyle: {
              backgroundColor: "#f9f9f9",
            },
            headerShadowVisible: false,
            headerTintColor: "#3470A2",
          }} />
          <Stack.Screen
          name="Profil"
          options={{
            headerStyle: {
              backgroundColor: "#f9f9f9",
            },
            headerShadowVisible: false,
            headerTintColor: "#3470A2",
          }} />
      </Stack>
  );
}
