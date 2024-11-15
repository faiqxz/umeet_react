import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Redirect, Slot, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
//   import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// //   import Terdaftar from "./Terdaftar";
// //   import Riwayat from "./Riwayat";
// //   import Sertifikat from "./Sertifikat";
import { useColorScheme } from "@/hooks/useColorScheme";
import AuthProvider, { useAuth } from "@/provider/AuthProvider";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// Create Bottom Tab Navigator

export default function RootLayout() {
    const colorScheme = useColorScheme();

    // Load custom fonts
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
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

    // const {user} = useAuth()
    // if(!user){
    //   return <Redirect href="/(auth)/signin"/>
    // }

    return (
        <AuthProvider>
            <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
                <Slot />
            </ThemeProvider>
        </AuthProvider>
    );
}
