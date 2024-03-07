import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const SearchFilter = ({ icon, placeholder }) => {
  return (
    <View
      className="bg-white flex-row py-[16px] rounded-xl my-[16px]
     shadow-black pl-5"
      style={{
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 7,
      }}
    >
      <FontAwesome name={icon} size={20} color="#f96163" className="ml-4" />
      <TextInput className="pl-4 text-[16px] text-gray-800 placeholder:text-gray-500">
        {placeholder}
      </TextInput>
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({});
