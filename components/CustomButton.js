import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { Shadow } from "react-native-shadow-2";

export default function CustomButton({ height, width, text, onPress }) {
  const styles = StyleSheet.create({
    buttonContainer: {
      width: width,
      height: height,
      backgroundColor: "#327896",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      //shadowColor: "#327896",
      //shadowRadius: 15,
    },
    text: {
      fontSize: 16,
      color: "white",
      textAlign: "center",
      fontWeight: "200",
    },
  });

  return (
    <Shadow
      startColor="rgba(50, 120, 150, 1 )"
      endColor="rgba(50, 120, 150, 0.1 )"
      //startColor="#327896"
      //endColor="#327890"
      distance={7}
      paintInside={true}
    >
      <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </Shadow>
  );
}
