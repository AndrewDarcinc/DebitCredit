import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { SvgUri } from "react-native-svg";
//import iconSrc from "https://github.com/AndrewDarcinc/DebitCredit/blob/andrey/assets/icon/icon_navbar/Bills.svg";

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
        width="100%"
        height="100%"
        uri="https://ln5.sync.com/dl/a14cbba10/rvhwwrq6-tycjunrj-q4ugaiu8-rp39nyxk"
        fill={"red"}
      /> */}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
