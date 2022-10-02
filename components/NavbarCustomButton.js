import React from "react";
import { Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import Bills_SvgComponent from "./Bills_SvgComponent";
import Categories_SvgComponent from "./Categories_SvgComponent";

export default function NavBarCustomButton({
  iconSrc,
  isActive,
  onPress,
  text,
}) {
  const styles = StyleSheet.create({
    buttonContainer: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: 16,
      color: "black",
      textAlign: "center",
      fontWeight: "100",
    },
  });

  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      {/* <Image source={require("../assets/icon/icon_navbar/Bills.svg")} /> */}
      <Categories_SvgComponent color="red"></Categories_SvgComponent>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
