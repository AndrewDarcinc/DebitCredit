import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
//import iconSrc from "../assets/icon/icon_navbar/";

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
      {/* <SvgUri
        uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/ruby.svg"
        width="100"
        height="100"
      /> */}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
