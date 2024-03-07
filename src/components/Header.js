import { View, Text } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const Header = ({ headerText, headerIcon }) => {
  return (
    <View className="flex-row flex">
      <Text className="flex-1, text-primary font-extrabold mt-3 text-[22px] " style={{fontFamily:'serif'}}>{headerText}</Text>
      <FontAwesome icon={headerIcon} size={24} color="#f96163" />
    </View>
  );
};

export default Header;
