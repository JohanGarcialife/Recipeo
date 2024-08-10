import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";

export default function SliderPlates(props) {
  const { plates, navigation } = props;

  return (
    <View className="my-2">
      <ScrollView horizontal className="space-x-1 my-2">
        {plates?.map((plate) => (
          <Recipe key={plate.id} plate={plate} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
}

function Recipe(props) {
  const { plate, navigation } = props;
  const { id } = plate;

  const onNavigation = () => {
    navigation.navigate("Recipe", {
      id,
    });
  };

  return (
    <View className="items-center p-2" key={plate.key}>
      <Image
        source={{
          uri: `${plate?.image}`,
        }}
        className="h-24 w-24 rounded-full z-10 shadow-2xl"
      />
      <View className="relative">
        <View className="bg-gray4 rounded-lg w-36  -mt-10 items-center justify-between pt-14 pb-2 px-2">
          <View className="w-full h-16 overflow-scroll">
            <Text className="text-black text-center">{plate?.title}</Text>
          </View>
          <View className="flex-row mt-2 items-center justify-between w-full">
            <TouchableOpacity
              onPress={onNavigation}
              className="bg-primary rounded-lg w-full py-2 items-center justify-center text-center"
            >
              <Text className="text-white text-sm">Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
