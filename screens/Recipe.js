import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";
import { recipeInfoApi } from "../api/recipes";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Recipe(props) {
  const { navigation, route } = props;
  const { params } = route;
  const { id } = params;
  const [recipe, setRecipe] = useState(null);
  const [showIngredients, setShowIngredients] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await recipeInfoApi(id);
      setRecipe(response);
    })();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const image = { uri: `${recipe?.image}` };
  const spoonScore = recipe?.spoonacularScore / 10;
  const score = spoonScore.toFixed(1);

  return (
    <View className="bg-white min-h-screen  pt-12 pb-2">
      {/* Header */}
      <View className="px-6 flex-row justify-between items-center">
        <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <Entypo name="dots-three-horizontal" size={24} color="black" />
      </View>
      {/* Container */}
      <View className="pb-12 h-fit">
        <ScrollView className="px-6 rounded-full mt-5 ">
          {/* Image */}
          <ImageBackground
            source={image}
            resizeMode="cover"
            imageStyle={{ borderRadius: 16 }}
            className=" w-full h-48 rounded-full justify-between"
          >
            <View className="flex-row items-center justify-end p-3">
              <View className="bg-[#ffe1b3] flex-row space-x-1 items-center py-1 px-2 rounded-full">
                <FontAwesome name="star" size={14} color="#ffac30" />
                <Text className="text-xs">{score} </Text>
              </View>
            </View>
            <View className="flex-row items-center justify-end p-3">
              <View className="flex-row items-center space-x-2">
                <MaterialCommunityIcons
                  name="timer-outline"
                  size={18}
                  color="#797979"
                />
                <Text className="text-gray2 text-sm ">
                  {recipe?.readyInMinutes}
                </Text>
              </View>
            </View>
          </ImageBackground>
          {/* Name */}
          <View className="mt-5">
            <Text className="font-bold text-lg text-black">
              {recipe?.title}
            </Text>
          </View>
          {/* Tags */}
          <View className="mt-5 space-y-2">
            <View className="flex-row items-center space-x-2">
              <Text className="font-bold text-sm text-black">Cuisine:</Text>
              <ScrollView horizontal className="space-x-2">
                {recipe?.cuisines?.map((cuisine) => (
                  <View className="bg-gray4 py-1 px-2 rounded-lg w-fit">
                    <Text className="text-xs font-bold">{cuisine}</Text>
                  </View>
                ))}
              </ScrollView>
            </View>
            <View className="flex-row items-center space-x-2">
              <Text className="font-bold text-sm text-black">Dish Type:</Text>
              <ScrollView horizontal className="space-x-2">
                {recipe?.dishTypes?.map((dish) => (
                  <View className="bg-gray4 py-1 px-2 rounded-lg w-fit">
                    <Text className="text-xs font-bold text-black">{dish}</Text>
                  </View>
                ))}
              </ScrollView>
            </View>
            <View className="flex-row items-center space-x-2">
              <Text className="font-bold text-sm text-black">Diet:</Text>
              <ScrollView horizontal className="space-x-2">
                {recipe?.diets?.map((diet) => (
                  <View className="bg-gray4 py-1 px-2 rounded-lg w-fit">
                    <Text className="text-xs font-bold">{diet}</Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
          {/* Ingredients and steps */}
          <View className="flex-row space-x-2 items-center justify-between w-full mt-7 mb-5 px-6">
            <View
              className={
                showIngredients
                  ? "bg-primary py-3 rounded-2xl w-1/2 "
                  : "py-3 w-1/2"
              }
              onPress={() => setShowIngredients(true)}
            >
              <Text
                onPress={() => setShowIngredients(true)}
                className={
                  showIngredients
                    ? "font-bold  text-white text-center"
                    : "font-bold text-primary text-center"
                }
              >
                Ingredients
              </Text>
            </View>
            <View
              className={
                !showIngredients
                  ? "bg-primary py-3 rounded-2xl w-1/2"
                  : "py-3 w-1/2"
              }
              onPress={() => setShowIngredients(false)}
            >
              <Text
                onPress={() => setShowIngredients(false)}
                className={
                  !showIngredients
                    ? "font-bold  text-white text-center"
                    : "font-bold text-primary text-center"
                }
              >
                Steps
              </Text>
            </View>
          </View>
          {/* Ingredients and steps list */}
          <View>
            {showIngredients ? (
              <>
                {recipe?.extendedIngredients?.map((ingredient) => (
                  <View className="bg-gray4 px-3 py-6 w-full rounded-xl my-2 space-y-3">
                    <Text className="text-black font-bold uppercase">
                      {ingredient.name}
                    </Text>
                    <Text className="text-gray">{ingredient.original} </Text>
                  </View>
                ))}
              </>
            ) : (
              <View>
                <>
                  {recipe?.analyzedInstructions[0]?.steps?.map((step) => (
                    <View className="bg-gray4 px-3 py-6 w-full rounded-xl my-2 space-x-4 flex-row items-center">
                      <View className="bg-white px-4 py-2 rounded-full">
                        <Text className="text-primary font-bold uppercase">
                          {step?.number}
                        </Text>
                      </View>
                      <View className="space-y-3 w-full">
                        <Text className="text-gray ">{step.step}</Text>
                        {step?.length ? (
                          <View className="flex-row items-center space-x-2">
                            <MaterialCommunityIcons
                              name="timer-outline"
                              size={24}
                              color="#484848"
                            />
                            <Text className="text-gray">
                              {step?.length?.number}
                            </Text>
                            <Text className="text-gray">
                              {step?.length?.unit}
                            </Text>
                          </View>
                        ) : null}
                      </View>
                    </View>
                  ))}
                </>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
