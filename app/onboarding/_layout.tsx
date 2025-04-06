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
        }}
      />
    </Stack>
  );
};

export default OonboardLayout;

const styles = StyleSheet.create({});
