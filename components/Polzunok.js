import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SvgXml } from "react-native-svg";
import SimpleButton from "./SimpeButton";

export default function Polzunok({ left, width }) {
  const styles = StyleSheet.create({
    activePolzunok: {
      position: "absolute",
      width: width,
      height: "5%",
      backgroundColor: "#606060",
      left: left,
      bottom: 15,
    },
  });
  return <View style={styles.activePolzunok}></View>;
}
