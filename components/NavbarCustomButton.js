import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { SvgXml } from "react-native-svg";

//import iconSrc from "https://github.com/AndrewDarcinc/DebitCredit/blob/andrey/assets/icon/icon_navbar/Bills.svg";

export default function NavBarCustomButton({ iconSrc, color, onPress, text }) {
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
      <SvgXml xml={iconSrc} fill={color} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
