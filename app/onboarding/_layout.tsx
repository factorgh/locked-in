import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const OonboardLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="client"
        options={{
          presentation: "modal",
          animation: "slide_from_bottom",
        }}
      />
      <Stack.Screen name="availability" options={{ headerShown: false }} />
      <Stack.Screen name="prices" options={{ headerShown: false }} />
      <Stack.Screen name="selection" options={{ headerShown: false }} />
      <Stack.Screen name="client_meeting" options={{ headerShown: false }} />
    </Stack>
  );
};

export default OonboardLayout;

const styles = StyleSheet.create({});
