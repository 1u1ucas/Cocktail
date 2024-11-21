import { Tabs, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import React from 'react';




export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home', headerShown: false, 
      tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} /> }}/>
      <Tabs.Screen name="cocktails" options={{ title: 'Cocktails', headerShown: false,
        tabBarIcon: ({ color, size }) => <Ionicons name="beer" size={size} color={color} /> }}/>
      <Tabs.Screen name="[id]" options={{ title:'id', href: null }}/>

    </Tabs>
  )
}