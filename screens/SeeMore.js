import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  cuisineRecipesApi,
  dessertRecipesApi,
  dietRecipesApi,
  intolerancesRecipesApi,
} from "../api/recipes";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";
import RecipeGrid from "../components/RecipeGrid";

// const adUnitId = TestIds.BANNER;
const adUnitId = "ca-app-pub-6950210574005139~5447799301";

export default function SeeMore(props) {
  const { navigation, route } = props;
  const { params } = route;
  const { cuisineSelect, dietSelect, intoleranceSelect, desserts } = params;
  const [number, setNumber] = useState(100);
  const [list, setList] = useState([]);

  {
    cuisineSelect
      ? useEffect(() => {
          (async () => {
            const response = await cuisineRecipesApi(cuisineSelect, number);
            setList(response.results);
          })();
        }, [cuisineSelect])
      : null;
  }

  {
    intoleranceSelect
      ? useEffect(() => {
          (async () => {
            const response = await intolerancesRecipesApi(
              intoleranceSelect,
              number
            );
            setList(response.results);
          })();
        }, [intoleranceSelect])
      : null;
  }

  {
    dietSelect
      ? useEffect(() => {
          (async () => {
            const response = await dietRecipesApi(dietSelect, number);
            setDietList(response.results);
          })();
        }, [dietSelect])
      : null;
  }

  {
    desserts
      ? useEffect(() => {
          (async () => {
            const response = await dessertRecipesApi(number);
            setList(response.results);
          })();
        }, [])
      : null;
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="bg-white min-h-screen  pt-12 pb-2">
      <View className=" flex-row justify-between items-center mb-5 px-6">
        <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView className="px-6 pb-10 w-screen">
        {/* <BannerAd
          unitId={adUnitId}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          requestOptions={{ requestNonPersonalizedAdsOnly: true }}
        /> */}
        <View className="space-y-4">
          {list?.map((item) => (
            <RecipeGrid key={item.id} recipe={item} navigation={navigation} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
