import { View, Text } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View className="mb-3">
      <View>
        <Text className="text-black font-bold font-poppins text-2xl">
          Hello!
        </Text>
        <Text className="text-xs font-poppins text-gray2">
          What are you cooking today?
        </Text>
      </View>
    </View>
  );
}
