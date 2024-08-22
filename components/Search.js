import React, { useEffect, useState } from "react";
import { EvilIcons, Fontisto } from "@expo/vector-icons";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { Formik } from "formik";

export default function Search(props) {
  const { navigation } = props;

  const goSearch = (values) => {
    const query = values.query;
    navigation.navigate("Search", {
      query,
    });
  };

  return (
    <View className="flex flex-row  space-x-3 my-2 px-6 ">
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values) => goSearch(values)}
      >
        {({ handleChange, handleSubmit, values }) => (
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
      {/* <View className="bg-primary h-10 w-10 rounded-lg text-bold p-2 flex items-center justify-center">
        <Fontisto name="equalizer" size={20} color="white" />
      </View> */}
    </View>
  );
}
