import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default function RecipeGrid(props) {
  const { recipe, navigation } = props;
  const { id } = recipe;

  const onNavigation = () => {
    navigation.navigate("Recipe", {
      id,
    });
  };
  return (
    <TouchableOpacity onPress={onNavigation}>
      <View className="my-2 w-full h-40 flex-row justify-between border border-gray rounded-2xl">
        <View className="w-2/5 border-l-2xl">
          <Image
            source={{
              uri: `${recipe?.image}`,
            }}
            resizeMode="cover"
            imageStyle={{ borderLeftRadius: 16 }}
            className="h-full rounded-l-2xl "
          />
        </View>
        <View className="p-3 w-3/5 justify-center space-y-5">
          <Text className="font-bold text-black">{recipe?.title}</Text>
          <View className="flex-row space-x-2">
            <View className="rounded-full px-2 py-1 border border-borderBlue bg-secondary">
              <Text className="font-bold text-black text-xs">See details</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
