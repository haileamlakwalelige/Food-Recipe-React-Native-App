import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 mx-[16px]">
      {/* render header */}
      <Header headerText={"Hi, Kingo"} headerIcon={"bell-o"} />
      <SearchFilter icon="search" placeholder={"enter your fav recipe"} />

      {/* categories filter */}
      <View >
        <Text className="font-bold text-[18px] mt-2">Categories</Text>
        <CategoriesFilter />
      </View>

      {/* Recipe list filter */}
      <View className="pb-80">
        <Text className="font-bold text-[18px] mt-2">Recipes</Text>
        <RecipeCard />
      </View>
    </SafeAreaView>
  );
}
