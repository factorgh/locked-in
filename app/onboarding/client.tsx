import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import OnBoardingCards from "@/components/OnBoardingCards";
import CustomButton from "@/components/CustomButton";

const client = () => {
  const data: string[] = [
    "Dreadlocs",
    "Knotless Braids",
    "Spanish Twists",
    "Weave-Ons",
    "Curls Ons",
  ];
  return (
    <ScreenWrapper>
      <View className="flex-1 justify-between">
        {/* Top section */}
        <View>
          <Text className="text-white text-2xl">Client</Text>
          <Text className="text-white mt-2">
            Tell us your favourite hairdo's
          </Text>
          <View className="flex flex-wrap justify-center gap-3 mt-5">
            {data.map((item, index) => (
              <View className="w-full" key={index}>
                <OnBoardingCards title={item} />
              </View>
            ))}
          </View>
        </View>

        {/* Button at the bottom */}
        <CustomButton title="Next" />
      </View>
    </ScreenWrapper>
  );
};

export default client;

const styles = StyleSheet.create({});
