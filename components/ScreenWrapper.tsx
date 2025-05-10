import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";

const ScreenWrapper = ({ children }: any) => {
  return <View className=" flex-1 pt-10 px-5 bg-[#171717]">{children}</View>;
};

export default ScreenWrapper;

const styles = StyleSheet.create({});
