import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { dessertRecipesApi } from "../api/recipes";
import SliderRecommend from "./sliders/SliderRecommend";

export default function Desserts(props) {
  const { navigation } = props;
  const [desserts, setDesserts] = useState([]);
  const [number, setNumber] = useState(20);

  useEffect(() => {
    (async () => {
      const response = await dessertRecipesApi(number);
      setDesserts(response.results);
    })();
  }, []);

  const onNavigation = () => {
    navigation.navigate("SeeMore", {
      desserts,
    });
  };

  return (
    <View className="my-2">
      <Text className="px-6 text-xl font-bold text-black">Desserts</Text>
      <View className="px-2">
        <SliderRecommend
          title={"Desserts"}
          recipes={desserts}
          navigation={navigation}
        />
      </View>
      {desserts?.length < 10 ? null : (
        <View className="px-6 flex-row items-center justify-end w-full">
          <Text onPress={onNavigation} className="text-primary text-sm">
            See more
          </Text>
        </View>
      )}
    </View>
  );
}
