import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import ScreenWrapper from "@/components/ScreenWrapper";

export default function ProfileScreen() {
  return (
    <ScreenWrapper>
      <ScrollView>
        {/* Profile Header */}
        <View className="items-center px-4 pt-6">
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=8" }}
            className="w-24 h-24 rounded-full mb-4"
          />
          <Text className="text-xl font-bold">Jane Doe</Text>
          <Text className="text-gray-500">@janedoe</Text>
          <Text className="text-center mt-2 text-sm text-gray-600">
            Designer. Coffee lover. Dreamer. 🧠☕✨
          </Text>

          {/* Stats */}
          <View className="flex-row mt-4 space-x-6">
            <View className="items-center">
              <Text className="font-bold text-base">210</Text>
              <Text className="text-gray-500 text-sm">Posts</Text>
            </View>
            <View className="items-center">
              <Text className="font-bold text-base">5.2k</Text>
              <Text className="text-gray-500 text-sm">Followers</Text>
            </View>
            <View className="items-center">
              <Text className="font-bold text-base">300</Text>
              <Text className="text-gray-500 text-sm">Following</Text>
            </View>
          </View>

          {/* Buttons */}
          <View className="flex-row mt-5 space-x-3">
            <TouchableOpacity className="border border-gray-300 px-5 py-2 rounded-full">
              <Text className="text-sm font-medium">Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-black px-5 py-2 rounded-full">
              <Text className="text-white text-sm font-medium">Share</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Divider */}
        <View className="h-px bg-gray-200 my-6" />

        {/* Optional: Gallery or Feed */}
        <View className="px-4">
          <Text className="text-lg font-semibold mb-2">Recent Posts</Text>
          <View className="flex-row flex-wrap justify-between">
            {[...Array(6)].map((_, index) => (
              <Image
                key={index}
                source={{
                  uri: `https://picsum.photos/200?random=${index + 1}`,
                }}
                className="w-[32%] h-32 mb-2 rounded-md"
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
