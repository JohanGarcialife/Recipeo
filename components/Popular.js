import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import SliderRecommend from "./sliders/SliderRecommend";
import { popularRecipesApi } from "../api/recipes";

export default function Popular(props) {
  const { navigation } = props;
  const [popularRecipes, setPopularRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await popularRecipesApi();

      setPopularRecipes(response.results);
    })();
  }, []);

  return (
    <View className="my-2">
      <Text className="px-6 text-xl font-bold text-black">Popular Recipes</Text>
      <View className="px-2">
        <SliderRecommend
          title={"Popular Recipes"}
          recipes={popularRecipes}
          navigation={navigation}
        />
      </View>
    </View>
  );
}
