import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { recipeList } from "../Constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RecipeCard = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={recipeList}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => navigation.navigate("RecipeDetail", 
          { item: item })}
          style={{
            backgroundColor: "white",
            padding: 10,
            marginVertical: 5,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#ccc",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.1,
            shadowRadius: 7,
          }}
          className="items-center px-4 py-4"
        >
          <Image
            source={item.image}
            className="w-[120px] h-[120px]"
            style={{ resizeMode: "center" }}
          />
          <Text>{item.name}</Text>
          <View className="flex flex-row items-center mt-2 justify-between px-2 gap-4">
            <Text>{item.time}</Text>
            <View className="flex gap-1 flex-row">
              <Text>{item.rating}</Text>
              <FontAwesome name="star" size={16} color="#f96163" />
            </View>
          </View>
        </Pressable>
      )}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: "space-between",
      }}
      showsVerticalScrollIndicator={false}
      //   keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});
