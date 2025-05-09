import { Tabs } from "expo-router";
import { Text, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";

type TabIconProps = {
  focused: boolean;
  iconName: string;
  title: string;
};

function TabIcon({ focused, iconName, title }: TabIconProps) {
  return focused ? (
    <View className="flex-row items-center justify-center">
      <Feather name={iconName} size={20} color="#FFA500" /> {/* Active color */}
      <Text className="text-secondary text-base font-semibold ml-2">
        {title}
      </Text>
    </View>
  ) : (
    <View className="justify-center items-center mt-4">
      <Feather name={iconName} size={18} color="#A8B5DB" />
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
          backgroundColor: "#0F0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
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
            <TabIcon focused={focused} iconName="home" title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              iconName="message-circle"
              title="Search"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="booking"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconName="book" title="Save" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconName="user" title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
}
