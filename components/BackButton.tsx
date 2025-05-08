import React from "react";
import { Pressable, Text, ViewStyle } from "react-native";

import { ArrowLeft } from "lucide-react-native";
import { useRouter } from "expo-router";

interface BackButtonProps {
  label?: string;
  iconOnly?: boolean;
  className?: string;
  style?: ViewStyle;
}

const BackButton: React.FC<BackButtonProps> = ({
  label = "Back",
  iconOnly = true,
  className = "",
  style,
}) => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.back()}
      className={`flex-row items-center ${
        iconOnly ? "" : "space-x-2"
      } ${className}`}
      style={style}
    >
      <ArrowLeft color="white" size={24} />
      {!iconOnly && <Text className="text-white text-base">{label}</Text>}
    </Pressable>
  );
};

export default BackButton;
