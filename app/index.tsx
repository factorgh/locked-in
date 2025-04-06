import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import ScreenWrapper from "@/components/ScreenWrapper";

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Change to your target screen
      router.push("/onboarding/onboard_one");
    }, 10000);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <ScreenWrapper>
      <View className="flex-1 items-center justify-center mt-3">
        <LottieView
          source={require("../assets/splash.json")} // Replace with your Lottie file
          autoPlay
          loop={true}
          style={{ width: 200, height: 300 }}
        />
      </View>
    </ScreenWrapper>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splashConatiner: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
