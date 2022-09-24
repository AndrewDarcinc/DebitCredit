import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function CustomButton({ height, text, onPress, width }) {
  const styles = StyleSheet.create({
    buttonContainer: {
      width: width,
      height: height,
      backgroundColor: "#327896",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#327896",
      shadowRadius: 15,
    },
    text: {
      fontSize: 16,
      color: "white",
      textAlign: "center",
      fontWeight: "100",
    },
  });

  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
