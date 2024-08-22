import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { AirbnbRating } from "@rneui/themed";

export default function SliderRecommend(props) {
  const { navigation, recipes, title } = props;

  return (
    <View className="my-2">
      <ScrollView horizontal className="space-x-2">
        {recipes?.map((recipe) => (
          <Card
            key={recipe.id}
            recipe={recipe}
            navigation={navigation}
            title={title}
          />
        ))}
      </ScrollView>
    </View>
  );
}

function Card(props) {
  const { recipe, navigation, title } = props;
  const { id } = recipe;

  const onNavigation = () => {
    navigation.navigate("Recipe", {
      id,
    });
  };
  return (
    <TouchableOpacity onPress={onNavigation}>
      <View className="flex-row w-72 justify-end items-center mr-4 px-4">
        {recipe.image ? (
          <Image
            source={{
              uri: `${recipe?.image}`,
            }}
            className="h-20 w-20 rounded-full z-10 shadow-2xl"
          />
        ) : null}
      </View>
      <View className="bg-slate-100 w-72 shadow-sm  rounded-xl px-2 pb-2 pt-14 -mt-10 justify-start items-start h-36">
        <Text className="text-black font-bold">{recipe?.title}</Text>
        {title === "Popular Recipes" && (
          <AirbnbRating defaultRating={5} size={20} showRating={false} />
        )}
      </View>
    </TouchableOpacity>
  );
}
