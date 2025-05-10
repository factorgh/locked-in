import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, AntDesign } from "@expo/vector-icons";
import ScreenWrapper from "@/components/ScreenWrapper";

const listings = [
  {
    id: "1",
    title: "Cozy Cabin in the Woods",
    location: "Lake Tahoe, CA",
    price: "$120/night",
    rating: 4.8,
    image: "https://source.unsplash.com/400x300/?cabin",
  },
  {
    id: "2",
    title: "Modern Loft Downtown",
    location: "New York, NY",
    price: "$200/night",
    rating: 4.5,
    image: "https://source.unsplash.com/400x300/?apartment",
  },
  {
    id: "3",
    title: "Beachfront Bungalow",
    location: "Malibu, CA",
    price: "$350/night",
    rating: 4.9,
    image: "https://source.unsplash.com/400x300/?beach,house",
  },
];

export default function BookingScreen() {
  return (
    <ScreenWrapper>
      {/* Header */}
      <View className="px-4 pt-4 pb-2">
        <Text className="text-2xl font-bold text-gray-900">Book Your Stay</Text>
        <Text className="text-gray-500 text-sm">
          Find unique places to stay around the world
        </Text>
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center px-4 py-2">
        <View className="flex-1 flex-row bg-gray-100 rounded-full items-center px-4 py-2">
          <Feather name="search" size={20} color="gray" />
          <TextInput
            placeholder="Search location"
            className="ml-2 flex-1 text-base text-gray-700"
            placeholderTextColor="#888"
          />
        </View>
        <TouchableOpacity className="ml-3 bg-black p-3 rounded-full">
          <Feather name="sliders" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Listings */}
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id}
        className="px-4 mt-2"
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity className="mb-6">
            <Image
              source={{ uri: item.image }}
              className="w-full h-48 rounded-xl mb-2"
              resizeMode="cover"
            />
            <View className="flex-row justify-between items-center mb-1">
              <Text className="text-lg font-semibold text-gray-900">
                {item.title}
              </Text>
              <View className="flex-row items-center">
                <AntDesign name="star" size={16} color="#facc15" />
                <Text className="ml-1 text-gray-700">{item.rating}</Text>
              </View>
            </View>
            <Text className="text-gray-500 text-sm">{item.location}</Text>
            <Text className="text-gray-900 font-medium mt-1">{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </ScreenWrapper>
  );
}
