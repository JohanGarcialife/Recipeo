import React from "react";
import { EvilIcons, Fontisto } from "@expo/vector-icons";
import { View, TextInput } from "react-native";

export default function Search() {
  return (
    <View className="flex flex-row  space-x-3 my-2 px-6">
      <View className="flex-row items-center space-x-1 border border-gray3 rounded-lg w-[88%] px-2">
        <EvilIcons name="search" size={24} color="#a9a9a9" />
        <TextInput
          placeholder="Search recipe"
          placeholderTextColor="#a9a9a9"
          // onChange={(e) => onChange(e, "email")}
          className="text-black text-sm"
        />
      </View>
      <View className="bg-primary h-10 w-10 rounded-lg text-bold p-2 flex items-center justify-center">
        <Fontisto name="equalizer" size={20} color="white" />
      </View>
    </View>
  );
}
