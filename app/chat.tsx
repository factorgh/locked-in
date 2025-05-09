import React from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Send } from "lucide-react-native"; // optional icon

type Message = {
  id: string;
  text: string;
  timestamp: string;
  sender: "me" | "other";
};

const initialMessages: Message[] = [
  {
    id: "1",
    text: "Hey! How are you?",
    timestamp: "10:00 AM",
    sender: "other",
  },
  {
    id: "2",
    text: "I'm good, thanks! You?",
    timestamp: "10:01 AM",
    sender: "me",
  },
  { id: "3", text: "Doing great 👍", timestamp: "10:02 AM", sender: "other" },
];

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    const newMsg: Message = {
      id: Date.now().toString(),
      text: input,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      sender: "me",
    };
    setMessages([...messages, newMsg]);
    setInput("");
  };

  const renderItem = ({ item }: { item: Message }) => {
    const isMe = item.sender === "me";
    return (
      <View
        className={`flex-row ${
          isMe ? "justify-end" : "justify-start"
        } mb-2 px-3`}
      >
        <View
          className={`max-w-[70%] px-4 py-2 rounded-xl ${
            isMe ? "bg-blue-500 rounded-br-none" : "bg-gray-200 rounded-bl-none"
          }`}
        >
          <Text className={`text-sm ${isMe ? "text-white" : "text-gray-800"}`}>
            {item.text}
          </Text>
          <Text
            className={`text-[10px] mt-1 ${
              isMe ? "text-blue-200" : "text-gray-500"
            } text-right`}
          >
            {item.timestamp}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 10 }}
        className="flex-1"
      />

      <View className="flex-row items-center p-3 border-t border-gray-200 bg-white">
        <TextInput
          placeholder="Type a message"
          value={input}
          onChangeText={setInput}
          className="flex-1 bg-gray-100 px-4 py-2 rounded-full mr-2 text-sm"
        />
        <TouchableOpacity
          onPress={sendMessage}
          className="bg-blue-500 p-2 rounded-full"
        >
          <Send color="white" size={20} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
