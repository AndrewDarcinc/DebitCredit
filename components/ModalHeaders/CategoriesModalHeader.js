import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { SvgXml } from "react-native-svg";
import NavBarCustomButton from "../NavbarCustomButton";
import SimpleButton from "../SimpeButton";

export default function DefaultModalHeader() {
  return (
    <View style={styles.flexRow}>
      <View style={styles.ZARPLATABATTON_wrapper}>
        <SimpleButton
          height={"100%"}
          width={"100%"}
          backgroundColor="#1A8C18"
          margin={0}
        ></SimpleButton>
        <View style={styles.iconStyleL}></View>
        <Text style={styles.upperText}>С категории</Text>
        <Text style={styles.lowerText}>Зарплата</Text>
      </View>
      <View style={styles.ZARPLATABATTON_wrapper}>
        <SimpleButton
          height={"100%"}
          width={"100%"}
          backgroundColor="#DECD33"
          margin={0}
        ></SimpleButton>
        <View style={styles.iconStyleR}></View>
        <Text style={styles.upperText}>На счет</Text>
        <Text style={styles.lowerText}>Зарплата</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  iconStyleR: {
    position: "absolute",
    borderRadius: "50%",
    backgroundColor: "#D9D9D9",
    width: 80,
    height: 80,
    right: 50,
    top: -40,
  },
  iconStyleL: {
    position: "absolute",
    borderRadius: "50%",
    backgroundColor: "#D9D9D9",
    width: 80,
    height: 80,
    left: 50,
    top: -40,
  },
  lowerText: {
    position: "absolute",
    top: "55%",
    left: 23,
    color: "white",
    fontSize: 30,
    fontWeight: "400",
  },
  upperText: {
    position: "absolute",
    top: "40%",
    left: 23,
    color: "white",
    fontSize: 20,
    fontWeight: "300",
  },
  flexRow: {
    flexDirection: "row",
    width: "100%",
    height: 150,
    //backgroundColor: "red",
  },
  ZARPLATABATTON_wrapper: {
    width: "50%",
    height: "100%",
  },
});
