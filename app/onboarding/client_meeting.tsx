import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackButton from "@/components/BackButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import OnBoardingCards from "@/components/OnBoardingCards";
import CustomButton from "@/components/CustomButton";

const client_meeting = () => {
  const data: string[] = [
    "I prefer to visit clients at their location",
    "I prefer for clients to visit me",
    "I dont mind any of the above",
  ];
  return (
    <ScreenWrapper>
      <View className="flex-1 justify-between">
        <View className="">
          <View className="flex-row gap-5">
            <BackButton className="mb-4" />
            <Text className="text-white text-2xl">Client Meetings</Text>
          </View>
          <View>
            <Text className="text-white mt-2">
              Tell us what you are comfortable with
            </Text>
            <View className="flex flex-wrap justify-center gap-3 mt-5">
              {data.map((item, index) => (
                <View className="w-full" key={index}>
                  <OnBoardingCards activeTab={0} title={item} />
                </View>
              ))}
            </View>
          </View>
        </View>
        <CustomButton title="Save & Continue" />
      </View>
    </ScreenWrapper>
  );
};

export default client_meeting;

const styles = StyleSheet.create({});
