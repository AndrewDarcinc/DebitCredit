import React from "react";
import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";

export default function NavBarCustomButton({ icon, isActive, onPress, text }) {
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
      <Image source={require("../assets/icon/icon_navbar/Bills.svg")}></Image>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
