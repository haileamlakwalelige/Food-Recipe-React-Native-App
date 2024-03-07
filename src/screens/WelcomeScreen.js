import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Image
        source={require("../../assets/images/welcome1.png")}
        style={styles.image}
      />
      <Text className="text-[#f96163] font-bold text-[16px]">
        40K+ Premium Recipes
      </Text>
      <Text className="font-bold text-[30px] text-[#3c444c] py-4">
        Cook Like A Chef
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        className="bg-primary rounded-xl py-3 px-10 w-[60%] text-center flex items-center text-white font-semibold"
      >
        <Text className="text-white font-semibold text-[18px]">Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginTop:16,
    width: 300,
    height: 400,
  },
  text: {
    color: "#f96163",
    fontSize: 22,
    fontWeight: "bold",
  },
  chef: {},
});
