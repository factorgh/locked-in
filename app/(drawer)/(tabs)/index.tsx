import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

const dummyPosts = [
  {
    id: "1",
    username: "johndoe",
    profilePic: "https://source.unsplash.com/100x100/?man,face",
    image:
      "https://images.pexels.com/photos/27987138/pexels-photo-27987138/free-photo-of-black-women.jpeg?auto=compress&cs=tinysrgb&w=1200",
    caption: "Loving this view!",
    likes: 120,
  },
  {
    id: "2",
    username: "janedoe",
    profilePic: "https://source.unsplash.com/100x100/?woman,face",
    image:
      "https://images.pexels.com/photos/6923247/pexels-photo-6923247.jpeg?auto=compress&cs=tinysrgb&w=1200",
    caption: "Weekend getaway 😎",
    likes: 242,
  },
  {
    id: "3",
    username: "alex",
    profilePic: "https://source.unsplash.com/100x100/?person",
    image:
      "https://images.pexels.com/photos/2097629/pexels-photo-2097629.jpeg?auto=compress&cs=tinysrgb&w=1200",
    caption: "Back to the grind!",
    likes: 87,
  },
  {
    id: "4",
    username: "alex",
    profilePic: "https://source.unsplash.com/100x100/?person",
    image:
      "https://images.pexels.com/photos/1181581/pexels-photo-1181581.jpeg?auto=compress&cs=tinysrgb&w=1200",
    caption: "Back to the grind!",
    likes: 87,
  },
  {
    id: "5",
    username: "alex",
    profilePic: "https://source.unsplash.com/100x100/?person",
    image:
      "https://images.pexels.com/photos/1447939/pexels-photo-1447939.jpeg?auto=compress&cs=tinysrgb&w=1200",
    caption: "Back to the grind!",
    likes: 87,
  },
];

export default function FeedsScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [posts, setPosts] = useState(dummyPosts);
  const [activeTab, setActiveTab] = useState("discover");

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      // In real case, fetch new data here
      setPosts([...dummyPosts]); // reload dummy data
      setRefreshing(false);
    }, 1500);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View className="mb-6">
            {/* Header */}
            <View className="flex-row items-center px-4 py-2">
              <Image
                source={{ uri: item.profilePic }}
                className="w-10 h-10 rounded-full"
              />
              <Text className="ml-3 font-semibold text-gray-900">
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
            <View className="flex-row px-4 py-2 space-x-4">
              <Feather name="heart" size={24} />
              <Feather name="message-circle" size={24} />
              <Feather name="send" size={24} />
            </View>

            {/* Likes */}
            <Text className="px-4 font-semibold text-gray-900">
              {item.likes} likes
            </Text>

            {/* Caption */}
            <Text className="px-4 text-gray-700 mt-1">
              <Text className="font-semibold">{item.username} </Text>
              {item.caption}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
