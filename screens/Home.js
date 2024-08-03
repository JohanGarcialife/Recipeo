import React, { useEffect, useState } from "react";
import { View, Text } from 'react-native'
import { popularRecipesApi } from "../api/recipes";

export default function Home() {
    const [popularRecipes, setPopularRecipes] = useState([]);
    useEffect(() => {
      (async () => {
        const response = await popularRecipesApi();
        setPopularRecipes(response);
      })();
    }, []);

  return (
    <View className="flex-1 items-center justify-center bg-red-600">
      <Text className="text-black">text </Text>
    </View>
  )
}