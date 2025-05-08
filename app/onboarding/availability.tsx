// screens/AvailabilityScreen.jsx
import CustomButton from "@/components/CustomButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import { useRouter } from "expo-router";
import { View, Text, TextInput, ScrollView, Pressable } from "react-native";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function AvailabilityScreen() {
  const router = useRouter();
  const handleSave = () => {
    router.push("/onboarding/client_meeting");
  };
  return (
    <ScreenWrapper>
      <View className="flex-1 justify-between">
        <View>
          <Text className="text-white text-lg font-semibold mb-4">
            Your Availability
          </Text>
          {days.map((day, index) => (
            <View
              key={index}
              className="flex-row items-center justify-between mb-4"
            >
              <Text className="text-white w-20">{day}</Text>
              <TextInput
                className="bg-neutral-700 text-white px-3 py-2 rounded w-24"
                placeholder="09:00"
                placeholderTextColor="#ccc"
              />
              <TextInput
                className="bg-neutral-700 text-white px-3 py-2 rounded w-24"
                placeholder="18:00"
                placeholderTextColor="#ccc"
              />
            </View>
          ))}
        </View>
        <CustomButton onPress={handleSave} title="Save Changes" />
      </View>
    </ScreenWrapper>
  );
}
