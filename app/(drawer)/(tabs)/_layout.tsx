import { Tabs } from "expo-router";
import { Text, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";

type TabIconProps = {
  focused: boolean;
  iconName: string;
};

function TabIcon({ focused, iconName }: TabIconProps) {
  return focused ? (
    <View className="flex-row items-center justify-center mt-3">
      <Feather name={iconName} size={20} color="#FFA500" /> {/* Active color */}
    </View>
  ) : (
    <View className="justify-center items-center mt-3">
      <Feather name={iconName} size={18} color="#FFFFFF" />
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#232121",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 60,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0F0D23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconName="home" />
          ),
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconName="send" />
          ),
        }}
      />
      <Tabs.Screen
        name="booking"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconName="book" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconName="user" />
          ),
        }}
      />
    </Tabs>
  );
}
