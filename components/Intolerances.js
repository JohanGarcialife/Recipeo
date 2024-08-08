import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { intolerancesRecipesApi } from "../api/recipes";
import SliderPlates from "./sliders/SliderPlates";

export default function Intolerances() {
  const [intoleranceSelect, setIntoleranceSelect] = useState("Dairy");
  const [intoleranceList, setIntoleranceList] = useState([]);

  const intolerancesArray = [
    {
      title: "Dairy",
    },
    {
      title: "Egg",
    },
    {
      title: "Gluten",
    },
    {
      title: "Grain",
    },
    {
      title: "Peanut",
    },
    {
      title: "Seafood",
    },
    {
      title: "Sesame",
    },
    {
      title: "Shellfish",
    },
    {
      title: "Soy",
    },
    {
      title: "Sulfite",
    },
    {
      title: "Tree Nut",
    },
    {
      title: "Wheat",
    },
  ];

  useEffect(() => {
    (async () => {
      const response = await intolerancesRecipesApi(intoleranceSelect);
      setIntoleranceList(response.results);
    })();
  }, [intoleranceSelect]);

  return (
    <View className="my-2">
      <Text className="px-6 text-xl font-bold text-black">Intolerances</Text>
      <ScrollView horizontal className="space-x-2 my-2 px-2">
        {intolerancesArray?.map((intolerance) => (
          <View
            className={
              intoleranceSelect === intolerance.title
                ? "bg-primary px-4 py-2 flex-row items-center justify-center text-center rounded-lg"
                : "text-primary px-4 py-2 flex-row items-center justify-center text-center"
            }
            onPress={() => setIntoleranceSelect(intolerance.title)}
          >
            <Text
              className={
                intoleranceSelect === intolerance.title
                  ? "text-white text-xs"
                  : "text-primary text-xs"
              }
              onPress={() => setIntoleranceSelect(intolerance.title)}
            >
              {intolerance.title}
            </Text>
          </View>
        ))}
      </ScrollView>
      <SliderPlates plates={intoleranceList} />
      {intoleranceList.length < 20 ? null : (
        <View className="px-6 flex-row items-center justify-end w-full">
          <Text className="text-primary text-sm">See more</Text>
        </View>
      )}
    </View>
  );
}
