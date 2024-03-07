import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { categories } from "../Constant.js";

const CategoriesFilter = () => {
  return (
    <View className="">
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {categories.map((category, index) => {
          return (
            <View
              key={category.id}
              className=" flex  mr-[36px] rounded-lg px-8 py-3 font-bold mt-4 shadow-black shadow-md"
              style={{
                backgroundColor: index === 0 ? "#f96163" : "white",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.1,
                shadowRadius: 7,
              }}
            >
              <Text
                style={{
                  color: index === 0 ? "white" : "black",
                }}
                className="font-semibold"
              >
                {category.category}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoriesFilter;

const styles = StyleSheet.create({});
