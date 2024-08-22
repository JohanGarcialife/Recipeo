import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign, EvilIcons, Fontisto } from "@expo/vector-icons";
import { Formik } from "formik";
import { searchRecipesApi } from "../api/recipes";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";
import RecipeGrid from "../components/RecipeGrid";

// const adUnitId = TestIds.BANNER;
const adUnitId = "ca-app-pub-6950210574005139~5447799301";

export default function Search(props) {
  const { navigation, route } = props;
  const { params } = route;
  const { query } = params;
  const [search, setSearch] = useState([]);
  const [goSearch, setGoSearch] = useState(query);

  const newSearch = (values) => {
    setGoSearch(values.query);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    (async () => {
      const response = await searchRecipesApi(goSearch);
      setSearch(response.results);
    })();
  }, [goSearch]);

  return (
    <View className="bg-white min-h-screen  pt-12 pb-2">
      <ScrollView className="px-6 pb-10 w-screen">
        <View className=" flex-row justify-between items-center mb-5">
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
        </View>

        <View className="flex flex-row space-x-2 my-2 max-w-screen mb-5">
          <Formik
            initialValues={{ query: "" }}
            onSubmit={(values) => newSearch(values)}
          >
            {({ handleChange, handleSubmit, values }) => (
              <View className="flex-row items-center justify-between space-x-1 border border-spacing-0 border-gray3 rounded-lg w-[85%] pl-2">
                <View className="flex-row items-center space-x-1">
                  <EvilIcons name="search" size={24} color="#a9a9a9" />
                  <TextInput
                    name="query"
                    placeholder="Search recipe"
                    onChangeText={handleChange("query")}
                    placeholderTextColor="#a9a9a9"
                    value={values.query}
                    className="text-black text-sm "
                  />
                </View>
                <TouchableOpacity onPress={handleSubmit}>
                  <View
                    onPress={handleSubmit}
                    className="bg-primary rounded-r-lg flex-row items-center py-2 px-4"
                  >
                    <Text className="font-bold text-sm text-white">Search</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
          {/* <View className="bg-primary h-10 w-10 rounded-lg text-bold p-2 flex items-center justify-center">
            <Fontisto name="equalizer" size={20} color="white" />
          </View> */}
        </View>
        {/* <BannerAd
          unitId={adUnitId}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          requestOptions={{ requestNonPersonalizedAdsOnly: true }}
        /> */}
        <View className="space-y-4">
          {search?.map((item) => (
            <RecipeGrid key={item.id} recipe={item} navigation={navigation} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
