import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  FlatList,
} from "react-native";
import { AntDesign, EvilIcons, Fontisto } from "@expo/vector-icons";
import { Formik } from "formik";
import { searchRecipesApi } from "../api/recipes";
import { LinearGradient } from "expo-linear-gradient";

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

        <View className="flex flex-row  space-x-3 my-2  mb-5">
          <Formik
            initialValues={{ query: "" }}
            onSubmit={(values) => newSearch(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View className="flex-row items-center justify-between space-x-1 border border-gray3 rounded-lg w-[88%] pl-2">
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
          <View className="bg-primary h-10 w-10 rounded-lg text-bold p-2 flex items-center justify-center">
            <Fontisto name="equalizer" size={20} color="white" />
          </View>
        </View>

        <View className="">
          <FlatList
            data={search}
            numColumns={2}
            className="w-full ml-2"
            renderItem={({ item }) => (
              <Recipe key={item.key} recipe={item} navigation={navigation} />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}
function Recipe(props) {
  const { recipe, navigation } = props;
  const { id } = recipe;

  const onNavigation = () => {
    navigation.navigate("Recipe", {
      id,
    });
  };

  return (
    <TouchableOpacity onPress={onNavigation}>
      <ImageBackground
        key={recipe.id}
        source={{ uri: recipe.image }}
        resizeMode="cover"
        imageStyle={{ borderRadius: 16 }}
        className="h-48 rounded-full"
        style={{
          aspectRatio: 1,
          margin: 8,
        }}
      >
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          colors={["#000", "transparent"]}
          className="rounded-2xl h-full justify-end p-3"
        >
          <Text className="font-bold text-white">{recipe?.title}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
