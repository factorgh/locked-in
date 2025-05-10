import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { View, Text, Pressable } from "react-native";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";

export default function Layout() {
  const SearchButton = () => (
    <View className="bg-gray-300 rounded-full p-2 mr-5 mt-3 ">
      <Feather name="search" size={18} color="black" />
    </View>
  );
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerTitle: "",
          headerRight: () => <SearchButton />,
          headerStyle: {
            backgroundColor: "#171717",
            height: 50,
          },
          headerTintColor: "white",
        }}
      ></Drawer>
    </GestureHandlerRootView>
  );
}
