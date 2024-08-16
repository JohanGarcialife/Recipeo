import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { dietRecipesApi } from "../api/recipes";
import SliderPlates from "./sliders/SliderPlates";

export default function Diets(props) {
  const { navigation } = props;
  const [dietSelect, setDietSelect] = useState("Gluten Free");
  const [dietList, setDietList] = useState([]);

  const dietsArray = [
    {
      id: 1,
      title: "Gluten Free",
    },
    {
      id: 2,
      title: "Ketogenic",
    },
    {
      id: 3,
      title: "Vegetarian",
    },
    {
      id: 4,
      title: "Lacto-Vegetarian",
    },
    {
      id: 5,
      title: "Ovo-Vegetarian",
    },
    {
      id: 6,
      title: "Vegan",
    },
    {
      id: 7,
      title: "Pescetarian",
    },
    {
      id: 8,
      title: "Paleo",
    },
    {
      id: 9,
      title: "Primal",
    },
    {
      id: 10,
      title: "Low FODMAP",
    },
  ];

  useEffect(() => {
    (async () => {
      const response = await dietRecipesApi(dietSelect);
      setDietList(response.results);
    })();
  }, [dietSelect]);

  return (
    <View className="my-2">
      <Text className="px-6 text-xl font-bold text-black">Diets</Text>
      <ScrollView horizontal className="space-x-2 my-2 px-2">
        {dietsArray?.map((diet) => (
          <View
            key={diet.id}
            className={
              dietSelect === diet.title
                ? "bg-primary px-4 py-2 flex-row items-center justify-center text-center rounded-lg"
                : "text-primary px-4 py-2 flex-row items-center justify-center text-center"
            }
            onPress={() => setDietSelect(diet.title)}
          >
            <Text
              className={
                dietSelect === diet.title
                  ? "text-white text-xs"
                  : "text-primary text-xs"
              }
              onPress={() => setDietSelect(diet.title)}
            >
              {diet.title}
            </Text>
          </View>
        ))}
      </ScrollView>
      <SliderPlates plates={dietList} navigation={navigation} />
      {dietList.length < 20 ? null : (
        <View className="px-6 flex-row items-center justify-end w-full">
          <Text className="text-primary text-sm">See more</Text>
        </View>
      )}
    </View>
  );
}
