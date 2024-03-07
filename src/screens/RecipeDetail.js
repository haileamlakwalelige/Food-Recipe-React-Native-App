import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const RecipeDetail = ({ navigation, route }) => {
  const { item } = route.params;

  console.log("item", item);
  return (
    <ScrollView>
      <View style={{ backgroundColor: item.color }} className=" flex-1">
        <SafeAreaView>
          <Pressable
            onPress={() => navigation.goBack()}
            className="flex flex-row justify-between pt-8 px-6 "
          >
            <FontAwesome name={"arrow-circle-left"} size={28} color="white" />
            <FontAwesome name="heart-o" size={28} color={"white"} />
          </Pressable>
        </SafeAreaView>
        <View
          className="flex-1"
          style={{
            backgroundColor: "whitesmoke",
            borderTopLeftRadius: 56,
            borderTopRightRadius: 56,
            alignItems: "center",
            paddingHorizontal: 16,
            marginTop: 100,
          }}
        >
          <View
            className="h-[300px] w-[300px] absolute text-center items-center"
            style={{ top: -100 }}
          >
            <Image
              source={item.image}
              className="w-[80%] h-[80%] items-center"
              style={{ resizeMode: "contain" }}
            />
          </View>
          {/* recipe name */}
          <Text
            className="text-black bg-transparent text-[28px] font-bold pb-3"
            style={{ marginTop: 160, fontFamily: "serif" }}
          >
            {item.name}
          </Text>
          <Text className="text-gray-700 text-[16px] font-light">
            {item.description}
          </Text>

          {/* Recipe Extra Detail */}
          <View className="flex flex-row justify-between   gap-2 mt-4 rounded-xl py-2 pb-3 px-2 pr-3">
            <View
              className=" flex rounded-xl items-center justify-center px-7 py-6 "
              style={{ backgroundColor: "rgba(255, 0, 0, 0.38)" }}
            >
              <Text className="text-[40px]">🕐</Text>
              <Text className="text-[20px], font-medium">{item.time}</Text>
            </View>
            <View
              className=" flex rounded-xl items-center justify-center px-7 py-6"
              style={{ backgroundColor: "rgba(135, 206, 235, 0.8)" }}
            >
              <Text className="text-[40px] ">🍳</Text>
              <Text className="text-[20px], font-medium">
                {item.difficulty}
              </Text>
            </View>
            <View
              className=" flex rounded-xl items-center justify-center px-7 py-6"
              style={{ backgroundColor: "rgba(255, 165, 0, 0.48)" }}
            >
              <Text className="text-[40px]">🔥</Text>
              <Text className="text-[20px], font-medium">{item.time}</Text>
            </View>
          </View>
        
        <View className="flex justify-start items-start">
            {/* Recipe Ingredients */}
          <View className="py-6 flex items-start justify-start flex-col gap-4">
            <Text
              className="font-extrabold text-[28px]"
              style={{ fontFamily: "serif" }}
            >
              Ingredients
            </Text>
            {item.ingredients.map((ingredient, index) => (
              <View key={index} className="flex flex-row items-start justify-start">
                <View
                  style={{
                    color: "red",
                    borderRadius: 5,
                  }}
                >
                  <Text className="text-red-500  text-[16px] font-extrabold pr-1">
                    {index + 1}.
                  </Text>
                </View>
                <Text className="text-black">{ingredient}</Text>
              </View>
            ))}
          </View>
        </View>

          {/* Recipe Steps */}
          <View className="py-6 flex items-start justify-center flex-col gap-4">
            <Text
              className="font-extrabold text-[28px] text-center"
              style={{ fontFamily: "serif", alignItems: "center" }}
            >
              Steps
            </Text>
            {item.steps.map((step, index) => (
              <View key={index} className="flex flex-row justify-start">
                <View
                  style={{
                    color: "red",
                    borderRadius: 5,
                  }}
                >
                  <Text className="text-gray-400  text-[16px] font-extrabold pr-1">
                    {index + 1}.
                  </Text>
                </View>
                <Text className="text-black">{step}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RecipeDetail;

const styles = StyleSheet.create({});
