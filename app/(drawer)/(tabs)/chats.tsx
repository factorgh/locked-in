import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import ScreenWrapper from "@/components/ScreenWrapper";

type ChatUser = {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
};

type RootStackParamList = {
  ChatScreen: { userId: string };
};

const users: ChatUser[] = [
  {
    id: "1",
    name: "Alice",
    avatar: "https://i.pravatar.cc/150?img=5",
    lastMessage: "Hey, how are you?",
    time: "10:15 AM",
  },
  {
    id: "2",
    name: "Bob",
    avatar: "https://i.pravatar.cc/150?img=12",
    lastMessage: "Can we talk later?",
    time: "9:42 AM",
  },
  {
    id: "3",
    name: "Charlie",
    avatar: "https://i.pravatar.cc/150?img=18",
    lastMessage: "Meet me at 5pm!",
    time: "Yesterday",
  },
];

export default function ChatListScreen() {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <Text className="text-xl font-bold px-4 pt-4 pb-2">Chats</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="flex-row items-center px-4 py-3 border-b border-gray-200"
            onPress={() => router.push("/chat")}
          >
            <Image
              source={{ uri: item.avatar }}
              className="w-12 h-12 rounded-full mr-4"
            />
            <View className="flex-1">
              <View className="flex-row justify-between">
                <Text className="text-base font-medium text-white">
                  {item.name}
                </Text>
                <Text className="text-xs text-gray-400">{item.time}</Text>
              </View>
              <Text className="text-sm text-gray-50" numberOfLines={1}>
                {item.lastMessage}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </ScreenWrapper>
  );
}
