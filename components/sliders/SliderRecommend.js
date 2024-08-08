import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { AirbnbRating } from "@rneui/themed";

export default function SliderRecommend(props) {
  const { title, recipes } = props;

  console.log(recipes);

  return (
    <View className="my-2">
      <ScrollView horizontal className="space-x-2">
        {recipes?.map((recipe) => (
          <View>
            <View className="flex-row w-72 justify-end items-center px-4">
              <Image
                source={{
                  uri: `${recipe.image}`,
                }}
                className="h-20 w-20 rounded-full z-10 shadow-2xl"
              />
            </View>
            <View className="bg-slate-100 w-72 shadow-sm  rounded-xl px-2 pb-2 pt-14 -mt-10 justify-start items-start h-36">
              <Text className="text-black font-bold">{recipe.title}</Text>
              {title === "Popular Recipes" && (
                <AirbnbRating defaultRating={5} size={20} showRating={false} />
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
