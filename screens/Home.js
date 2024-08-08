import React, { useLayoutEffect } from "react";
import { View, Text, ScrollView } from "react-native";

import Header from "../components/Header";
import Search from "../components/Search";
import Cuisines from "../components/Cuisines";
import Popular from "../components/Popular";
import Diets from "../components/Diets";
import Intolerances from "../components/Intolerances";
import Desserts from "../components/Desserts";

export default function Home(props) {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="bg-white min-h-screen  pt-12 pb-2">
      <ScrollView>
        <Header navigation={navigation} />
        <Search navigation={navigation} />
        <Cuisines navigation={navigation} />
        {/* <Popular navigation={navigation}/> */}
        {/* <Diets navigation={navigation}/>
        <Desserts navigation={navigation}/>
        <Intolerances navigation={navigation}/> */}
      </ScrollView>
    </View>
  );
}
