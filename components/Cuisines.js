import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import SliderPlates from "./sliders/SliderPlates";
import { cuisineRecipesApi } from "../api/recipes";

export default function Cuisines(props) {
  const { navigation } = props;
  const [cuisineSelect, setCuisineSelect] = useState("American");
  const [cuisineList, setCuisineList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await cuisineRecipesApi(cuisineSelect);
      setCuisineList(response.results);
    })();
  }, [cuisineSelect]);

  const cuisinesArray = [
    {
      title: "African",
    },
    {
      title: "Asian",
    },
    {
      title: "American",
    },
    {
      title: "British",
    },
    {
      title: "Cajun",
    },
    {
      title: "Caribbean",
    },
    {
      title: "Chinese",
    },
    {
      title: "Eastern European",
    },
    {
      title: "European",
    },
    {
      title: "French",
    },
    {
      title: "German",
    },
    {
      title: "Indian",
    },
    {
      title: "Irish",
    },
    {
      title: "Italian",
    },
    {
      title: "Japanese",
    },
    {
      title: "Jewish",
    },
    {
      title: "Korean",
    },
    {
      title: "Latin American",
    },
    {
      title: "Mediterranean",
    },
    {
      title: "Mexican",
    },
    {
      title: "Middle Eastern",
    },
    {
      title: "Southern",
    },
    {
      title: "Spanish",
    },
    {
      title: "Thai",
    },
    {
      title: "Vietnamese",
    },
  ];

  return (
    <View className="my-2">
      <Text className="text-xl font-bold text-black px-6">Cuisines</Text>

      <ScrollView horizontal className="space-x-2 my-2 px-2">
        {cuisinesArray?.map((cuisine) => (
          <View
            key={cuisine.id}
            className={
              cuisineSelect === cuisine.title
                ? "bg-primary px-4 py-2 flex-row items-center justify-center text-center rounded-lg"
                : "text-primary px-4 py-2 flex-row items-center justify-center text-center"
            }
            onPress={() => setCuisineSelect(cuisine.title)}
          >
            <Text
              className={
                cuisineSelect === cuisine.title
                  ? "text-white text-xs"
                  : "text-primary text-xs"
              }
              onPress={() => setCuisineSelect(cuisine.title)}
            >
              {cuisine.title}
            </Text>
          </View>
        ))}
      </ScrollView>
      <SliderPlates navigation={navigation} plates={cuisineList} />

      {cuisineList.length < 20 ? null : (
        <View className="px-6 flex-row items-center justify-end w-full">
          <Text className="text-primary text-sm">See more</Text>
        </View>
      )}
    </View>
  );
}
