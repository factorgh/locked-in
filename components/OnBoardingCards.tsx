import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

interface CustomProp {
  title: string;
  onPress?: (index: any) => void;
  icon?: string; // e.g., "chevron-forward-outline"
  activeTab?: number;
  index?: number;
}

const OnBoardingCards = ({
  title,
  onPress,
  icon,
  activeTab,
  index,
}: CustomProp) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        // activeTab === index ? styles.active : styles.inactive,
      ]}
      onPress={() => onPress?.(index)}
      activeOpacity={0.8}
    >
      <View style={styles.row}>
        <Text
          style={[
            styles.buttonText,
            activeTab === index ? styles.textActive : styles.textInactive,
          ]}
        >
          {title}
        </Text>
        {icon && (
          <Ionicons
            name={icon}
            size={20}
            style={[
              activeTab === index ? styles.textActive : styles.textInactive,
            ]}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default OnBoardingCards;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "#1B1B1B",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  active: {
    borderColor: "#3B82F6", // blue-500
    borderWidth: 2,
  },
  inactive: {
    borderColor: "#1B1B1B",
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  textActive: {
    color: "#3B82F6",
  },
  textInactive: {
    color: "#FFFFFF",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
