import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function SimpleButton({
  height,
  width,
  borderRadius,
  backgroundColor,
  color,
  text,
  onPress,
  margin = 3,
}) {
  const styles = StyleSheet.create({
    buttonContainer: {
      width: width,
      height: height,
      backgroundColor: backgroundColor,
      borderRadius: borderRadius,
      justifyContent: "center",
      alignItems: "center",
      margin: margin,
    },
    text: {
      fontSize: 30,
      color: color,
      textAlign: "center",
      fontWeight: "200",
    },
  });

  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}