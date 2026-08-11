import React, { useCallback } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts as usePoppinsFonts,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import {
  useFonts as useInterFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

import HomeScreen from "./src/screens/HomeScreen";
import { colors } from "./src/theme";

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function App() {
  const [poppinsLoaded] = usePoppinsFonts({
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  const [interLoaded] = useInterFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  const fontsLoaded = poppinsLoaded && interLoaded;

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: colors.background }} onLayout={onLayoutRootView}>
        <HomeScreen />
      </View>
    </SafeAreaProvider>
  );
}
