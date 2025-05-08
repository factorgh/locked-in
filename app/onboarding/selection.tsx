// screens/SetPricesScreen.jsx
import CustomButton from "@/components/CustomButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import { useRouter } from "expo-router";
import { View, Text, TextInput, Pressable, ScrollView } from "react-native";

export default function SetPricesScreen() {
  const router = useRouter();
  const services = ["Washing", "Loc Retwists", "French Knotless"];

  const handleNext = () => {
    router.push("/onboarding/availability");
  };
  return (
    <ScreenWrapper>
      <View className="flex-1 justify-between">
        <View>
          <Text className="text-white text-lg font-semibold mb-4">
            Adjust to your liking
          </Text>
          {services.map((service, index) => (
            <View
              key={index}
              className="bg-neutral-800 rounded-xl px-4 py-3 mb-3"
            >
              <Text className="text-white mb-2">{service}</Text>
              <View className="flex-row justify-between items-center">
                <TextInput
                  className="text-white bg-neutral-700 px-2 py-2 rounded w-24"
                  placeholder="$50.00"
                  placeholderTextColor="#ccc"
                  keyboardType="numeric"
                />
                <TextInput
                  className="text-white bg-neutral-700 px-2 py-2 rounded w-24"
                  placeholder="4 Hours"
                  placeholderTextColor="#ccc"
                />
                <Text className="text-blue-400 text-lg">Add Notes</Text>
              </View>
            </View>
          ))}
        </View>
        <CustomButton onPress={handleNext} title="Next" />
      </View>
    </ScreenWrapper>
  );
}
