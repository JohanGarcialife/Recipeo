import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

export default function SliderPlates(props) {
  const { cuisine } = props;

  return (
    <View className="my-2">
      <ScrollView horizontal className="space-x-1 my-2">
        {cuisine?.map((cuisine) => (
          <View
            className="items-center p-2"

            //onPress={() => setCuisineSelect(cuisine.title)}
          >
            <Image
              source={{
                uri: `${cuisine.image}`,
              }}
              className="h-24 w-24 rounded-full z-10 shadow-2xl"
            />
            <View className="relative">
              <View className="bg-gray4 rounded-lg w-36  -mt-10 items-center justify-between pt-14 pb-2 px-2">
                <View className="w-full h-16 overflow-scroll">
                  <Text
                    className="text-black text-center"
                    //onPress={() => setCuisineSelect(cuisine.title)}
                  >
                    {cuisine.title}
                  </Text>
                </View>
                <View className="flex-row items-center justify-between w-full">
                  <View>
                    <Text
                      className="text-gray2 text-xs"

                      //onPress={() => setCuisineSelect(cuisine.title)}
                    >
                      Time
                    </Text>
                    <Text
                      className="text-black text-xs"

                      //onPress={() => setCuisineSelect(cuisine.title)}
                    >
                      15 min
                    </Text>
                  </View>
                  {/* <Text
                  className="text-black "

                  //onPress={() => setCuisineSelect(cuisine.title)}
                >
                  text
                </Text> */}
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
