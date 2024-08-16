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
      id:1,
      title: "African",
    },
    {
    id:2,
      title: "Asian",
    },
    {
      id:3,
      title: "American",
    },
    {
      id:4,
      title: "British",
    },
    {
      id:5,
      title: "Cajun",
    },
    {
      id:6,
      title: "Caribbean",
    },
    {
      id:7,
      title: "Chinese",
    },
    {
      id:8,
      title: "Eastern European",
    },
    {
      id:9,
      title: "European",
    },
    {
      id:10,
      title: "French",
    },
    {
      id:11,
      title: "German",
    },
    {id:12,
      title: "Indian",
    },
    {
      id:13,
      title: "Irish",
    },
    {
      id:14,
      title: "Italian",
    },
    {
      id:15,
      title: "Japanese",
    },
    {
      id:16,
      title: "Jewish",
    },
    {
      id:17,
      title: "Korean",
    },
    {
      id:18,
      title: "Latin American",
    },
    {
      id:19,
      title: "Mediterranean",
    },
    {
      id:20,
      title: "Mexican",
    },
    {
      id:21,
      title: "Middle Eastern",
    },
    {
      id:22,
      title: "Southern",
    },
    {
      id:23,
      title: "Spanish",
    },
    {
      id:24,
      title: "Thai",
    },
    {
      id:25,
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
