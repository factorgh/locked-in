import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import OnBoardingCards from "@/components/OnBoardingCards";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";

const Stylist = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const router = useRouter();
  const handleActiveTab = (index: number) => {
    setActiveTab(index);
  };
  const data: string[] = [
    "Custom Styles",
    "Dreadlocs",
    "Knotless Braids",
    "Spanish Twists",
    "Weave-Ons",
    "Curls Ons",
  ];

  const handleNext = () => {
    router.push("/onboarding/prices");
  };

  return (
    <ScreenWrapper>
      <View className="flex-1 justify-between">
        <View>
          <Text className="text-white text-2xl">Stylist</Text>
          <Text className="text-white mt-2">
            What styles are you good with ?
          </Text>

          <View className="flex flex-wrap justify-center gap-3 mt-5">
            {data.map((item, index) => (
              <View className="w-full" key={index}>
                <OnBoardingCards
                  activeTab={activeTab}
                  index={index}
                  onPress={handleActiveTab}
                  title={item}
                  icon="add-outline"
                />
              </View>
            ))}
          </View>
        </View>
        <CustomButton onPress={handleNext} title="Next" />
      </View>
      {/* Button at the bottom */}
    </ScreenWrapper>
  );
};

export default Stylist;

const styles = StyleSheet.create({});
