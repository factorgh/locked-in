import CustomButton from "@/components/CustomButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

const Onboard_one = () => {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  const handleTabPress = (index: any) => {
    setActiveTab(index);
  };

  const handleNext = () => {
    if (activeTab === 0) {
      router.push("/onboarding/stylist");
    } else {
      router.push("/onboarding/client");
    }
  };
  const data: Array<{
    id: number;
    title: string;
    desc1: string;
    desc2?: string;
  }> = [
    {
      id: 1,
      title: "Hairstylist",
      desc1: "You want to style hair",
      desc2: "You don't have to be a professional",
    },
    {
      id: 2,
      title: "Client",
      desc1: "You want to get your hair done !",
    },
  ];

  return (
    <ScreenWrapper>
      <View>
        <Text className="text-white text-2xl">Your Loc'd Profile !</Text>
        <Text className="text-gray-400 text-sm mt-3">Log in as:</Text>

        {/* Active section selector */}
        <View className="flex flex-col justify-around my-5">
          {data.map((item, index) => (
            <Animated.View
              entering={FadeInDown.duration(index * 30)
                .springify()
                .damping(14)}
              key={item.id}
            >
              <Pressable
                onPress={() => handleTabPress(index)}
                className={`flex flex-column items-center justify-center text-center gap-3 mb-4 bg-[#1B1B1B] ${
                  activeTab === index ? "border border-gray-500" : ""
                }  p-5 h-52 rounded-xl `}
              >
                {/* <View
                className={`flex-shrink-0 w-[60px] h-[60px] bg-white rounded-md border-[1px] ${
                  item.id === 1 ? "border-green-500" : "border-gray-300"
                }`}
              /> */}
                <View className="text-center">
                  <Text className="text-white text-lg text-center font-semibold mb-5">
                    {item.title}
                  </Text>
                  <Text className="text-gray-400 text-sm text-center">
                    {item.desc1}
                  </Text>
                  {item.desc2 && (
                    <Text className="text-gray-400 text-sm text-center">
                      {item.desc2}
                    </Text>
                  )}
                </View>
              </Pressable>
            </Animated.View>
          ))}
        </View>
        {/* Button */}
        <CustomButton onPress={handleNext} title="Next" />
      </View>
    </ScreenWrapper>
  );
};

export default Onboard_one;
