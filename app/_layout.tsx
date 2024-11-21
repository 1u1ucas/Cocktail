import { Tabs, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import React from 'react';




export default function TabsLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false}}/>
    </Stack>

  )
}