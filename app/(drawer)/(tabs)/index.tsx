import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import ScreenWrapper from "@/components/ScreenWrapper";

// ... existing imports
const bookingPosts = [
  {
    id: "b1",
    username: "bookinguser1",
    profilePic:
      "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1200",
    image:
      "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1200",
    caption: "Booked a nice villa!",
    likes: 92,
  },
  {
    id: "b2",
    username: "bookinguser2",
    profilePic:
      "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1200",
    image:
      "https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=1200",
    caption: "Weekend trip booked 🔥",
    likes: 210,
  },
];

const discoverPosts = [
  {
    id: "d1",
    username: "discoverguy",
    profilePic:
      "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1200",
    image:
      "https://images.pexels.com/photos/2745956/pexels-photo-2745956.jpeg?auto=compress&cs=tinysrgb&w=1200",
    caption: "Just discovered this hidden gem!",
    likes: 180,
  },
  {
    id: "d2",
    username: "exploregal",
    profilePic:
      "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1200",
    image:
      "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1200",
    caption: "Found this amazing cafe in Paris 😍",
    likes: 300,
  },
];

export default function FeedsScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Booking");

  const HeaderTabs = () => (
    <View className="flex-row bg-[#232121] p-2  rounded-full">
      {["Booking", "Discover"].map((tab) => (
        <Pressable
          key={tab}
          className={`px-4 py-2 rounded-full ${
            selectedTab === tab ? "bg-white" : "bg-transparent"
          }`}
          onPress={() => setSelectedTab(tab)}
        >
          <Text
            className={`text-sm font-medium ${
              selectedTab === tab ? "text-black" : "text-white"
            }`}
          >
            {tab}
          </Text>
        </Pressable>
      ))}
    </View>
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);

  const postsToShow = selectedTab === "Booking" ? bookingPosts : discoverPosts;

  return (
    <ScreenWrapper>
      <FlatList
        data={postsToShow}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="flex-1 flex-row justify-center items-center px-10 my-4">
            <HeaderTabs />
          </View>
        }
        renderItem={({ item }) => (
          <View className="mb-6">
            {/* Header */}
            <View className="flex-row items-center px-4 py-2 rounded-md ">
              <Image
                source={{ uri: item.profilePic }}
                className="w-10 h-10 rounded-full"
                style={{ borderRadius: 20 }}
              />
              <Text className="ml-3 font-semibold text-white">
                {item.username}
              </Text>
            </View>

            {/* Image */}
            <Image
              source={{ uri: item.image }}
              className="w-full h-96"
              resizeMode="cover"
            />

            {/* Actions */}
            <View className="flex-row px-4 py-2 space-x-4 mt-5 gap-5 mb-3">
              <Feather name="heart" size={24} color="white" />
              <Feather name="message-circle" size={24} color="white" />
              <Feather name="send" size={24} color="white" />
            </View>

            {/* Likes */}
            <Text className="px-4 font-semibold text-gray-100">
              {item.likes} likes
            </Text>

            {/* Caption */}
            <Text className="px-4 text-gray-200 mt-1">
              <Text className="font-semibold">{item.username} </Text>
              {item.caption}
            </Text>
          </View>
        )}
      />
    </ScreenWrapper>
  );
}
