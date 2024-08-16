import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { intolerancesRecipesApi } from "../api/recipes";
import SliderPlates from "./sliders/SliderPlates";

export default function Intolerances(props) {
  const { navigation } = props;
  const [intoleranceSelect, setIntoleranceSelect] = useState("Dairy");
  const [intoleranceList, setIntoleranceList] = useState([]);

  const intolerancesArray = [
    {
      id: 1,
      title: "Dairy",
    },
    {
      id: 2,
      title: "Egg",
    },
    {
      id: 3,
      title: "Gluten",
    },
    {
      id: 4,
      title: "Grain",
    },
    {
      id: 5,
      title: "Peanut",
    },
    {
      id: 6,
      title: "Seafood",
    },
    {
      id: 7,
      title: "Sesame",
    },
    {
      id: 8,
      title: "Shellfish",
    },
    {
      id: 9,
      title: "Soy",
    },
    {
      id: 10,
      title: "Sulfite",
    },
    {
      id: 11,
      title: "Tree Nut",
    },
    {
      id: 12,
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
            key={intolerance.id}
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
      <SliderPlates plates={intoleranceList} navigation={navigation} />
      {intoleranceList.length < 20 ? null : (
        <View className="px-6 flex-row items-center justify-end w-full">
          <Text className="text-primary text-sm">See more</Text>
        </View>
      )}
    </View>
  );
}
