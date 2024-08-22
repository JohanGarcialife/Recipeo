import React, { useLayoutEffect } from "react";
import { View, ScrollView } from "react-native";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";
import Header from "../components/Header";
import Search from "../components/Search";
import Cuisines from "../components/Cuisines";
import Popular from "../components/Popular";
import Diets from "../components/Diets";
import Intolerances from "../components/Intolerances";
import Desserts from "../components/Desserts";

// const adUnitId = TestIds.BANNER;
const adUnitId = "ca-app-pub-6950210574005139~5447799301";
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
        {/* <BannerAd
          unitId={adUnitId}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          requestOptions={{ requestNonPersonalizedAdsOnly: true }}
        /> */}
        <Popular navigation={navigation} />
        <Diets navigation={navigation} />
        {/* <BannerAd
          unitId={adUnitId}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          requestOptions={{ requestNonPersonalizedAdsOnly: true }}
        /> */}
        <Desserts navigation={navigation} />
        {/* <BannerAd
          unitId={adUnitId}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          requestOptions={{ requestNonPersonalizedAdsOnly: true }}
        /> */}
        <Intolerances navigation={navigation} />
        {/* <BannerAd
          unitId={adUnitId}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          requestOptions={{ requestNonPersonalizedAdsOnly: true }}
        /> */}
      </ScrollView>
    </View>
  );
}
