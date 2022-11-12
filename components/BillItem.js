import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Shadow } from "react-native-shadow-2";

export default function BillItem({}) {
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
    <View>
      <SvgXml xml={iconSrc} fill={color} />
      <View>
        <Text>Карта</Text>
        <Text>2000</Text>
      </View>
    </View>
  );
}
