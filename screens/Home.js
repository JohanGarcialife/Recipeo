import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text } from "react-native";
import { popularRecipesApi } from "../api/recipes";
import Header from "../components/Header";
import Search from "../components/Search";
import Cuisines from "../components/Cuisines";

export default function Home(props) {
  const { navigation } = props;
  const [popularRecipes, setPopularRecipes] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     const response = await popularRecipesApi();
  //     setPopularRecipes(response.results);
  //   })();
  // }, []);

  return (
    <View className="bg-white min-h-screen px-6 py-12">
      <Header />
      <Search />
      <Cuisines />
    </View>
  );
}
